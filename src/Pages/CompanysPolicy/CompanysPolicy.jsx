import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';

const CompanysPolicy = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    const part1 = ["1. المعلومات الشخصية الخاصة بالمستخدم، كالإسم والعمر والبريد الالكتروني، ورقم الهوية الوطنية أو رقم الإقامة.","2. معلومات الدخول الشخصية الخاصة بالمستخدم، مثل اسم المستخدم وكلمة السر والبريد الالكتروني، والسؤال الخاص باسترجاع كلمة السر وإجابته.","3. قد تفرض طبيعة المنصة الالكترونية بعض المعلومات المتعلّقة بالكوكيز وذلك لأغراض الكترونية تسهّل التعامل بين المتجر والمستخدم.",]
    const part2 = ["1. بطبيعة الحال فإن (انجاز للخدمات) تسعى بالاحتفاظ بهذه المعلومات بما يحفظ خصوصية المستخدم، و(انجاز للخدمات) لا تحتفظ بهذه المعلومات إلا بهدف تحسين جودة المتجر الإلكتروني وتيسير التعامل فيما(انجاز للخدمات) والمستخدم.","2. كقاعدة عامة فإن جميع هذه المعلومات لا تطلع عليها إلا القائمين على (انجاز للخدمات)، ولن يقوموا بنشرها أو بثها للغير.","3. حيث أن (انجاز للخدمات) تسعى للحفاظ على سلامة المستخدمين، فإنه – في حالة ملاحظة (انجاز للخدمات) لأي نشاط غير نظامي أو غير شرعي يقوم به المستخدم – فإن (انجاز للخدمات) قد يقوم بإبلاغ الجهات المختصة بعد التشاور مع المحامي الخاص بـ (انجاز للخدمات).",]
    const part3 = [
        "تسعى (انجاز للخدمات) بالحفاظ على جميع المعلومات الخاصة بالمستخدم وألا يطلع عليها أحد بما يخالف هذه السياسة المعمول بها في (انجاز للخدمات).",
        "تعمل (انجاز للخدمات) على حماية هذه المعلومات عن طريق \"سيرفرات معيّنة؟\" محمية بموجب أنظمة الحماية الإلكترونية \"نظامي برمجي أو Software معيّن؟\".",
        "غير أنه نظراً لأن شبكة الانترنت لا يمكن ضمانها 100% لما قد يطرأ من اختراق أو فيروسات على أنظمة الحماية الالكترونية و على جدران الحماية المعمول بها في (انجاز للخدمات) فإن (انجاز للخدمات) تنصح المستخدمين بالحفاظ على معلوماتهم بسرية تامة، وعدم إفشاء أي معلومات يراها المستخدم هامة جداً له، وهذا حرصاً على (انجاز للخدمات) في توجيه وإرشاد المستخدمين."
      ];
      
    const part4 = ["تصميم موقع إلكتروني ", "تصميم متجر إلكتروني ", "تصميم لوقـو احترافي ", "خدمات التسويق الإلكترونى",]
    return (
        <>
            <CommonHead title={t('footer.ul9')} path={t('aboutus.path')} />
            <div className='Policies'>
                <div className="container">
                    <h1 className="section-title3">{t('footer.ul9')}</h1>
                    <div className="part">
                        <h1 className="secH">سياسة الخصوصية وسرية المعلومات</h1>
                        <p className='mt-2'>يرحّب بكم فريق عمل (انجاز للخدمات)، ويتقدّم إليكم بالشكر على ثقتكم به، ويفيدكم (انجاز للخدمات) بأنه حرصاً منه و لإدراكه التام بأن المستخدم له حقوق، فإن (انجاز للخدمات) يسعى للحفاظ على المعلومات الخاصة بالمستخدمين وفقاً لآلية سياسة الخصوصية وسرية المعلومات المعمول بها في (انجاز للخدمات) . وعليه فإن (انجاز للخدمات) يوضّح لكم بأن سياسة الخصوصية وسرية المعلومات التي سيتم التعامل مع معلوماتكم الخاصة بكم بموجبها كما يلي:</p>
                        <h2>أولاً: المعلومات التي تحصل عليها (انجاز للخدمات) وتحتفظ بها في قواعد بياناتها</h2>
                        <ul>
                            {part1.map((item, i) => {
                                return (
                                    <li key={i}>{item}</li>
                                )
                            })}
                        </ul>
                        <h2>
                        ثانياً: هل (انجاز للخدمات) تشارك هذه المعلومات؟
                        </h2>
                        <ul>
                            {part2.map((item, i) => {
                                return (
                                    <li key={i}>{item}</li>
                                )
                            })}
                        </ul>
                        <h2>ثالثاً: ما هو مدى أمان سرية المعلومات الخاصة بالمتجر؟</h2>
                        <span>تسعى (انجاز للخدمات) إلى سرية المعلومات وسياسة الخصوصية الخاصة بالمستخدمين و لن تخالف أحكام هذه القواعد والسياسة. ولكن نظراً لعدم إمكانية ضمان ذلك 100% عبر وسائل الإنترنت فإن فريق عمل (انجاز للخدمات) ينوّه بما يلي:</span>
                        <ul>
                            {part3.map((item, i) => {
                                return (
                                    <li key={i}>{item}</li>
                                )
                            })}
                        </ul>
                        <h2>رابعاً: هل هناك طرف ثالث في العلاقة بين (انجاز للخدمات) والتاجر؟</h2>
                        <p>"تحدد هنا سياسة الخصوصية فيما يتعلّق بالحالات التي يكون هناك طرفاً ثالث، كالمسوّقين، والتقنيين، والمستهلك، وأي شخص آخر مرتبط بالعلاقة"</p>
                        <h2>خامساً: قواعد وأحكام استخدام (انجاز للخدمات) :</h2>
                        <p>إن جميع التزامات (انجاز للخدمات)، وجميع التزامات المستخدمين، وجميع الحقوق الواردة في العلاقة بين المستخدم أو المستهلك و(انجاز للخدمات)، موجودة هنا <a href='https://enjaaz.sa'>"https://enjaaz.sa"</a>، حيث أن هذه القواعد هي "سياسة الخصوصية وسرية المعلومات" والمنبثقة من الاتفاقية التي أبرمت بين المستخدم و(اسم المتجر) بخصوص العلاقة النظامية والقانونية بينهما، وقد وضعت سياسة الخصوصية وسرية المعلومات لضمان المصداقية والثقة التي تحرص (انجاز للخدمات) على توفيرها للمستخدمين.</p>


                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanysPolicy