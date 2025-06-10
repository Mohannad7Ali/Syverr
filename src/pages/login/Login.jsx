import React from "react"
import "./Login.scss"
import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="card login-card">
          <h1>تسجيل الدخول</h1>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">البريد الإلكتروني</label>
              <input type="email" id="email" placeholder="أدخل بريدك الإلكتروني" />
            </div>
            <div className="form-group">
              <label htmlFor="password">كلمة المرور</label>
              <input type="password" id="password" placeholder="أدخل كلمة المرور" />
            </div>
            <button type="submit" className="btn-primary">تسجيل الدخول</button>
          </form>
          <p className="register-link">
            ليس لديك حساب؟ <Link to="/register">إنشاء حساب جديد</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login