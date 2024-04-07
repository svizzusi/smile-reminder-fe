import style from './EditPatient.module.css'
import {useState, useEffect} from 'react'
import logo from '../../../assets/images/logo.webp';
import {RiCloseCircleFill} from 'react-icons/ri'
import axios from 'axios'
// import {addWeeks, startOfWeek, parseISO, format} from 'date-fns'

const EditPatient = ({setShowEditPatient}) => {

    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        phone: '',
        email: '',
        frequency: ''
    });

    useEffect(() => {
        axios.get(``)
          .then(res => {
            console.log('API response:', res.data);
            setFormData(prevFormData => ({
              ...prevFormData,
              lastName: res.data.lastName,
              firstName: res.data.firstName,
              phone: res.data.phone,
              email: res.data.email,
              frequency: res.data.frequency,
              currentWeek: res.data.currentWeek
            }));
          })
          .catch(err => console.error('API request failed:', err));
      }, []);
    
        function handleClose(e) {
            if (e.target.id === 'modalBackgroundGlass') {
                setShowEditPatient(false);
            }
        }
    
        function handleChange(e) {
            const {name, value} = e.target;
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [e.target.name]: e.target.value,
                }
            })
        }

        const handleUpdate = async (e) => {
            e.preventDefault()
            // const parsedDate = parseISO(formData.currentWeek);
            // const patientReminderDay = format(startOfWeek(addWeeks(parsedDate, formData.frequency)), 'y-MM-dd')
            const lastName = formData.lastName
            const firstName = formData.firstName
            const phone = formData.phone
            const email = formData.email
            const frequency = formData.frequency
            // const patientReminderWeek = patientReminderDay
        try {
            const res = await axios.put(``, {
                    lastName,
                    firstName,
                    phone,
                    email,
                    frequency,
                    // patientReminderWeek
                })
                console.log(res)
            // toastSuccess('Successfully edited patient')
            setShowEditPatient(false);
            // fetchData() 
        } catch (err) {
            // toastError(err.message)
            console.error(err)
        }
    }

  return (
    <section
        id='modalBackgroundGlass'
        onClick={handleClose}
        className={style.editPatientFormSection}
    >
        <div  
            className={style.editPatientFormIconContainer}>
                <RiCloseCircleFill 
                onClick={() => setShowEditPatient(false)}
                className={style.editPatientFormIcon}
                />
        </div>
        <form
            className={style.editPatientForm}
            onSubmit={handleUpdate} 
        >
            <div className={style.editPatientFormImage}>
            <img src={logo} alt="logo" />
            </div>
            <div className={style.editPatientFormInputs}>
                <input
                    className={style.editPatientInput}
                    required
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <input
                    className={style.editPatientInput}
                    required
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                />
                  <input
                    className={style.editPatientInput}
                    required
                    type='text'
                    name='phone'
                    placeholder='Phone'
                    value={formData.phone}
                    onChange={handleChange}
                />
                <input
                    className={style.editPatientInput}
                    required
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    className={style.editPatientInput}
                    required
                    type='text'
                    name='frequency'
                    placeholder={'Patient Recall Frequency (Weeks)'}
                    value={formData.frequency}
                    onChange={handleChange}
                />
                <input
                    className={style.editPatientSubmit}
                    disabled={
                        !formData.lastName ||
                        !formData.firstName ||
                        !formData.phone ||
                        !formData.email ||
                        !formData.frequency
                    }
                    type='submit'
                    value='Edit Patient'
                />
            </div>
        </form>
    </section>
  )
};

export default EditPatient;
