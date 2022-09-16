import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/videoLessons/LessonUrl.css'

export default function LessonUrl({lesson}) {
    
  return (
    <div className='boxlink'>
        <h4 className='boxlink-title'>{lesson.title}</h4>
        <Link to={`#`}
        className="text-[#3C58A0] text-[24px] md:text-[28px] font-[500] boxlink-link"
        >
            jssssssssssssssssssssssssssssssssssssennnnnnnnnnjnj
        </Link>
    </div>
  )
}
