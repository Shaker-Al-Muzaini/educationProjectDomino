import vector3 from '../../../images/icons/Vector (5).png'
import {motion} from 'framer-motion'
import '../../../assest/css/user/forums/forum.css'


export default function Forums({forum})
{
    return(
            <motion.div className="forum-wrapper" 
            initial={{opacity:0, y:"-10px"}} animate={{opacity:1, y:"0px",transition:{duration:0.4}}}>
            <img src={forum.img} alt='load..' className="image"/>
            <div className="wrapper-content">
                <h2 className="heading-2">{forum.title}</h2>
                <span className="name">
                        الأستاذ /<span>{forum.teacher}</span>
                </span>
                <div className='controls'>
                    <button className='follow-us'>انضم الان</button>
                    <div className="love-icon">
                        <img src={vector3} alt="load"/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}