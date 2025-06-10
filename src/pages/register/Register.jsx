import React from "react"
import "./Register.scss"
import { Link } from "react-router-dom"

function Register() {
  return (
    <div className="register">
      <div className="container">
        <div className="card register-card">
          <h1>إنشاء حساب جديد</h1>
          <form className="register-form">
            <div className="form-group">
              <label htmlFor="username">اسم المستخدم</label>
              <input type="text" id="username" placeholder="أدخل اسم المستخدم" />
            </div>
            <div className="form-group">
              <label htmlFor="email">البريد الإلكتروني</label>
              <input type="email" id="email" placeholder="أدخل بريدك الإلكتروني" />
            </div>
            <div className="form-group">
              <label htmlFor="password">كلمة المرور</label>
              <input type="password" id="password" placeholder="أدخل كلمة المرور" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
              <input type="password" id="confirmPassword" placeholder="أعد إدخال كلمة المرور" />
            </div>
            <button type="submit" className="btn-primary">إنشاء حساب</button>
          </form>
          <p className="login-link">
            لديك حساب بالفعل؟ <Link to="/login">تسجيل الدخول</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register