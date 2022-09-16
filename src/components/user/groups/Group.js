import {FaUser} from 'react-icons/fa'
import vector3 from '../../../images/icons/Vector (5).png'
import {motion} from 'framer-motion'
import '../../../assest/css/user/groups/groupBox.css'


export default function Group({group})
{
    return(
            <motion.div className="group" 
            initial={{opacity:0, y:"-10px"}} animate={{opacity:1, y:"0px",transition:{duration:0.4}}}>
            <img src={group.img} alt='load..' className="group-image"/>
            <div className="group-wrapper">
                <div className="group-content">
                    <div className="group-text">
                        <h2 className="group-title">{group.title}</h2>
                        <p className="group-time">{group.time}</p>
                    </div>
                    <div className="group-count">
                        <span className="number">العدد</span>
                        <span className="num">{group.number}/20</span>
                    </div>
                </div>
                <div className="group-data">
                    <div className="data-wrapper">
                        <div className="data-icon">
                            <FaUser className='icon'/>
                        </div>
                        <span className="group-teacther">
                            الأستاذ <span>{group.teacher}</span>
                        </span>
                    </div>
                    <div className="image">
                        <img src={vector3} alt="load"/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}