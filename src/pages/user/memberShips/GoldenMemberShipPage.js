import { useEffect } from 'react'
import GoldMembership from '../../../components/user/memberShips/GoldenMemberShip'
import '../../../assest/css/user/memberShips/GoldenPage.css'
import GoldenGategorySidebar from '../../../components/user/memberShips/GoldenGategorySidebar'
import GoldenBenefits from '../../../components/user/memberShips/GoldenBenefits'
export default function GoldenMemberShipPage()
{
    useEffect(()=>
    {
        window.scrollTo({
            behavior:'smooth',
            top:0
    })})

    return(
        <div className='goldenPage container'>
            <div className={`goldenPage-wrapper`}>
                <div>
                    <GoldenGategorySidebar/>
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
                            <GoldMembership/>
                        }
                    </div>
                </div>
            </div>
            <div>
            <GoldenBenefits/>
            </div>
        </div>
    )
}