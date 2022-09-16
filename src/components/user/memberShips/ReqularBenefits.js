import {BsCheckLg} from 'react-icons/bs'
import image from '../../../images/اااا 1.png'
import '../../../assest/css/user/memberShips/reqularBenefits.css'
export default function ReqularBenefits()
{
    let arr = [
        " الهد ف الاول وما يخص كب عضو1- الهد ف الاول وما يخص كب عضوية 1- الهد ف الاول وما يخص كب عضوية ية ",
        " الهد ف الاول وما يخص كب عضو1- الهد ف الاول وما يخص كب عضوية 1- الهد ف الاول وما يخص كب عضوية ية ",
        " الهد ف الاول وما يخص كب عضو1- الهد ف الاول وما يخص كب عضوية 1- الهد ف الاول وما يخص كب عضوية ية ",
        " الهد ف الاول وما يخص كب عضو1- الهد ف الاول وما يخص كب عضوية 1- الهد ف الاول وما يخص كب عضوية ية ",
        " الهد ف الاول وما يخص كب عضو1- الهد ف الاول وما يخص كب عضوية 1- الهد ف الاول وما يخص كب عضوية ية ",
        " الهد ف الاول وما يخص كب عضو1- الهد ف الاول وما يخص كب عضوية 1- الهد ف الاول وما يخص كب عضوية ية "
    ]
    return(
        <div className='reqular-benefits'>
            <div className="reqular-benefits-wrapper">
                <h3 className="reqular-benefits-title">مزايا العضوية </h3>
                {
                    arr.map((box,index)=>
                    {
                        return(
                            <div key={index+'q1'} className="reqular-benefits-content">
                                <BsCheckLg className='check'/>
                                <h3 className='reqular-benefits-box'>{box}</h3>
                            </div>
                        )
                    })
                }
                <div className={`image`}>
                    <img alt='load..' src={image} className="member-image"/>
                </div>
            </div>
        </div>
    )
}
