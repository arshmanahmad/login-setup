import React, { useState } from 'react'
import BiBarChartLineFill from '../assets/icons/bi_bar-chart-line-fill.svg';
import BiBellFill from '../assets/icons/bi_bell-fill.svg'
import Fa6SolidUserDoctor from '../assets/icons/fa6-solid_user-doctor.svg';
import IcBaseLineSupportAgent from "../assets/icons/ic_baseline-support-agent.svg";
import MaterialSymbolsCases from "../assets/icons/material-symbols_cases.svg";
import MaterialSymbolsChat from "../assets/icons/material-symbols_chat.svg";
import MaterialSymbolsPayment from "../assets/icons/material-symbols_payments.svg";
import MdiBlog from "../assets/icons/mdi_blog.svg";
import Ociticon from "../assets/icons/octicon_law-16.svg";
import RiAdminFill from "../assets/icons/ri_admin-fill.svg";
import StreamlineComputer from "../assets/icons/streamline_computer-desktop-block-desktop-device-display-disable-permission-computer.svg";



const SideBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [activeLinkSecond, setActiveLinkSecond] = useState('');
    const [imageColorChange, setImageColorChange] = useState('');
    const links = [
        { icon: BiBarChartLineFill, name: "Progress" },
        { icon: BiBellFill, name: "MemberShip" },
        { icon: Fa6SolidUserDoctor, name: "Clients" },
        { icon: IcBaseLineSupportAgent, name: "Experts" },
        { icon: MaterialSymbolsCases, name: "Cases" },
        { icon: MaterialSymbolsChat, name: "Support" },
        { icon: MaterialSymbolsPayment, name: "Communication" },
        { icon: MdiBlog, name: "Admin" },
        { icon: Ociticon, name: "Requests" },
        { icon: RiAdminFill, name: "Blog" },
        { icon: StreamlineComputer, name: "Payments" }
    ];
    const handleActivity = (index) => {
        setActiveLink(index);
        setActiveLinkSecond(index);
        setImageColorChange(index);
    }
    return (
        <>
            <div className='side-bar-container'>
                <div className='side-bar'>
                    <div className='logo-container'>
                        <div className='logo'>
                            <h3>LOGO</h3>
                        </div>
                    </div>
                    <div className='line-container'>
                        <div className='line'></div>
                    </div>
                    <div className='main-link-container'>
                        <div className='links-container'>
                            {links.map((link, index) => {
                                let activeClass = '';
                                let activeWord = '';
                                let activeImg = '';
                                if (activeLink === index) {
                                    activeClass = "active-row";
                                }
                                if (activeLinkSecond === index) {
                                    activeWord = "active-row2"
                                }
                                if (imageColorChange === index) {
                                    activeImg = "active-row-img"
                                }
                                else {
                                    activeClass = '';
                                    activeWord = '';
                                    activeImg = '';
                                }
                                return (
                                    <li key={index} className={activeClass} onClick={() => handleActivity(index)}>
                                        <img className={activeImg} src={link.icon} alt="" />
                                        <p className={activeWord}>{link.name}</p>
                                    </li>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar