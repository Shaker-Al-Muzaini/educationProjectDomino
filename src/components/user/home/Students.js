import image1 from '../../../images/students-watching-webinar-computer-studying-online_74855-15522 (1) 2.webp'
import image2 from '../../../images/06 3.webp'
import image3 from '../../../images/school-students-blackboard-girls-young-woman-holding-huge-pencils-raising-hands-flat-illustration_74855-11037 2.webp'
import '../../../assest/css/user/home/students.css'
export default function Students()
{
    const students = [
        {
            img:image3,
            title:"أبتدائي"
        },
        {
            img:image2,
            title:"متوسط"
        },
        {
            img:image1,
            title:"ثانوي "
        }
    ]
    return(
        <div className="container students-wrapper">
            <h3 className="heading-three">جميع طلبة المدارس من ابتدائي الي ثانوي </h3>
            <p className="description">لان الجميع يستحق ان يكون احد افراد عائلتنا مهم كانت مرحلتك الدراسية نحن هنا عائلتك نفتخر بانضمامك معنا وكونك عضو بالمنصه </p>
            <div className="students-wraaper-boxes">
                {students.map((box,index)=>
                {
                    return(
                        <div key={index} data-aos="zoom-out" className='student-box'>
                            <img alt="load..." src={box.img} className="image"/>
                            <h3 className="student-type">{box.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}