import '../../../assest/css/user/memberShips/silverMemberShip.css'
import image from '../../../images/فضية (1) 1.png'
import { Link } from 'react-router-dom'
export default function SilverMembership()
{
    let arr = [
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  ",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  العضوية",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  ",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  العضوية",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  "
    ]
    return(
        <div className="silver w-[350px] max-w-full rounded-[30px] p-2 md:p-6 pb-6 navShadow relative">
            <div className='image'>
                <img alt="load.." src={image}/>
                <div className="text">
                    600د
                </div>
            </div>
            <div className="box">
                {
                    arr.map((box,index)=>
                    {
                        return <h3 key={index+'k1'} className="part">{box}</h3>
                    })
                }
            </div>
            <Link to="/memberships/silver" className="join">
                <button>انضم الينا </button>
            </Link>
            <div className="memebr-name">
                العضوية الفضية 
            </div>
        </div>
    )
}
