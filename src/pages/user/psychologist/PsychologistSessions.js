import {useEffect} from 'react'
import PsychologistMenuBar from '../../../components/user/psychologist/PsychologistMenuBar'
import testImage from '../../../images/psyoSession.webp'
import SessionBox from '../../../components/user/psychologist/SessionBox'
import '../../../assest/css/user/psychologist/PsychologistSessionsPage.css'

export default function PsychologistSessions() {
    useEffect(()=>
    window.scrollTo({
        behavior:"smooth",
        top:0
    })
    ,[]);

    const localData=[
        {
            id:"1",
            title:"جلسة وحده",
            price:100,
            hours:30,
            image:testImage
        },
        {
            id:"2",
            title:"جلسة وحده",
            price:100,
            hours:30,
            image:testImage
        },
        {
            id:"3",
            title:"جلسة وحده",
            price:100,
            hours:30,
            image:testImage
        },
        {
            id:"4",
            title:"جلسة وحده",
            price:100,
            hours:30,
            image:testImage
        }
    ]

  return (
    <div className='psyo-category container'>
        <div className="groups-wrapper">
                <div className="category-wrap">
                    <PsychologistMenuBar/>
                </div>

                <div className="groups-content">
                    <h3 className="title">الاخصائي النفسي </h3>
                    <div className="boxes-wrapper">
                        {
                            localData.map(data=>{
                            return <SessionBox key={data.id+"ll"} session={data}/>
                            })
                        }
                    </div>
                </div>
            </div>
    </div>
  )
}
