import Login from '../components/home/login/Login';
import Signup from '../components/home/signup/Signup';
import Hero from '../components/home/hero/Hero'

const Home = ({showLogin, setShowLogin, showSignup, setShowSignup, setId}) => {
  return (
    <>
      <Hero />
      {showLogin && <Login setShowLogin={setShowLogin} setId={setId}/>}
      {showSignup && <Signup setShowSignup={setShowSignup} setId={setId}/>}
    </>
  )
};

export default Home;
