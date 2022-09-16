import {useEffect} from 'react'
import PsychologistMenuBar from '../../../components/user/psychologist/PsychologistMenuBar'
import landImage from '../../../images/psyoLand.webp'
import '../../../assest/css/user/psychologist/psychologistPage.css'

export default function Physchologist() {

    useEffect(()=>
    window.scrollTo({
        behavior:"smooth",
        top:0
    })
    ,[]);

return (
    <div className='container psych'>
        <div className="psych-wrapper">
                <div className="menu-wrapper">
                    <PsychologistMenuBar/>
                </div>

                <div className="content">
                    <h3 className="title">الاخصائي النفسي </h3>
                    <div className='image'>
                        <img src={landImage} alt=""/>
                    </div>
                    <div>
                        <div className='box'>
                            <h4 className='box-title'>امور تساعدك علي الدراسة</h4>
                            <p className='box-description'>
                                نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه   نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه </p>
                        </div>
                        <div className='box'>
                            <h4 className='box-title'>امور تساعدك علي الدراسة</h4>
                            <p className='box-description'>
                                نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه   نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه </p>
                        </div>
                        <div className='box'>
                            <h4 className='box-title'>امور تساعدك علي الدراسة</h4>
                            <p className='box-description'>
                                نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه   نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه </p>
                        </div>
                        <div className='box'>
                            <h4 className='box-title'>امور تساعدك علي الدراسة</h4>
                            <p className='box-description'>
                                نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه   نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه </p>
                        </div>
                        <div className='box'>
                            <h4 className='box-title'>امور تساعدك علي الدراسة</h4>
                            <p className='box-description'>
                                نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه   نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه نص تجريبي يشرح عنوان النصيحه </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}