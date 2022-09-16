import { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import videoLessonsData from '../../../data/videoLessonsData'
import LessonsBar from '../../../components/user/videoLessons/LessonBar'
import LessonUrl from '../../../components/user/videoLessons/LessonUrl'
import '../../../assest/css/user/videoLessons/lessonUrlPage.css'
export default function LessonUrlPage() {

    const {lessonId}= useParams()
    const {lessonType} = useParams()
    const [lesson,setLesson] = useState({})
    
    useEffect(()=>
    {
        window.scrollTo({
            behavior:'smooth',
            top:0
        })
        const GROPUS = videoLessonsData.filter(gs=>gs.type===lessonType)
        setLesson(GROPUS[0].groups.filter(g=>g.id.toString()===lessonId.toString())[0])
    },[lessonId, lessonType])


  return (
    <div className="url-lesson container">
    <div className="groups-wrapper">
        <div className=".category-wrap">
            <LessonsBar/>
        </div>
        <div className="groups-content">
            <h3 className="title">الدروس المرئية</h3>
            <div>
                <h4 className='lesson-name'>{lesson.title}</h4>
                <div className='url-component-wrapper'>
                    <LessonUrl lesson={lesson}/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
