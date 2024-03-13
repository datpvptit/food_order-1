import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { faPhoneAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "../../styles/css/header.css"

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const cartItems = useSelector(state => state.app.cartItems); // Lấy số lượng sản phẩm trong giỏ hàng từ Redux store
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <div className="py-1 bg-black top">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </div>
                  <span className="text">+ 1235 2355 98</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div>
                  <span className="text">youremail@email.com</span>
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
                  <p className="mb-0 register-link">
                    <span>Giờ mở cửa:</span> <span>Thứ Hai - Chủ Nhật</span>{" "}
                    <span>8:00 sáng - 9:00 tối</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${
          showMobileMenu ? "show" : ""
        }`}
        id="ftco-navbar"
      >
        <div className="container">
          <NavLink
            className={({ isActive }) => {
              const activeClass = isActive ? "active" : "";
              return `nav-item nav-link ${activeClass}`;
            }}
            to="/"
          >
            Feliciano
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
          >
            <FaBars />
            <span className="oi oi-menu"></span> Menu
          </button>

          <div
            className={`collapse navbar-collapse ${
              showMobileMenu ? "show" : ""
            }`}
            id="ftco-nav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    const activeClass = isActive ? "activeHome" : "";
                    return `nav-link ${activeClass}`;
                  }}
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => {
                    const activeClass = isActive ? "activeHome" : "";
                    return `nav-link ${activeClass}`;
                  }}
                >
                  Thông tin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/menu"
                  className={({ isActive }) => {
                    const activeClass = isActive ? "activeHome" : "";
                    return `nav-link ${activeClass}`;
                  }}
                >
                  Thực đơn
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) => {
                    const activeClass = isActive ? "activeHome" : "";
                    return `nav-link ${activeClass}`;
                  }}
                >
                  Bài viết
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => {
                    const activeClass = isActive ? "activeHome" : "";
                    return `nav-link ${activeClass}`;
                  }}
                >
                  Liên hệ
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) => {
                    const activeClass = isActive ? "activeHome" : "";
                    return `nav-link ${activeClass}`;
                  }}
                >
                  Đăng nhập
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  to="/register"
                  className={({ isActive }) => {
                    const activeClass = isActive ? "activeHome" : "";
                    return `nav-link ${activeClass}`;
                  }}
                >
                  Đăng ký
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <div
                    className="cart-icon"
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FaShoppingCart size={24}/>
                    {cartItems && (
                      <div className="cart-item-count">
                        <span>{cartItems.length}</span>
                      </div>
                    )}
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
