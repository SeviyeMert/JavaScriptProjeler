import React from 'react'

function Course({ course }) {
    const { id, title, description, image } = course;
  return (
    <div className='course'>
        <div>
            <img src={image} width={210} height={110}/>
            <h4 className='course-title'>{title}</h4>
            <p className='course-desc'>{description}</p>
        </div>
    </div>
  )
}

export default Course