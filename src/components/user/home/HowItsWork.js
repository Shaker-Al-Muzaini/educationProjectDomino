import React from 'react'
import online from '../../../images/online.webp'
import '../../../assest/css/user/home/howItsWork.css'

export default function HowItsWork() {
  return (
    <div className='works'>
        <div className='container works-wrapper'>
            <div className='image'>
                <img src={online} alt="" className='img'/>
            </div>
            <div className='text'>
                <h4 className='title'>الية عمل المنصة </h4>
                <p className='description'>
                    شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع 
                    امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . </p>
            </div>
        </div>
    </div>
  )
}