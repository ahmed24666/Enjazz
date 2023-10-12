import React from 'react'
import './AboutSec.scss'
import { useMyContext } from '../../context/MyContext';
const AboutSec = () => {
  const { lang, setlang, t, i18n } = useMyContext();

  return (
    <div className='AboutSec'>
        <div className="container" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
            <h1>من هي إنجاز للخدمات؟</h1>
            <div className='image'>
                <img src="/images/1.png" alt="" />
            </div>
            <p>شركة "إنجاز" تأسست عام 2014 وتخصصت في مجال منح الخدمات لكافة الأعمال والمشاريع والمنشآت والشركات، تقدم شركتنا توجيهات فعّالة وحلولاً متكاملة وسريعة لتلبية احتياجات المؤسسات والشركات. يتميز فريقنا المؤهل بتصميم خطط منهجية تهدف إلى تسريع عملية حل المشكلات، وبالإضافة إلى ذلك، نولي اهتمامًا خاصًا لتدريب وتأهيل الكوادر العاملة في هذه المؤسسات.</p>
            <h1 className='section-title'>رؤيتنا  ؟</h1>
            <p>نكرس رؤيتنا واهتمامنا الشديد لتحقيق مكانة مرموقة في مجال الجودة والاحتراف في خدماتنا. ونسعى جاهدين لنكون روّادًا في هذا القطاع في بلدنا، كشركة متعددة الخدمات، نعمل بكل قوتنا ونسخّر جميع مواردنا من أجل إرضاء عملائنا وتحفيز موظفينا، ونسعى معًا نحو تحقيق التميز والإبداع.</p>
            <h1 className='section-title'>مهمتنا  ؟</h1>
            <p>بذلنا جهدًا متواصلًا لبناء أسس قوية دائمًا في مجال الابتكار وتحسين الخدمات التي نقدمها. نسعى بجدية لاستكشاف فرص جديدة وتقديم حلول مثالية، بالإضافة إلى الاستثمار وتقديم الاستشارات التي تعزز الكفاءة والفاعلية. نحن نسعى إلى بناء علاقات تعاونية قوية مع الشركات والوزارات والهيئات الحكومية المعنية، ونهدف إلى أن نكون لاعبين أساسيين في نجاح عملائنا وازدهارهم.</p>
        </div>
    </div>
  )
}

export default AboutSec