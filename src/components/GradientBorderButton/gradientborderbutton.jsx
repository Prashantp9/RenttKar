import React from 'react';
import './gradientborderbutton.css';

const Gradientborderbutton = ({onClick, name, classname}) => {
  return (
    <>
        <button className="listItem" onClick={onClick}>
          <div className={classname} style={{background: "#070707"}}>
            <span className="listText">{name}</span>
          </div>
        </button>
    </>
  )
}

export default Gradientborderbutton;