import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import '../App.css'
import Vehicle from "./pages/Vehicle";

const Navbar = () => {
    const [isCompanyMenuOpen, setCompanyMenuOpen] = useState(false);
    const handleToggleCompanyMenu = () => {
        setCompanyMenuOpen(!isCompanyMenuOpen);
    };

    const [isVehicleMenuOpen, setVehicleMenuOpen] = useState(false);
    const handleToggleVehicleMenu = () => {
        setVehicleMenuOpen(!isVehicleMenuOpen);
    };

    return (
        <aside className="sidebar bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    홍길동
                </Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/" exact>
                        대시보드
                    </Link>
                    <div className={`nav-link ${isCompanyMenuOpen ? 'active' : ''}`} onClick={handleToggleCompanyMenu}>
                        기업정보
                    </div>
                    {isCompanyMenuOpen && (
                        <div className="sub-menu">
                            <Link className="nav-link" to="/company/info">기업/지점 정보</Link>
                            <Link className="nav-link" to="/company/part">조직정보 관리</Link>
                        </div>
                    )}
                    <div className={`nav-link ${isVehicleMenuOpen ? 'active' : ''}`} onClick={handleToggleVehicleMenu}>
                        차량정보
                    </div>
                    {isVehicleMenuOpen && (
                        <div className="sub-menu">
                            <Link className="nav-link" to="/vehicle">전체차량 관리</Link>
                            <Link className="nav-link" to="/vehicle/repair">정비차량 관리</Link>
                            <Link className="nav-link" to="/vehicle/crash">사고차량 관리</Link>
                            <Link className="nav-link" to="/vehicle/image">차량 이미지 관리</Link>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default Navbar;