import image from '../../../images/فضية (1) 1.png'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/memberShips/goldenMemberShip.css'
export default function GoldMembership()
{
    let arr = [
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  ",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  العضوية",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  ",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  العضوية",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  ",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  العضوية",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  ",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  العضوية",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  ",
        "1- هنا نص مزايا العضوية 1- هنا نص مزايا  العضوية"
    ]
    return(
        <div className="gold">
            <div className='image'>
                <img alt="load.." src={image}/>
                <div className="text">
                    800د
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
            <Link to="/memberships/golden" className="join">
                <button>انضم الينا </button>
            </Link>
            <div className="memebr-name">
                العضوية الذهبية 
            </div>
        </div>
    )
}
