import {BsCheckLg} from 'react-icons/bs'
import image from '../../../images/اااا 1.png'
import '../../../assest/css/user/memberShips/silverBenefits.css'
export default function SilverBenefits()
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
        <div className='silver-benefits'>
            <div className="silver-benefits-wrapper">
                <h3 className="silver-benefits-title">مزايا العضوية </h3>
                {
                    arr.map((box,index)=>
                    {
                        return(
                            <div key={index+'q1'} className="silver-benefits-content">
                                <BsCheckLg className='check'/>
                                <h3 className='silver-benefits-box'>{box}</h3>
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
