import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/groups/groupsSidebar.css'

export default function GroupsCategoryBar() {
    return (
    <div className='groups-bar'>
        <h3 className="title">الفئات</h3>
        <ul className="bar-wrapper">
            <Link to={'/groups/'} className={`link`}
                >الجميع
            </Link>
            <Link to={'/groups/arabic'} className="link"
                >اللغة العربية
            </Link>
            <Link to={'/groups/math'} className="link"
                >الرياضيات
            </Link>
            <Link to={'/groups/history'} className="link"
                >التاريخ
            </Link>
            <Link to={'/groups/economie'} className="link"
                >الإقتصاد
            </Link>
            <Link to={'/groups/etiquette'} className="link"
                >الاداب
            </Link>
            <Link to={'/groups/languages'} className="link"
                >اللغات الأجنبية
            </Link>
        </ul>
</div>
)
}
