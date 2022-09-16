import image from '../../../images/online-courses-tutorials_52683-37861 1.webp'
import '../../../assest/css/user/home/coursesSystem.css'
export default function Courses()
{
    return(
        <div className="container courses-wrapper">
            <div className=" image-parent" data-aos="zoom-in-left">
                <img alt='load..' src={image} className="image"/>
            </div>
            <div className="text-wrapper" data-aos="zoom-in-right">
                <h3 className="heading-3">نظام الكورسات </h3>
                <p className="description text-[16px] lg:text-[18px] font-[400] opacity-80">شرح عن العضويات تبين فيها مزايه كل عضوية شرح عن العضويات تبين فيها مزايه كل عضوية شرح عن العضويات تبين فيها مزايه كل عضوية شرح عن العضويات تبين فيها مزايه كل عضوية شرح عن العضويات تبين فيها مزايه كل عضوية ..............</p>
            </div>
        </div>
    )
}