import { useState, useEffect, useCallback } from 'react';
import useDebounce from '../useDebounce/useDebounce';
import binarySearch from '../../utils/binarySearch';

export type ItemHeight = number | ((index: number) => number);

export interface Options {
  itemHeight: ItemHeight; //每项的高度
  renderCount?: number; //渲染item的个数
  delay?: number; //滚动的延迟时间
}

export interface RV<T> {
  isScrolling: boolean; //是否触发滚动
  startIndex: number; //开始渲染的下标
  endIndex: number; //结束渲染的下标
  list: Array<T>; //渲染的的列表
  containerProps: {
    onScroll: (e: any) => void;
    style: { overflowY: 'auto' };
  }; //外层div
  wrapperProps: {
    style: {
      boxSizing: 'border-box';
      width: '100%';
      height: number;
      paddingTop: number;
    };
  }; //第二层div
}

function useVirtualized<T = any>(items: Array<T>, options: Options): RV<T> {
  const { itemHeight, renderCount = 10, delay = 100 } = options;

  // 缓存每个项目对应的 paddingTop 值, 多出最后一个值即为总高度
  const [paddingTopCache, setPaddingTopCache] = useState<Array<number>>([]);
  useEffect(() => {
    let paddingTopCache = [];
    if (typeof itemHeight === 'number') {
      paddingTopCache = items.reduce(
        (result, _, index) => {
          result.push((index + 1) * itemHeight);
          return result;
        },
        [0]
      );
    } else {
      paddingTopCache = items.reduce(
        (result, _, index) => {
          result.push(result[index] + itemHeight(index));
          return result;
        },
        [0]
      );
    }
    setPaddingTopCache(paddingTopCache);
  }, [items, itemHeight]);

  // 检测是否处于滚动状态
  const [isScrolling, setIsScrolling] = useState(false);
  const { run } = useDebounce(() => setIsScrolling(false), delay);

  // 滚动时更新 startIndex
  const [startIndex, setStartIndex] = useState(0);
  const handleScroll = useCallback(
    (e: any) => {
      e.preventDefault();
      run();
      if (Math.abs(e.target.scrollTop - paddingTopCache[startIndex]) > 0) {
        let newStartIndex = 0;
        if (typeof itemHeight === 'number') {
          newStartIndex = Math.floor(e.target.scrollTop / itemHeight);
        } else {
          // 二分查找对应 startIndex
          const searchResult = binarySearch(paddingTopCache, e.target.scrollTop);
          if (Array.isArray(searchResult)) {
            newStartIndex = Math.min(...searchResult);
          } else {
            newStartIndex = searchResult;
          }
        }
        setStartIndex(newStartIndex);
        setIsScrolling(true);
      }
    },
    [itemHeight, paddingTopCache, run, startIndex]
  );

  return {
    isScrolling,
    startIndex,
    endIndex: startIndex + renderCount,
    list: items.slice(startIndex, startIndex + renderCount),
    containerProps: {
      onScroll: handleScroll,
      style: { overflowY: 'auto' },
    },
    wrapperProps: {
      style: {
        boxSizing: 'border-box',
        width: '100%',
        height: paddingTopCache[items.length],
        paddingTop: paddingTopCache[startIndex],
      },
    },
  };
}

export default useVirtualized;

/**
 * 1.需要一个可视窗口，里面放固定个数的item
 * 2. 外面需要一个container,放所有的items
 * 3.根据itemHeight,计算出每个item 的top值放入paddingTopCache 缓存
 * 4. 根据container ScrollTop 和item 每一项的top值计算可视窗口该展示的items ,然后在返回startIndex 和endIndex
 * 5. 通过startIndex 和endIndex ，返回截取的items元素 items.slice(startIndex,endIndex)
 */
