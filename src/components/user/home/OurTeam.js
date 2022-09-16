import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import image from '../../../images/Intersect.webp'
import '../../../assest/css/user/home/ourTeam.css'
export default function OurTeam()
{
    const data = [
        {
            img:image,
            title:"الأستاذ أحمد",
            job:"مسؤول مادة الرياضيات"
        },
        {
            img:image,
            title:"الأستاذ أحمد",
            job:"مسؤول مادة الرياضيات"
        },
        {
            img:image,
            title:"الأستاذ أحمد",
            job:"مسؤول مادة الرياضيات"
        },
        {
            img:image,
            title:"الأستاذ أحمد",
            job:"مسؤول مادة الرياضيات"
        },
        {
            img:image,
            title:"الأستاذ أحمد",
            job:"مسؤول مادة الرياضيات"
        },
        {
            img:image,
            title:"الأستاذ أحمد",
            job:"مسؤول مادة الرياضيات"
        }
    ]
    return(
        <div className="container team">
            <h3 className="team-title">
                فريقنا الرائع
            </h3>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                }}>
                {
                    data.map((box,index)=>
                    {
                        return(
                            <SwiperSlide key={index+'z1'} className="swiberslide">
                                <div className='image-wrapper'>
                                <img alt='load..' src={box.img} className="team-image"/>
                                </div>
                                <h3 className='title'>{box.title}</h3>
                                <h4 className='description'>{box.job}</h4>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
