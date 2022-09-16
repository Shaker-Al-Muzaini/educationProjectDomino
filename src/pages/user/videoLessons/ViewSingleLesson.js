import { useEffect, useState } from 'react'
import {useParams , Link} from 'react-router-dom'
import videoLessonsData from '../../../data/videoLessonsData'
import LessonsBar from '../../../components/user/videoLessons/LessonBar'
import VideoLessonSingleView from '../../../components/user/videoLessons/SingleLesson'
import '../../../assest/css/user/videoLessons/viewSingleLesson.css'

export default function ViewVideoLessonSingle()
{
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


    return(
    <div className="single-lessons container">
        <div className="video-lessons-wrapper">
            <div className="">
                <LessonsBar/>
            </div>
            <div className="video-lessons-content">
                <h3 className="video-title">الدروس المرئية</h3>
                <div className='grid-lesson'>
                    <h4 className='heading'>{lesson.title}</h4>
                    <div className='flex-boxes'>
                        <div>
                            <p className='description-lesson'>
                            شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . 
                            </p>
                            <Link to={`/videoLessons/watch/${lesson.id}`} className="watch-link"
                                >مشاهدة</Link>
                        </div>
                        <VideoLessonSingleView lesson={lesson}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
