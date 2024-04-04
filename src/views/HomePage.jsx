import Login from '../components/home/login/Login';
import Signup from '../components/home/signup/Signup';
import Hero from '../components/home/hero/Hero'

const Home = ({showLogin, setShowLogin, showSignup, setShowSignup}) => {
  return (
    <>
      <Hero />
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {showSignup && <Signup setShowSignup={setShowSignup}/>}
    </>
  )
};

export default Home;
