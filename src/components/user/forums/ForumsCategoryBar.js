import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/forums/formusSidebar.css'

export default function ForumsCategoryBar() {
   
  return (
    <div className='groups-bar'>
    <h3 className="title">الفئات</h3>
    <ul className="bar-wrapper">
        <Link to={'/forums/'}className={`link`}
            >الجميع
        </Link>
        <Link to={'/forums/arabic'}  className="link"
            >اللغة العربية
        </Link>
        <Link to={'/forums/math'}  className="link"
            >الرياضيات
        </Link>
        <Link to={'/forums/history'}  className="link"
            >التاريخ
        </Link>
        <Link to={'/forums/economie'}  className="link"
            >الإقتصاد
        </Link>
        <Link to={'/forums/etiquette'}   className="link"
            >الاداب
        </Link>
        <Link to={'/forums/languages'}  className="link"
            >اللغات الأجنبية
        </Link>
    </ul>
</div>
  )
}
