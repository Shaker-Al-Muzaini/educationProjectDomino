import {useEffect} from 'react'
import PsychologistMenuBar from '../../../components/user/psychologist/PsychologistMenuBar'
import { useParams } from 'react-router-dom'
import {MdOutlineAttachFile} from 'react-icons/md'
import {HiOutlineCurrencyDollar} from 'react-icons/hi'
import {GiClockwork} from 'react-icons/gi'
import imageTest from '../../../images/psyoLand.webp'
import '../../../assest/css/user/psychologist/requestSession.css'


export default function RequestSession() {

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    })

return (
    <div className='container request-session'>
        <div className="request-wrapper">
                <div className="menu-wrapper">
                    <PsychologistMenuBar/>
                </div>

                <div className="content">
                    <div className='content-wrapper'>
                        <div className='content-form'>
                            <h3 className="content-title"> جلسة واحدة </h3>
                            <form onSubmit={e=>e.preventDefault()} className="form">
                                <div className='form-box'>
                                    <label className='form-label'>الاسم ثلاثي </label>
                                    <input className='form-input'/>
                                </div>
                                <div  className='form-box'>
                                    <label className='form-label'>رقم الجوال </label>
                                    <input className='form-input'/>
                                </div>
                                <div  className='form-box'>
                                    <label className='form-label'>وصف بسيط للحالة  </label>
                                    <textarea className='form-area'/>
                                </div>
                                <div className='form-box'>
                                    <label className='form-label'>الاستفادة </label>
                                    <div className='box-radio'>
                                        <input type={"radio"} name="pay" value=""/>
                                        <label>عن طريق العضوية</label>
                                    </div>
                                    <div className='box-radio'>
                                        <input type={"radio"} name="pay" className="" defaultChecked/>
                                        <label>دفع </label>
                                    </div>
                                </div>
                                <div className='box-file'>
                                    <input type={"file"} id="file"/>
                                    <MdOutlineAttachFile className='icon'/>
                                    <label htmlFor='file'>ارفاق وصل الدفع </label>
                                </div>
                                <div className="request-btn-wrapper">
                                <button type='submit' className='requset-btn'>طلب جلسه </button>
                                </div>
                            </form>
                        </div>
                        <div className='session'>
                            <div>
                            <img src={imageTest} alt=""/>
                            </div>
                            <div className='box'>
                                <span className='box-title'>جلسة واحدة</span>
                                <div className='counter'>
                                    <div className='box-counter'>
                                        <HiOutlineCurrencyDollar/>
                                        <span className='counter-text'>{100}</span>
                                    </div>
                                    <div className='box-counter'>
                                        <GiClockwork/>
                                        <span className='counter-text'>{30}</span>
                                    </div>
                                </div>
                            </div>
                            <p>
                            تعتبر جلسات الاخصائي النفسي من الامو المهمه جد التي تعمل علي تحسين الحاله النفسية لدي الطالب لتساعده وتشجعه علي الدراسه تعتبر جلسات الاخصائي النفسي من الامو المهمه جد التي تعمل علي تحسين الحاله النفسية لدي الطالب لتساعده وتشجعه علي الدراسه تعتبر جلسات الاخصائي النفسي من الامو المهمه جد التي تعمل علي تحسين الحاله النفسية لدي الطالب لتساعده وتشجعه علي الدراسه 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
)
}