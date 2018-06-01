import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      { props.index > 0 ? <button onClick={() => props.leftClick(props.index, props.tIndex)} className="shift">{'<'}</button> : ''}
      <p className="task">{props.task}</p>
      { props.index !== props.last ? <button onClick={() => props.rightClick(props.index, props.tIndex)} className="shift">{'>'}</button> : '' }
    </div>
  )
}

export default Card;