import style from './Signup.module.css';
import {useNavigate} from 'react-router-dom';
import {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import logo from '../../../assets/images/logo.webp';
import {RiCloseCircleFill} from 'react-icons/ri';
import {ToastContext} from '../../../App'

const Signup = ({setShowSignup}) => {

  const {toastSuccess, toastError} = useContext(ToastContext)

  const navigate = useNavigate()

  useEffect(() => {
    window.sessionStorage.removeItem('userName')
    window.sessionStorage.removeItem('userId')
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  function handleClose(e) {
    if (e.target.id === 'signup') {
      setShowSignup(false);
    }
  }

  function handleChange(e) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      toastError('Passwords did not match, please retry')
      setFormData((prevFormData) => ({
        ...prevFormData,
        password: '',
        confirmPassword: ''
      }))
      return
    }
    setLoading(true)
    const name = formData.name
    const email = formData.email
    const password = formData.password

    try {
      const res = await axios.post('http://localhost:3000/users/signup', {name, email, password});
      if(res.data.success === false) {
        toastError(res.data.message)
        setFormData((prevFormData) => ({
          ...prevFormData,
          password: '',
          confirmPassword: ''
        }))
      } else {
        // setUser(true)
        window.sessionStorage.setItem('userName', res.data.userName)
        window.sessionStorage.setItem('userId', res.data.id)
        toastSuccess(res.data.message)
        setFormData((prevFormData) => ({
          ...prevFormData,
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }));
        navigate('/dashboard-page')
      }
      setLoading(false)
    } catch (err) {
      toastError(err.message)
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="signup"
        onClick={handleClose}
        className={style.signupFormSection}
      >
        <div className={style.signupFormIconContainer}>
          <RiCloseCircleFill 
            onClick={() => setShowSignup(false)}
            className={style.signupFormIcon}
          />
        </div>
        <form 
          onSubmit={handleSubmit}
          className={style.signupForm}
        >
          <div className={style.signupFormImage}>
            <img src={logo} alt="logo" />
          </div>
          <div className={style.signupFormInputs}>
            <input
              className={style.signupInput}
              required
              type="text"
              name="name" 
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className={style.signupInput}
              required
              type="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className={style.signupInput}
              required
              type="password"
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              style={{
                backgroundColor:
                  formData.confirmPassword === '' || formData.password === formData.confirmPassword
                    ? ''
                    : 'rgba(255,0,0,0.1)',
              }}
            />
            <input
              className={style.signupInput}
              required
              type="password"
              name="confirmPassword" 
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{
                backgroundColor:
                  formData.confirmPassword === '' || formData.password === formData.confirmPassword
                    ? ''
                    : 'rgba(255,0,0,0.1)',
              }}
            />
            {formData.confirmPassword !== '' &&
            (formData.password !== formData.confirmPassword && (
              <span className={style.formDataSpan}>Passwords do not match</span>
            ))}
            <button
              className={style.signupSubmit}
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.password ||
                !formData.confirmPassword
              }
              type="submit"
              value="Sign Up"
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </section>
    </>
  )
};

export default Signup;
