import React, { useState, useEffect, useMemo } from 'react';
import moment from 'moment';
import './List.scss';
const data = [
  {
    time: 20180625,
    tasks: []
  },
  {
    time: 20180626,
    tasks: [
      { name: '咨询&建议', time: 1300 },
      { name: '自定义任务', time: 1300 }
    ]
  },
  {
    time: 20180627,
    tasks: []
  },
  {
    time: 20180628,
    tasks: [
      { name: '...', time: 1300 },
      { name: '随访任务', time: 1400 },
      { name: '投诉任务', time: 1500 },
      { name: '预约任务', time: 1600 }
    ]
  },
  {
    time: 20180629,
    tasks: []
  },
  {
    time: 20180630,
    tasks: [{ name: '投诉任务', time: 1300 }]
  },
  {
    time: 20180701,
    tasks: []
  }
];

function formatWeek(index: string) {
  switch (index) {
    case '1':
      return '星期一';
    case '2':
      return '星期二';
    case '3':
      return '星期三';
    case '4':
      return '星期四';
    case '5':
      return '星期五';
    case '6':
      return '星期六';
    case '7':
      return '星期日';
  }
}

const List = () => {
  return (
    <div className="list-wrapper">
      {data.map((item, index) => (
        <div key={index} className="list-item">
          <header className="list-head">
            <time>{moment(item.time.toString()).format('YYYY年MM月DD日')}</time>
            <time>
              {formatWeek(moment(item.time, 'YYYYMMDD').format('E'))}({item.tasks.length})
            </time>
          </header>
          <div className="list-content">
            {item.tasks.map((v, index) => (
              <div key={index} className="task">
                <div>{v.name}</div>
                <div>{moment(v.time.toString()).format('hh:mm')}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* <ul className="list-container">
        {data.map(({ time, tasks }) => (
          <li className="list-item" key={time}>
            {tasks.map(({ name, time: taskTime }) => (
              <div key={taskTime}>name</div>
            ))}
          </li>
        ))}
        {Array(fillItemNumber)
          .fill('')
          .map((fillContent, fillIndex) => (
            <li className="fill-item" key={fillIndex}>
              {fillContent}
            </li>
          ))}
      </ul> */}
    </div>
  );
};

export default List;
