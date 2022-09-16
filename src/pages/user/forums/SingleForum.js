import { useState ,useEffect} from "react"
import { useParams } from "react-router-dom"
import forumData from '../../../data/forumsData'
import ForumsCategory from '../../../components/user/forums/ForumsCategoryBar'
import Forum from '../../../components/user/forums/Forum'
import '../../../assest/css/user/forums/singleForum.css'
export default function SingleForum()
{
    const {forumId}= useParams()
    const {forumType} = useParams()
    const [forum,setForum] = useState({})
    
    useEffect(()=>
    {
        window.scrollTo({
            behavior:'smooth',
            top:0
        })
        const FORUMS = forumData.filter(gs=>gs.type===forumType)
        console.log(FORUMS)
        setForum(FORUMS[0].groups.filter(g=>g.id.toString()===forumId.toString())[0])
    },[forumId, forumType]);

    
    return(
        <div className="container singleForum">
            <div className="singleForum-wrapper">
                <div className="categ-wrapper">
                    <ForumsCategory/>
                </div>
                <div className="content">
                    <div className="content-wrapper">
                        <h3 className="title">
                            المنتديات والنوادي 
                        </h3>
                        <div className="box-content">
                            <h3 className="forum-title">{forum?.title}</h3>
                            <p className="forum-description">
                                نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة 
                            </p>
                        </div>
                        <div className="box">
                            <h3 className="forum-title">اهداف </h3>
                            <p className="forum-description">
                                نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة نادي الكتابة 
                            </p>
                        </div>
                    </div>
                    <div className="lg:order-2 order-1 w-[80%] sm:w-[70%] md:w-fit mb-16 mx-auto md:mr-0 wrapper-forum">
                        <Forum forum={forum}/>
                    </div>
                </div>
            </div>
        </div>
    )
}