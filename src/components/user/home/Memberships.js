import image from '../../../images/06 1.webp'
import '../../../assest/css/user/home/memberships.css'
export default function Memberships()
{
    return(
        <div className="container membersShip">
            <div className="membership-wrapper" data-aos="zoom-in-left">
                <h3 className="title">نظام العضويات </h3>
                <p className="description">شرح عن العضويات تبين فيها مزايه كل عضوية شرح عن العضويات تبين فيها مزايه كل عضوية شرح عن العضويات تبين فيها مزايه كل عضوية شرح عن العضويات تبين فيها مزايه كل عضوية شرح عن العضويات تبين فيها مزايه كل عضوية ..............</p>
            </div>
            <div className="image" data-aos="zoom-in-right">
                <img alt='load..' src={image}/>
            </div>
        </div>
    )
}