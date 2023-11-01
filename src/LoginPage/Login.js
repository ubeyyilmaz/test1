import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'; 

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{5,}$/;


const validationSchema = yup.object().shape({
  email: yup.string().email('Geçerli bir e-posta giriniz.').required('Zorunlu alan'),
  password: yup.string().matches(passwordRules, 'Lütfen en az 1 Büyük harf 1 Küçük harf 1 sayı ve 1 Noktalama işareti  giriniz').min(5, 'Lütfen minimum 5 karakter giriniz').required('Zorunlu alan'),
});

function Login() {

  const navigate = useNavigate();

 

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.email === 'ubey.ylmz@gmail.com' && values.password === 'Ankara06.') {
        console.log('Giriş başarılı! E-posta:', values.email, 'Şifre:', values.password);
        navigate('/homepage');
      } else {
        console.log('Giriş bilgileri hatalı.');
      }
    },
  });

  return (
    <div className="flex items-center justify-center h-screen w-full" style={{
      background: `url('/images/rt.jpg')`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'row',
    }}>
      <div className="flex flex-col items-center justify-center w-full lg:w-2/3">
        <div className="border-8 p-8 rounded-2xl shadow-lg max-w-md w-full" style={{
          backdropFilter: 'blur(10px)',
          background: 'rgba(0, 0, 0, 0.5)',
          border: '2px solid rgb(165,166,154)',
          borderRadius: '12px',
          padding: '1rem',
        }}>
          <div className="flex justify-center mb-2">
            <img
              src="/images/csk.jpg"
              alt="Küçük Görsel"
              className="bg-white border-solid border-2 w-28 h-28 rounded-full object-contain"
            />
          </div>
          <h1 className="mb-4 text-6xl text-center relative" style={{
            color: 'white',
            background: 'rgba(0, 0, 0, 0.3)',
            fontFamily: 'Arial, sans-serif',
          }}>
            Login
          </h1>

          <form onSubmit={formik.handleSubmit} className="pb-8" style={{
            backgroundColor: 'transparent',
            border: '2px solid white',
            borderRadius: '12px',
            padding: '1rem',
          }}>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                className="w-full p-3 rounded focus:outline-black"
                placeholder="E-posta"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid white',
                  color: 'white',
                }}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>

            <div className="mb-6">
              <input
                type="password"
                name="password"
                className="w-full p-3 rounded focus:outline-black"
                placeholder="Şifre"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid white',
                  color: 'white',
                }}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 text-white p-3 transition-all duration-200 rounded hover:bg-gray-800"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
