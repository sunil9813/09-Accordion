import React, { useState } from "react"

const Accordion = ({ title, desc }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <section>
        <div className='items'>
          <div className='title'>
            {title}
            <button onClick={() => setShow(!show)}>{show ? <i className='fa fa-minus'></i> : <i className='fa fa-plus'></i>}</button>
          </div>
          {/* 
		    Logical AND (&&)   => if show is true then only show show my paragarph
		  */}
          <div className='content'>{show && <p> {desc}</p>}</div>
        </div>
      </section>
    </>
  )
}

export default Accordion
