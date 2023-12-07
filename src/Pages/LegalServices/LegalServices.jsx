import React from 'react'
import './LegalServices.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
const LegalServices = () => {
    const data = [
        "عمالي",
        "حقوقي",
        "تنفيذ",
        "تجاري",
        "مالي",
        "زكاة",
        "ضريبة",
        "مواريث",
        "عقار",
        "عقود",
        "استثمار",
        "اوقاف",
        "ملكية فكرية",
        "قانون دولي",
        "قوانين دول مجلس التعاون",
        "القانون التركي",
        "قوانين دول مجلس التعاون",
        "التحكيم",
        "المنازعات التأمينية",
        "تأسيس واندماج عقود الشركات",
        "قضايا الأحوال الشخصية",
        "الدراسة القانونية لتسهيل التمويل",
        "القانون الامريكي",
        "القانون البريطاني",
        "الاتفاقيات الثنائية",
        "الاتفاقيات الدولية",
        "تحكيم",
        "حوكمة والتزام الشركات",
        "التمثيل القانوني والقضائي",
        "صياغة العقود بأنواعها",
        "إدارة وتحصيل الديون",
        "الوقاية القانونية",
        "خدمات التوثيق الإلكتروني",
        "تحرير وتوثيق العقود التجارية والمالية",
        "التسويات الودية",
        "الوساطة التجارية",
        "تصفية التركات",
        "إعداد الاوراق التجارية",
        "تصفية التركات",
        "المنازعات المصرفية",
        "القضايا العمالية",
        "العلامة التجارية وبراءة الاختراع",
        "إفراغات الصكوك العقارية",
        "اشتراكات رمزية للمنشآت شهرية 3 أشهر 6 أشهر 12 شهر",
    ]
    return (
        <>
            <CommonHead title="باقات الخدمات القانونية" path="الصفحة الرئيسية \ الباقات \" />
            <div className='LegalServices'>
                <div className="container">
                    <h1>باقات الخدمات القانونية</h1>
                    <p>تحتاج الشركات بشكل حاسم إلى الخدمات القانونية بمختلف أشكالها نظرًا للتعقيدات المتزايدة في البيئة التشريعية والتنظيمية،</p>
                    <h1 className='text-center py-5'>خدمات إنجاز القانونية</h1>
                    <div className="ticks">
                        {data.map((item,i) => {
                            return (
                                <div className="item" key={i}>
                                    <div className="icon swing-in-top-fwd">
                                        <img loading="lazy" alt="Enjazz_image"  src="/images/tick.webp" />
                                    </div>
                                    <p>{item}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default LegalServices