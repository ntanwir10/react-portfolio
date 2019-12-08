import React from 'react';

function Progress(props) {
  return (
    <div className='progress'>
      <h6 className='progress-title'>{props.title}</h6>
      <div className='progress-inner'>
        <div className='progress-percentage'>{`${props.percentage}%`}</div>
        <div className='progress-container'>
          <span
            className='progress-active'
            style={props.isVisible ? { width: `${props.percentage}%` } : { width: 0 }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default Progress;
