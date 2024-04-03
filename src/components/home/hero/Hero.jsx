import style from './Hero.module.css';
import logo from "../../../assets/images/logo.webp"

const Hero = () => {
  return (
    <section className={style.heroSection}>
        <img  className={style.heroImage} src={logo} alt="logo" />
        <p className={style.heroP}>Revolutionize your dental practice with our cutting-edge application designed to streamline patient recall management, keeping track of each individual's specific needs based on expert recommendations from their dentist.</p>
    </section>
  )
};

export default Hero;
