import {useEffect} from 'react'
import land from '../../../images/ef1a36fb1235e7dfddd57a96ac79558f (1).webp'
import AOS from 'aos'
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'
import '../../../assest/css/user/home/landHome.css'


export default function LandHomePage() {
  useEffect(()=>{
    AOS.init({
      duration:2000
    })
  },[]);

  return (
    <div className='landing'>
        <div className='landing-wrapper container'>
          <div>
              <h2 className='title'>اطمح، تعلّم، تقدّم.</h2>
              <p className='description'>
              شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاهدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية
              .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ. 
              </p>
              <Link to={"#"} className='ladning-btn'>انضم الينا</Link>
          </div>
          <div  data-aos="zoom-in-up">
              <img src={land} alt=""/>
          </div>
        </div>
        <div className='pagination'>
            <button className='btn btn-active'></button>
            <button className='btn'></button>
            <button className='btn'></button>
            <button className='btn'></button>
        </div>
    </div>
  )
}
