import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LessonsBar from "../../../components/user/videoLessons/LessonBar";
import videoLessonsData from '../../../data/videoLessonsData'
import LessonBox from "../../../components/user/videoLessons/LessonBox";
import '../../../assest/css/user/videoLessons/allVideoLessons.css'

export default function VideoLessons()
{
    const [data,setData] = useState(videoLessonsData)
    useEffect(()=>
    {
        window.scrollTo({
            behavior:"smooth",
            top:0
        });
        setData(videoLessonsData.map(g=>{
            return {...g,groups:g.groups.slice(0,3)}
        }))
    },[])

    return(
        <div className="video-lessons  container">
            <div className="video-lessons-wrapper">
            <div className="">
                <LessonsBar/>
                </div>

                <div className="video-lessons-content">
                    <h3 className="title">الدروس المرئيية  </h3>
                    <div>
                        {
                            data.length>0&&data.map((box,index)=>
                            {
                                return<div key={index+'m1'} className="box">
                                    <h3 className="box-title">{box.title}</h3>
                                    <Link to={`/groups/${box.type.toLowerCase()}`}
                                    className="watchAll">مشاهدة الجميع</Link>
                                    <div className="boxes-wrapper">
                                        {
                                            box.groups.map((group,index)=>
                                            {
                                                return <Link to={`/videoLessons/${box.type}/${group.id}`} key={index+'z1'} > 
                                                <LessonBox lesson={group} type={box.type}/></Link>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            </div>
    )
}