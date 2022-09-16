import React from 'react'
import '../../../assest/css/user/memberShips/silverGategorySidebar.css'

export default function SilverGategorySidebar() {

return (
    <div className='silverCategory'>
        <h3 className="silverCategory-title">العضوية</h3>
        <ul className="silverCategory-boxes">
            <button className="silverCategory-box"
                >شهري
            </button>
            <button className="silverCategory-box"
                >فصلي
            </button>
            <button className="silverCategory-box"
                >سنوي
            </button>
        </ul>
    </div>
)
}
