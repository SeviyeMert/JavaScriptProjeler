import React from 'react'

function Course({ course }) {
    const { id, title, description, image } = course;
  return (
    <div className='course'>
        <div>
            <img src={image} width={250}/>
            <h4>{title}</h4>
            <h5>{description}</h5>
        </div>
    </div>
  )
}

export default Course