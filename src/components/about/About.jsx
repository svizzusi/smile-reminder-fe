import style from "./About.module.css"

const About = () => {
  return (
    <>
        <section className={style.aboutSection}>
            <h1 className={style.aboutSectionHeading}>About Smile Supply</h1>
            <div className={style.aboutSectiontextContainer}>
              <p className={style.aboutSectiontextP}>SmileSupply is a groundbreaking patient management tracking system designed to streamline patient management specifically for dental offices. It leverages a powerful tech stack, including React, Node, Express, and MongoDB, to provide a seamless and efficient solution. Here's an in-depth look at what sets SmileSupply apart and how it benefits dental offices:</p>
              <span className={style.aboutSectiontextSpan}>User-Friendly Interface:</span>
              <p>SmileSupply features an intuitive and user-friendly interface that allows dental office staff to easily input and manage their patient pool. This simplicity ensures that even non-technical users can navigate and utilize the system effectively.</p>
              <span className={style.aboutSectiontextSpan}>Precise Tracking:</span>
              <p>What makes SmileSupply truly unique is its utilization of a cutting-edge algorithm tailored to each patient in the database. This algorithm tracks the recall frequency of every patient, enabling precise monitoring of when a patient is due for their next appointment.</p>
              <span className={style.aboutSectiontextSpan}>Automatic Reminder:</span>
              <p>SmileSupply's intelligent system goes beyond basic tracking. It automatically triggers a reminder based on the patients recall that the doctor dianosis. This ensures that dental offices can keep track of their patients so that no patient gets left behind and forgotton about, so as, to stay on top of their health recomendations that the doctor recommends for them to be in optimal health.</p>
              <span className={style.aboutSectiontextSpan}>Customization:</span>
              <p>SmileSupply can be customized to meet the unique needs of each dental office. It can adapt to the specific requirements and preferences of doctor and patient, making it a versatile solution for a wide range of dental professionals.</p>
              <p>In summary, SmileSupply is a comprehensive patient management system tailored to the specific needs of the patient. It combines a user-friendly interface with intelligent algorithms to ensure that patients receive their customized care of their specific needs and trweatment recomendations. It's a valuable tool for modern dental practices looking to enhance their patient management processes.</p>
            </div>
        </section>
    </>
  )
};

export default About;