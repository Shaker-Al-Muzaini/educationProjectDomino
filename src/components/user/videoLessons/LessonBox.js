import React from 'react'
import vector3 from '../../../images/icons/Vector (5).png'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/videoLessons/LessonBox.css'



export default function LessonBox({lesson, type}) {
  return (
    <div>
        <motion.div className="lesson" 
            initial={{opacity:0, y:"-10px"}} animate={{opacity:1, y:"0px",transition:{duration:0.4}}}>
            <img src={lesson.img} alt='load..' className="lesson-img"/>
            <div className="lesson-box-content">
                <div className="lesson-box-wrapper">
                    <div className="lesson-content">
                        <h2 className="lesson-title-heading">{lesson.title}</h2>
                        <span className="lesson-teacher text-[16px] font-[400]">
                            الأستاذ <span>{lesson.teacher}</span>
                        </span>
                    </div>
                    <div>
                        <span className={`lesson-ecersice ${lesson.isTrain?"isTrain":"isLesson"}`}>
                            {lesson.isTrain?"تمرين":"درس"}</span>
                    </div>
                </div>
                <div className="lesson-view">
                    <div className="lesson-view-wrapper">
                        <Link to={`/videoLessons/watch/${type}/${lesson.id}`} className="lesson-link"
                        >مشاهدة</Link>
                    </div>
                    <div className="image">
                        <img src={vector3} alt="load"/>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}
