import style from './Login.module.css';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import logo from '../../../assets/images/logo.webp';
import {RiCloseCircleFill} from 'react-icons/ri';
import {ToastContext} from '../../../App';

const Login = ({setShowLogin, setId}) => {

  const {toastSuccess, toastError} = useContext(ToastContext)

  const navigate = useNavigate()

  useEffect(() => {
    window.sessionStorage.removeItem('userName')
    window.sessionStorage.removeItem('userId')
  }, [])

  const[formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false);

  function handleClose(e) {
    if (e.target.id === 'login') {
      setShowLogin(false);
    }
  }

  const handleChange = (e) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    const email = formData.email;
    const password = formData.password;
    try {
      const res = await axios.post('http://localhost:3000/users/login', {email, password});
      if (res.data.success === false) {
        toastError(res.data.message)
        setFormData((prevFormData) => ({
          ...prevFormData,
          password: ''
        }));
      } else {
        toastSuccess(res.data.message)
        window.sessionStorage.setItem('userName', res.data.userName)
        window.sessionStorage.setItem('userId', res.data.id)
        setId(window.sessionStorage.getItem('userId'))
        setFormData((prevFormData) => ({
          ...prevFormData,
          password: ''
        }));
        navigate('/dashboard-SR');
      }
      setLoading(false);
    } catch (err) {
      toastError(err.message)
      console.error(err);
      setLoading(false);
    }
  };


  return (
    <>
      <section 
        className={style.loginFormSection}
        id="login"
        onClick={handleClose}
      >
        <div className={style.loginFormIconContainer}>
          <RiCloseCircleFill 
            onClick={() => setShowLogin(false)}
            className={style.loginFormIcon}
          />
        </div>
        <form 
          onSubmit={handleSubmit}
          className={style.loginForm}
        >
          <div className={style.loginFormImage}>
            <img src={logo} alt="logo" />
          </div>
          <div className={style.loginFormInputs}>
            <input
              className={style.loginInput}
              required
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className={style.loginInput}
              required
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              className={style.loginSubmit}
              disabled={
                !formData.email || 
                !formData.password
              }
              type="submit"
              value="Submit"
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </div>
        </form>
      </section>
    </>
  )
};
export default Login;
