import React from 'react'
import './ServiceGuide.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import CommonQ from '../../Components/CommonQ/CommonQ'
import { useMyContext } from '../../context/MyContext'
const ServiceGuide = () => {
    const data = [
        "خدامات إدارة الرواتب نظام حماية الأجور (الشهري)",
        "خدامات إدارة الرواتب نظام حماية الأجور(السنوي)",
        "خدمات تأسيس المؤسسات والشركات",
        "خدمات تحويل الهيئة القانونية للمنشآت",
        "خدمات نقل الملكية للمنشآت والشركات",
        "خدمات تخفيف الأعباء المالية للمنشآت",
        "الخدمات الزكوية الضريبية",
        "خدمات الدعم المباشر لمشاكل الوزارات الحكومية",
        "خدامات إدارة الرواتب نظام حماية الأجور (الشهري)",
        "خدمات التأمين التعاوني للمنشآت",
        "تسجيل العلامة التجارية",
        "إدارة الخدمات الالكترونية",
        "خدمات استشارات الأعمال",
        "خدمات التصميم",
        "خدمات التسويق الالكتروني",
        "خدمات التسجيل للعمالة ذات المهن العليا",
    ]
    const dataEn = [
        "Salary Management Services Wage Protection System (Monthly)",
        "Salary Management Services Wage Protection System (Yearly)",
        "Incorporation Services for Institutions and Companies",
        "Legal Entity Transformation Services for Establishments",
        "Ownership Transfer Services for Establishments and Companies",
        "Financial Burden Relief Services for Establishments",
        "Zakat and Taxation Services",
        "Direct Support Services for Government Ministries' Issues",
        "Salary Management Services Wage Protection System (Monthly)",
        "Cooperative Insurance Services for Establishments",
        "Trademark Registration",
        "Electronic Services Management",
        "Business Consultation Services",
        "Design Services",
        "Digital Marketing Services",
        "Registration Services for High-Profile Skilled Workers",
    ];
    
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <div className='ServiceGuide'>
            <CommonHead title="دليل الخدمات" path="الصفحة الرئيسية \" />
            <div className="guide">
                <div className="container" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
                    <h1 className='section-title'>دليل خدمات إنجاز</h1>
                    <div className="items">
                        {data.map((item) => {
                            return (
                                <div className="item">
                                    <div className="icon swing-in-top-fwd">
                                        <img src="/images/tick.png" alt="" />
                                    </div>
                                    <p>{item}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
            <CommonQ />
        </div>
    )
}

export default ServiceGuide