import React from 'react'
import {HiOutlineCurrencyDollar} from 'react-icons/hi'
import {GiClockwork} from 'react-icons/gi'
import vector3 from '../../../images/icons/Vector (5).png'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/psychologist/sessionBox.css'

export default function SessionBox({session}) {
return (
    <div className='session-box'>
        <img src={session.image} alt="" className='image'/>
        <div className='box-wrapper'>
            <span className='session-name'>جلسة واحدة</span>
            <div className='moreInfo-wrapper flex gap-x-3'>
                <div className='info-item'>
                    <HiOutlineCurrencyDollar/>
                    <span className='detail'>{session.price}</span>
                </div>
                <div className='info-item flex items-center gap-x-1'>
                    <GiClockwork/>
                    <span className='detail'>{session.hours}</span>
                </div>
            </div>
        </div>
        <div className='controls-session'>
            <Link to={"#"} className="btn-request-session">
            طلب جلسة</Link>
            <div className="love-session">
                <img src={vector3} alt="load"/>
            </div>
        </div>
    </div>
  )
}
