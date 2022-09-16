import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/psychologist/psychologistSidebar.css'

export default function PsychologistMenuBar() {
return (
    <div className="psychologist-bar">
    <h3 className="title">الفئات</h3>
    <ul className="bar-wrapper">
        <Link to={'/psychologist/'}className={`link`}
            >النصائح والارشادات
        </Link>
        <Link to={'/psychologist/sessions'}  className="link"
            >جلسات الاخصائي النفسي 
        </Link>
        <Link to={'/psychologist/request/'+1}  className="link"
            >طلب جلسة اخصائي نفسي 
        </Link>
    </ul>
</div>
  )
}
