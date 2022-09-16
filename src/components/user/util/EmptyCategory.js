import image from '../../../images/لا يوجد 1.webp'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/util/EmptyCategory.css'
export default function EmptyCategory({type})
{
    return(
        <div className='empty'>
            <img src={image} alt="load.." className="image"/>
            <h2 className='text'>
                عذرا لا يوجد نتائج لذهاب الي المجموعات اضغط <Link to={`${type}`} className='link'>هنا</Link>  
            </h2>
        </div>
    )
}