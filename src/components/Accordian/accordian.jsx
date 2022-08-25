import React,{useState} from 'react'

// images

import { UpArrow, DownArrow } from '../../assets'

const Accordian = ({question, answer}) => {
const [showAnswer, setShowAnswer] = useState(false);
  return (
        <>
                <div className="frequently-asked-question">
                          <p id="p1" onClick={() => setShowAnswer(!showAnswer)}>
                            {question} <span style={{cursor:"pointer"}}> {showAnswer ? <img src={UpArrow} alt="upArrow" /> : <img src={DownArrow} alt="upArrow" />}</span>
                          </p>
    
                          { showAnswer && (<p id="p2">{answer}</p>)}
                    </div>
        </>
  )
}

export default Accordian