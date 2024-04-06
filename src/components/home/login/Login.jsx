import style from './Login.module.css';
// import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import logo from '../../../assets/images/logo.webp';
import {RiCloseCircleFill} from 'react-icons/ri';

const Login = ({setShowLogin}) => {

  // const navigate = useNavigate()

  const[formData, SetFormData] = useState({
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
    SetFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = formData.email
    const password = formData.password
    try {
      const res = await axios.post('', {email, password})
      console.log(res)
    } catch (err) {
      console.log(err)
      setLoading(false);
    }
  }


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
