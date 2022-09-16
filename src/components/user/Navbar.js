import {useState , useRef , useEffect} from 'react'
import { Link} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import '../../assest/css/user/Navbar.css'

export default function Navbar() {
  const [showNav,setshowNav]=useState(false);
  const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setshowNav(p=>false);
            document.body.style.overflowY="visible"
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
return (
    <nav className='navBar'>
        <div className='nav-container container'>
        <nav className='nav-wrapper'>
            <div className='nav-logo '>
                <h2 className='heading-two '>لوجو</h2>
                <h3 className='heading-three'>أكادميتنا</h3>
            </div>
            <form className='search-form-first'>
                  <button className='search-icon'>
                    <HiOutlineSearch/>
                  </button>
                  <input 
                  className='search-input '
                  type={"search"}
                  placeholder="ابحث"/>
            </form>
              <button className='toggle-show' onClick={()=>setshowNav(p=>!p)}>
                {!showNav?<AiOutlineMenu/>:<AiOutlineClose/>}
              </button>
            <div className={`links-wrapper ${showNav?"show":"notShow"}`} ref={ref}>
                <div className='pages-links-wrapper'>
                  <Link to='' className={"page-link active"}>الرئيسية</Link>
                  <Link to={"/d"} className={"page-link"}>الدورات</Link>
                  <Link to={"/memberships"} className={"page-link"}>الاشتراكات</Link>
                  <Link to={"/d"} className={"page-link"}>اتصل بنا</Link>
                </div>
                <form className='search-form-second'>
                  <button className='search-icon'>
                    <HiOutlineSearch/>
                  </button>
                  <input 
                  className='search-input'
                  type={"search"}
                  placeholder="ابحث"/>
                </form>
                <div  className='register-links-wrapper'>
                  <Link to={"#"}
                  className="register-link"
                  >
                    انشاء حساب</Link>
                  <Link to={"#"}
                  className="register-link "
                  >تسجيل دخول</Link>
                  <Link to={"#"}
                  className="register-link"
                  >دخول ولي امر الطالب</Link>
                  <span className='language-translate'>
                    En
                  </span>
                </div>
            </div>
        </nav>
        </div>
    </nav>
  )
}