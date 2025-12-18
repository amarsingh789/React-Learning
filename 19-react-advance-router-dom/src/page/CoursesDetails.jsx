import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {

    const Params = useParams()
    console.log(Params.id);
    

  return (
    <div>
      <h1>{Params.id} Courses Details</h1>
    </div>
  )
}

export default CoursesDetails
