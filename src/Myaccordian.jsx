import React, { useState } from 'react'

const Myaccordian = ({question, answer}) => {
 const[show,setShow] =useState(false);
    return (
    <><div className="set">
      <div className="question">
       <p onClick={()=>setShow(!show)} className="button">{show? "-":"+"}</p>
       <h3>{question}</h3>
       </div>
       {
        show && <p className="click">{answer}</p>
       }
       </div>
    </>
  )
}

export default Myaccordian
