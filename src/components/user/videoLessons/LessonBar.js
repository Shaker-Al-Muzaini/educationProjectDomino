import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/videoLessons/videoLessonsBar.css'

export default function LessonsBar() {
  return (
    <>
     <div className="lessons-bar">
    <h3 className="title">الفصل الدراسي </h3>
    <ul className="bar-wrapper">
        <Link to={'/videoLessons/'}className={`link
        ${window.location.pathname==="/groups"&&"acive-line"}`}
            >الفصل الاول 
        </Link>
        <Link to={'/videoLessons/'}  className="link"
            > الفصل الثاني 
        </Link>
        <Link to={'/videoLessons/'}  className="link"
            >الفصل الثالث
        </Link>
    </ul>
</div>
    <div className="lessons-bar">
    <h3 className="title">الفئات</h3>
    <ul className="bar-wrapper">
        <Link to={'/videoLessons/'}className={`link 
        ${window.location.pathname==="/videoLessons"&&"active-line"}`}
            >الجميع
        </Link>
        <Link to={'/videoLessons/arabic'}  className="link"
            >اللغة العربية
        </Link>
        <Link to={'/videoLessons/math'}  className="link"
            >الرياضيات
        </Link>
        <Link to={'/videoLessons/history'}  className="link"
            >التاريخ
        </Link>
        <Link to={'/videoLessons/economie'}  className="link"
            >الإقتصاد
        </Link>
        <Link to={'/videoLessons/etiquette'}  className="link"
            >الاداب
        </Link>
        <Link to={'/videoLessons/languages'} className="link"
            >اللغات الأجنبية
        </Link>
    </ul>
</div>
<div className="lessons-bar">
    <h3 className="title"> المحاور  </h3>
    <ul className="bar-wrapper">
        <Link to={'/videoLessons/'}className={`link 
        ${window.location.pathname==="/groups"&&"active-line"}`}
            > الوحده الاولة   
        </Link>
        <Link to={'/videoLessons/'}  className="link"
            >  الوحده الثانية   
        </Link>
        <Link to={'/videoLessons/'}  className="link"
            > الوحده الثالثة   
        </Link>
    </ul>
</div>
</>
  )
}
