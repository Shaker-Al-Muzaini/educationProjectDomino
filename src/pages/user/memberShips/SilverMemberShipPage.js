import { useEffect } from 'react'
import '../../../assest/css/user/memberShips/silverPage.css'
import SilverMembership from '../../../components/user/memberShips/SilverMemberShip'
import SilverBenefits from '../../../components/user/memberShips/SilverBenefits'
import SilverGategorySidebar from '../../../components/user/memberShips/SilvermemberShipSidebar'
export default function SilverMemberShipPage()
{
    useEffect(()=>
    {
        window.scrollTo({
            behavior:'smooth',
            top:0
    })})

    return(
        <div className='silverPage container'>
            <div className={`silverPage-wrapper`}>
                <div>
                    <SilverGategorySidebar/>
                </div>
                <div className='content'>
                    <div className=''>
                        <h2 className="content-title">العضوية المجانية</h2>
                        <p className='content-desc'>
                            شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . 
                        </p>
                    </div>
                    <div className='member-wrapper'>
                        {
                            <SilverMembership/>
                        }
                    </div>
                </div>
            </div>
            <div>
            <SilverBenefits/>
            </div>
        </div>
    )
}