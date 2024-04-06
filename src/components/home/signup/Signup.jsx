import style from './Signup.module.css';
// import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import logo from '../../../assets/images/logo.webp';
import {RiCloseCircleFill} from 'react-icons/ri';

const Signup = ({setShowSignup}) => {

  // const navigate = useNavigate()


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
    const name = formData.name
    const email = formData.email
    const password = formData.password

    try {
      const res = await axios.post('URL', {name, email, password});
      console.log(res)
    } catch (err) {
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
              <span className={style.formDataSpan}>Passwords don't match</span>
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
