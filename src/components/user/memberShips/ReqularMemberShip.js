import image from '../../../images/فضية (1) 1.png'
import '../../../assest/css/user/memberShips/reqularMemberShip.css'
import { Link } from 'react-router-dom'
export default function RegularMembership()
{
    let arr = [
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  ",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  العضوية",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  ",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  العضوية",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  "
    ]
    return(
        <div className="regular">
            <div className='image'>
                <img alt="load.." src={image}/>
                <div className="text">
                    مجانا
                </div>
            </div>
            <div className="box">
                {
                    arr.map((box,index)=>
                    {
                        return <h3 key={index+'k9'} className="part">{box}</h3>
                    })
                }
            </div>
            <Link to="/memberships/regular" className="join">
                <button>انضم الينا </button>
            </Link>
            <div className="memebr-name">
                العضوية العادية 
            </div>
        </div>
    )
}
