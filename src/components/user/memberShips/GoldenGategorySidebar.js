import React from 'react'
import '../../../assest/css/user/memberShips/GoldenGategorySidebar.css'

export default function GoldenGategorySidebar() {

return (
    <div className='goldenCategory'>
        <h3 className="goldenCategory-title">العضوية</h3>
        <ul className="goldenCategory-boxes">
            <button className="goldenCategory-box"
                >شهري
            </button>
            <button className="goldenCategory-box"
                >فصلي
            </button>
            <button className="goldenCategory-box"
                >سنوي
            </button>
        </ul>
    </div>
)
}
