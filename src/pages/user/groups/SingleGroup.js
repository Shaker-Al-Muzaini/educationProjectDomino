import { useEffect, useState } from 'react'
import {GoCalendar} from 'react-icons/go'
import {useParams} from 'react-router-dom'
import groupsData from '../../../data/groupsData'
import vector3 from '../../../images/icons/Vector (5).png'
import {FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/groups/singleGroupPage.css'


export default function SingleGropup()
{
    const {groupId}= useParams()
    const {groupType} = useParams()
    const [group,setGroup] = useState({})
    
    useEffect(()=>
    {
        window.scrollTo({
            behavior:'smooth',
            top:0
        })
        const GROPUS = groupsData.filter(gs=>gs.type===groupType)
        console.log(GROPUS[0].groups)
        setGroup(GROPUS[0].groups.filter(g=>g.id.toString()===groupId.toString())[0])
    },[groupId, groupType])

    return(
        <div className='container singleGroup'>
            <h4 className='group-title'>{group?.title}</h4>
            <div className='group-wrapper'>
                <div className='group-content'>
                    <div>
                        <img src={group?.img} alt="load.." className='group-image'/>
                        <div className='calender'>
                            <GoCalendar className='icon'/>
                            <h3 className='time'>{group?.time}</h3>
                        </div>
                    </div>
                    <div className='content'>
                        <h3 className='content-title'>وصف</h3>
                        <p className='content-description'>
                        وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبيوصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي  وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبيوصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي  
                        </p>
                    </div>
                    <div className='content'>
                        <h3 className='content-title'>الهدف من المجموعه </h3>
                        <p className='content-description'>
                        وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبيوصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي  وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبيوصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي وصف كامل للمجموعة عن الاعضاء و المعلم والتلاميذ والمستفاد نص تجريبي نص تجريبي  
                        </p>
                    </div>
                    <div className='group-event'>
                        <Link to={"#"} className='btn'>انضم الان</Link>  
                    </div>
                </div>

                <div className=''>
                    <div className='data-wrapper'>
                        <div className="flex justify-between items-start data">
                            <h2 className="group-title">{group.title}</h2>
                            <div className="count">
                                <span className="number">العدد</span>
                                <span className="num">{group?.number}/20</span>
                            </div>
                        </div>
                        <div className='calender'>
                            <GoCalendar className='icon'/>
                            <h3 className='time'>{group?.time}</h3>
                        </div>
                        <div className="teacher-wrapper">
                            <div className="data-icon">
                                <FaUser className='icon'/>
                            </div>
                            <span className="group-teacher">
                                الأستاذ <span>{group.teacher}</span>
                            </span>
                        </div>
                        <div className='join-event'>
                            <Link to="#" className='btn'>انضم الان</Link> 
                            <div className="loveIcon ">
                                <img src={vector3} alt="load"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}