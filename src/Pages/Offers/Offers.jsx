import React, { useEffect, useState } from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import './Offers.scss'
import { useMyContext } from '../../context/MyContext';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { OffersApi } from '../../Apis/Apis';
const Offers = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
        AOS.init();
      }, []);
      const [data, setdata] = useState([])
    useEffect(() => {
        OffersApi().then((res)=>{setdata(res)})
      }, []);
    // const data = [
    //     {
    //         img: '/images/1offer.png',
    //         title: 'الباقة البرونزية',
    //         p1: '3499',
    //         p2: '5000',
    //     },
    //     {
    //         img: '/images/2offer.png',
    //         title: 'الباقة الفضية',
    //         p1: '4999',
    //         p2: '7000',
    //     },
    //     {
    //         img: '/images/3offer.png',
    //         title: 'الباقة الماسية',
    //         p1: '14999',
    //         p2: '19000',
    //     },
    //     {
    //         img: '/images/4offer.png',
    //         title: 'الباقة الذهبية',
    //         p1: '7999',
    //         p2: '12500',
    //     },
    //     {
    //         img: '/images/5offer.png',
    //         title: 'الاستشارات القانونية',
    //         p1: '700',
    //         p2: '1000',
    //     },
    // ]
    
    return (
        <>
            <CommonHead title="العروض" path="الصفحة الرئيسية \" />
            <div className='Offers' style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="container">
                    <h1>عروضنا</h1>
                    <h2 className='section-title text-center my-5'>العروض  الحالية</h2>
                    <div className="packs">
                        {data.map((item, i) => {
                            return (
                                <div className="pack" key={i} data-aos="fade-in" data-aos-duration="2000" data-aos-delay={`${(i + 1) * 50}`}>
                                    <div className="image">
                                        <img src={lang === "ar" ?item.image_ar:item.image_en} alt={lang === "ar" ?item.name_ar:item.name_en} />
                                    </div>
                                    <h1 className="text-center">{lang === "ar" ?item.name_ar:item.name_en}</h1>
                                    <div className="price">
                                        <span>{item.price}{lang === "ar" ?'ر.س':'SAR'}</span>
                                        <span>{item.price_before}{lang === "ar" ?'ر.س':'SAR'}</span>
                                    </div>
                                    <Link to='/askforaservice'>
                                        <div className="bottom">
                                            اشترك الآن
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Offers