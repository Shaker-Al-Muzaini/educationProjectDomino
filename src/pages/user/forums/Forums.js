import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Forum from "../../../components/user/forums/Forum";
import forumsData from '../../../data/forumsData'
import ForumsCategory from '../../../components/user/forums/ForumsCategoryBar'
import '../../../assest/css/user/forums/forumsPage.css'

export default function Forums()
{
    const [data,setData] = useState(forumsData)

    useEffect(()=>
    {
        window.scrollTo({
            behavior:"smooth",
            top:0
        });
        setData(forumsData.map(g=>{
            return {...g,groups:g.groups.slice(0,3)}
        }))
    },[])

    return(
        <div className="forums container">
            <div className="groups-wrapper">
                <div className="category-wrap">
                    <ForumsCategory/>
                </div>
                <div className="groups-content">
                    <h3 className="title">المنتديات و النوادي</h3>
                    <div>
                        {
                            data.length>0&&data.map((box,index)=>
                            {
                                return<div key={index+'m1'} className="box">
                                    <h3 className="box-title">{box.title}</h3>
                                    <Link to={`/forums/${box.type.toLowerCase()}`}
                                    className="watchAll">مشاهدة الجميع</Link>
                                    <div className="boxes-wrapper">
                                        {
                                            box.groups.map((forum,index)=>
                                            {
                                                return <Link to={`/forums/${box.type}/${forum.id}`} key={index+'z1'} > 
                                                    <Forum forum={forum}/>
                                                </Link>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}