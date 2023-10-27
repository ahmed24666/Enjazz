import React, { useEffect, useState } from 'react'
import './navbar.scss'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Navbar = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    const [isOpened, setIsOpened] = useState(false);

    const toggleMenu = () => {
        setIsOpened((prevIsOpened) => !prevIsOpened);
    };
    const handleClose = () => setIsOpened(false);
    const handleShow = () => setIsOpened(true);
    const { lang, setlang, t, i18n } = useMyContext();
    return (
        <div className='Navbar pt-5' style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
            <div className="container">
                <div className="top d-flex justify-content-between align-items-end  pb-3">
                    <div className="image">
                        <Link to="/">
                            <img loading="lazy" src="/images/logo.webp" alt="" />
                        </Link>
                    </div>
                    <p className='mb-0' onClick={() => {
                        setlang(lang === "ar" ? "en" : "ar"),
                            i18n.changeLanguage(lang === "en" ? "ar" : "en");
                    }}>{t('nav.lang')}</p>
                </div>
                <div className="bottom"  >
                    <ul className="links">
                        <NavLink to="/">
                            <li>{t('nav.home')}</li>
                        </NavLink>
                        <NavLink to="/about">
                            <li>{t('nav.about')}</li>
                        </NavLink>
                        <NavLink to="/trymeservice">
                            <li>{t('nav.tryMe')}</li>
                        </NavLink>
                        <NavLink to="/service-guide">
                            <li>{t('nav.guide')}</li>
                        </NavLink>
                        <NavLink to="/callus">
                            <li>{t('nav.call')}</li>
                        </NavLink>
                        <NavLink to="/packages">
                            <li>{t('nav.packages')}</li>
                        </NavLink>
                        <NavLink to="/questions">
                            <li>{t('nav.CQ')}</li>
                        </NavLink>
                        <NavLink to="/joinus">
                            <li>{t('nav.joinus')}</li>
                        </NavLink>
                        <NavLink to="/offers">
                            <li className='sale'>{t('nav.offers')}</li>
                        </NavLink>
                    </ul>
                    <div className="numbers">
                        <div className="num">
                            <div className="icon">
                                <img loading="lazy" src="/images/phoneNav.webp" alt="" />
                            </div>
                            <p>920013581</p>
                        </div>
                        <div className="num">
                            <div className="icon">
                                <img loading="lazy" src="/images/whatsappnav.webp" alt="" />
                            </div>
                            <p>+966502144449</p>
                        </div>
                    </div>
                    <button
                        className={`menu ${isOpened ? 'opened' : ''}`}
                        onClick={toggleMenu}
                        aria-expanded={isOpened}
                        aria-label="Main Menu"
                    >
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <path
                                className="line line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                            />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path
                                className="line line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                            />
                        </svg>
                    </button>
                </div>
                <Offcanvas show={isOpened} onHide={handleClose} placement='end'>
                    <Offcanvas.Header >
                        <div className="image">
                            <img loading="lazy" src="/images/logo.webp" alt="" />
                        </div>
                        <div className="closeBtn" >
                            <button
                                className={`menu ${isOpened ? 'opened' : ''}`}
                                onClick={toggleMenu}
                                aria-expanded={isOpened}
                                aria-label="Main Menu"
                            >
                                <svg width="100" height="100" viewBox="0 0 100 100">
                                    <path
                                        className="line line1"
                                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                                    />
                                    <path className="line line2" d="M 20,50 H 80" />
                                    <path
                                        className="line line3"
                                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="sideLinks">
                            <NavLink to="/">
                                <li onClick={() => handleClose()}>{t('nav.home')}</li>
                            </NavLink>
                            <NavLink to="/about">
                                <li onClick={() => handleClose()}>{t('nav.about')}</li>
                            </NavLink>
                            <NavLink to="/trymeservice">
                                <li onClick={() => handleClose()}>{t('nav.tryMe')}</li>
                            </NavLink>
                            <NavLink to="/service-guide">
                                <li onClick={() => handleClose()}>{t('nav.guide')}</li>
                            </NavLink>
                            <NavLink to="/callus">
                                <li onClick={() => handleClose()}>{t('nav.call')}</li>
                            </NavLink>
                            <NavLink to="/packages">
                                <li onClick={() => handleClose()}>{t('nav.packages')}</li>
                            </NavLink>
                            <NavLink to="/questions">
                                <li onClick={() => handleClose()}>{t('nav.CQ')}</li>
                            </NavLink>
                            <NavLink to="/joinus">
                                <li onClick={() => handleClose()}>{t('nav.joinus')}</li>
                            </NavLink>
                            <NavLink to="/offers">
                                <li className='sale' onClick={() => handleClose()}>{t('nav.offers')}</li>
                            </NavLink>
                                <li className='sale' onClick={() => {
                                    setlang(lang === "ar" ? "en" : "ar"),
                                        i18n.changeLanguage(lang === "en" ? "ar" : "en");
                                ;handleClose()}}>{t('nav.lang')}</li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    )
}

export default Navbar