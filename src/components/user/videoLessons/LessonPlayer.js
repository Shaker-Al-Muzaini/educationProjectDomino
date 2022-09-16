import React from 'react'
import { Link } from 'react-router-dom'
import {TbPlayerPlay} from 'react-icons/tb'
import '../../../assest/css/user/videoLessons/LessonPlayer.css'

export default function LessonPlayer({lesson,type}) {
  return (
    <div className='player-box'>
        <h4 className='player-box-title'>{lesson.title}</h4>
        <div className='player-box-content'>
            <img src={lesson.img} alt="" className='player-box-image'/>
            <Link to={`/videoLessons/watch/url/${type}/${lesson.id}`} className="player-box-icon">
                <TbPlayerPlay/>
            </Link>
        </div>
    </div>
  )
}
