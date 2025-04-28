import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          Turbo.az
        </Link>
        <a href="#">Bütün elanlar</a>
        <a href="#">Dilerlər</a>
        <a href="#">Avtokataloq</a>
        <a href="#">Moto</a>
        <a href="#">Ehtiyat hissələr və aksesuarlar</a>
        <a href="#">İcarə</a>
        <Link className="add_btn" to="/forum">Yeni elan</Link>
      </div>
    </nav>
  );
}

export default Navbar;
