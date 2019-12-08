import React from 'react'

function Testimonial(props){
  return (
    <div className='testimonial-slideritem'>
      <div className='testimonial'>
        <div className='testimonial-content'>
          <p>
            {props.content.content}
          </p>
        </div>
        <div className='testimonial-author'>
          <h5>{props.content.author.name}</h5>
          <h6>{props.content.author.designation}</h6>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;