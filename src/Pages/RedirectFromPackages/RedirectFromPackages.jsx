import React, { useEffect, useState } from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import Calculator from '../../Components/Calculator/Calculator'
import './RedirectFromPackages.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';
import { useMyContext } from '../../context/MyContext';
import Swal from 'sweetalert2';
import { Helmet, HelmetAr, ServiceManagemenApi, ServiceRequestApi } from '../../Apis/Apis';
const RedirectFromPackages = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    lang === 'ar' ? HelmetAr('طلب خدمة') :
        Helmet('Ask For A Service')
        const [data2, setdata2] = useState([])
    useEffect(() => {
        ServiceManagemenApi().then((res) => {
            setdata2(res)
            console.log(data2[0]?.price)
        })
    }, []);
    const id = useParams().id
    const [showCalc, setshowCalc] = useState(id === "service-management-bronze" || id === "service-management-silver" || id === "service-management-gold" || id === "service-management-diamond")
    const Titles = {
        "service-management-bronze": {
            "en": "Service Management Bronze",
            "ar": "إدارة الخدمات - الباقة البرونزية"
        },
        "service-management-silver": {
            "en": "Service Management Silver",
            "ar": "إدارة الخدمات - الباقة الفضية"
        },
        "service-management-gold": {
            "en": "Service Management Gold",
            "ar": "إدارة الخدمات - الباقة الذهبية"
        },
        "service-management-diamond": {
            "en": "Service Management Diamond",
            "ar": "إدارة الخدمات - الباقة الماسية"
        },
        "wage-management-monthly-bronze": {
            "en": "Wage Management Monthly Bronze",
            "ar": "إدارة الأجور الشهرية - الباقة البرونزية"
        },
        "wage-management-monthly-silver": {
            "en": "Wage Management Monthly Silver",
            "ar": "إدارة الأجور الشهرية - الباقة الفضية"
        },
        "wage-management-monthly-gold": {
            "en": "Wage Management Monthly Gold",
            "ar": "إدارة الأجور الشهرية - الباقة الذهبية"
        },
        "wage-management-monthly-platenium": {
            "en": "Wage Management Monthly Platinum",
            "ar": "إدارة الأجور الشهرية - الباقة البلاتينية"
        },
        "wage-management-yearly-bronze": {
            "en": "Wage Management Yearly Bronze",
            "ar": "إدارة الأجور السنوية - الباقة البرونزية"
        },
        "wage-management-yearly-silver": {
            "en": "Wage Management Yearly Silver",
            "ar": "إدارة الأجور السنوية - الباقة الفضية"
        },
        "wage-management-yearly-gold": {
            "en": "Wage Management Yearly Gold",
            "ar": "إدارة الأجور السنوية - الباقة الذهبية"
        },
        "wage-management-yearly-platenium": {
            "en": "Wage Management Yearly Platinum",
            "ar": "إدارة الأجور السنوية - الباقة البلاتينية"
        },
        "design-and-videos": {
            "en": "Design and Videos",
            "ar": "تصميم وفيديوهات"
        },
        "social-media-management": {
            "en": "Social Media Management",
            "ar": "إدارة وسائل التواصل الاجتماعي"
        },
        "websites": {
            "en": "Websites",
            "ar": "مواقع الويب"
        },
        "applications-for-apple-android-devices": {
            "en": "Applications for Apple & Android Devices",
            "ar": "تطبيقات لأجهزة آبل وأندرويد"
        },
        "create-an-online-store": {
            "en": "Create an Online Store",
            "ar": "إنشاء متجر إلكتروني"
        },
        "salary-management-services-wage-protection-system-monthly": {
            "en": "Salary Management Services Wage Protection System (Monthly)",
            "ar": "خدمات إدارة الرواتب نظام حماية الأجور (الشهري)"
        },
        "salary-management-services-wage-protection-system-yearly": {
            "en": "Salary Management Services Wage Protection System (Yearly)",
            "ar": "خدمات إدارة الرواتب نظام حماية الأجور (السنوي)"
        },
        "incorporation-services-for-institutions-and-companies": {
            "en": "Incorporation Services for Institutions and Companies",
            "ar": "خدمات تأسيس المؤسسات والشركات"
        },
        "legal-entity-transformation-services-for-establishments": {
            "en": "Legal Entity Transformation Services for Establishments",
            "ar": "خدمات تحويل الهيئة القانونية للمنشآت"
        },
        "ownership-transfer-services-for-establishments-and-companies": {
            "en": "Ownership Transfer Services for Establishments and Companies",
            "ar": "خدمات نقل الملكية للمنشآت والشركات"
        },
        "financial-burden-relief-services-for-establishments": {
            "en": "Financial Burden Relief Services for Establishments",
            "ar": "خدمات تخفيف الأعباء المالية للمنشآت"
        },
        "zakat-and-taxation-services": {
            "en": "Zakat and Taxation Services",
            "ar": "الخدمات الزكوية الضريبية"
        },
        "direct-support-services-for-government-ministries-issues": {
            "en": "Direct Support Services for Government Ministries' Issues",
            "ar": "خدمات الدعم المباشر لمشاكل الوزارات الحكومية"
        },
        "cooperative-insurance-services-for-establishments": {
            "en": "Cooperative Insurance Services for Establishments",
            "ar": "خدمات التأمين التعاوني للمنشآت"
        },
        "trademark-registration": {
            "en": "Trademark Registration",
            "ar": "تسجيل العلامة التجارية"
        },
        "electronic-services-management": {
            "en": "Electronic Services Management",
            "ar": "إدارة الخدمات الالكترونية"
        },
        "business-consultation-services": {
            "en": "Business Consultation Services",
            "ar": "خدمات استشارات الأعمال"
        },
        "design-services": {
            "en": "Design Services",
            "ar": "خدمات التصميم"
        },
        "digital-marketing-services": {
            "en": "Digital Marketing Services",
            "ar": "خدمات التسويق الالكتروني"
        },
        "registration-services-for-high-profile-skilled-workers": {
            "en": "Registration Services for High-Profile Skilled Workers",
            "ar": "خدمات التسجيل للعمالة ذات المهن العليا"
        }
    }
    const calc = {
        'bronze': {
            price: parseInt(data2[0]?.price),
            empNum: 4
        },
        'silver': {
            price: parseInt(data2[1]?.price),
            empNum: 9
        },
        'gold': {
            price: parseInt(data2[2]?.price),
            empNum: 9
        },
        'diamond': {
            price: parseInt(data2[3]?.price),
            empNum: 9
        }
    };


    // console.log(exist)
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [mobile, setmobile] = useState('')
    const [city, setcity] = useState('')
    const [service_type, setservice_type] = useState(id)
    const [notes, setnotes] = useState('')

    const [data, setdata] = useState([])

    const handleSubmit = () => {
        if (name !== '' && mobile !== '') {
            //   console.log(name,email,mobile,city,service_type,notes)
            ServiceRequestApi(name, mobile, service_type, notes).then((res) => {
                // console.log(res);
                setdata(res);
            }).then(() => data.id && Swal.fire({
                title: lang === "ar" ? 'تم' : 'Submited',
                text: lang === "ar" ? 'تم ارسال البيانات بنجاح' : 'Data was sent successfully',
                icon: 'success',
                timer: 2000,
                confirmButtonText: lang === "ar" ? 'الرجوع' : 'Return'
            }))
        }
        else {
            Swal.fire({
                title: lang === "ar" ? '! خطأ' : 'Error!',
                text: lang === "ar" ? `${name === '' ? "لم يتم ادخال الاسم ." : ""} ${mobile === '' ? "لم يتم ادخال رقم الهاتف ." : ""}` : `${name === '' ? "The Name is Missing ." : ""}${mobile === '' ? "The Mobile is Missing ." : ""}`,
                icon: 'error',
                timer: 2000,
                confirmButtonText: lang === "ar" ? 'الرجوع' : 'Return'
            })
        }
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <CommonHead title={lang === "ar" ? Titles[id].ar : Titles[id].en} path={t('askService.path')} />
            <div className="redirectCont">
                {showCalc && (
                    <div className="calcCon">
                        <Calculator data={calc}/>
                    </div>
                )}
                <div className="EnjazzForm" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='500'>
                    <div className="container">
                        <h1 className='section-title3'>{t('askService.h1')}</h1>
                        <p>{t('askService.p')}</p>
                        <span>{t('form.p1')}</span>
                        <div className="EnjazzFormInputs">
                            <input className='EnjazzFormInput' type="text" placeholder={t('form.fullName')} onChange={(e) => setname(e.target.value)} />
                            <input className='EnjazzFormInput' type="text" placeholder={t('form.phone')} onChange={(e) => setmobile(e.target.value)} />
                            <p>{t('form.typeS')}:</p>
                            <div className="EnjazzFormInput">{lang === "ar" ? Titles[id].ar : Titles[id].en}</div>
                            <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder={t('form.details')} onChange={(e) => setnotes(e.target.value)}></textarea>
                        </div>
                        <div className="EnjazzFormBtn" onClick={() => handleSubmit()}>{t('form.send')}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RedirectFromPackages