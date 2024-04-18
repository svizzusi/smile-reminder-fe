import style from './AddPatient.module.css'
import {useState, useEffect, useContext} from 'react'
import logo from '../../../assets/images/logo.webp';
import {RiCloseCircleFill} from 'react-icons/ri'
import axios from 'axios'
import {addWeeks, startOfWeek, format} from 'date-fns'
import {ToastContext} from '../../../App'

const AddPatient = ({setShowAddPatient}) => {

    const{toastSuccess, toastError} = useContext(ToastContext)

    const [userId, setUserId] = useState('');
    const [phoneError, setPhoneError] = useState('');

    useEffect(() => {
        const id = window.sessionStorage.getItem('userId')
        setUserId(id)
      },[])

    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        phone: '',
        email: '',
        frequency: ''
    });

    function handleClose(e) {
        if (e.target.id === 'modalBackgroundGlass') {
            setShowAddPatient(false);
        }
    }

    function handleChange(e) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value,
            }
        })
        if (e.target.name === 'phone') {
            if (e.target.value.length !== 10) {
                setPhoneError('Please enter a 10-digit phone number');
            } else {
                setPhoneError('');
            }
        }
    }

    // Function to check if phone number is valid
    const isPhoneValid = () => {
        return formData.phone.length === 10;
    };

    const currentWeek = format(startOfWeek(new Date(), { weekStartsOn: 0 }), 'y-MM-dd')
    const patientReminderWeek = format(startOfWeek(addWeeks(startOfWeek(new Date(), { weekStartsOn: 0 }), Number(formData.frequency * 4))), 'y-MM-dd')
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isPhoneValid()) {
            toastError('Please enter a 10-digit phone number.');
            return;
        }
    
        const lastName = formData.lastName
        const firstName = formData.firstName
        const phone = formData.phone
        const email = formData.email
        const frequency = Number(formData.frequency)
    
              try {
                  const res = await axios.post('http://localhost:3000/patients/createPatient', {
                        lastName,
                        firstName,
                        phone,
                        email,
                        frequency, 
                        originalFrequency: frequency, 
                        userId,
                        currentWeek, 
                        patientReminderWeek
                  })
                  console.log(res)
                  if (res.request.status === 200) {
                      setFormData((prevFormData) => ({
                          ...prevFormData,
                          lastName: '',
                          firstName: '',
                          phone: '',
                          email: '',
                          frequency: 0
                        }))
                        // fetchData()  
                        setShowAddPatient(false)
                        toastSuccess('Successfully added patient');
                        console.log(res)
                  } else {
                      toastError('Error adding patient');
                  }  
              } catch (err) {
                toastError(err.message);
                  console.error(err)
              }
    }

  return (
    <section
            id='modalBackgroundGlass'
            onClick={handleClose}
            className={style.addPatientFormSection}
        >
            <div  
                className={style.addPatientFormIconContainer}>
                    <RiCloseCircleFill 
                        onClick={() => setShowAddPatient(false)}
                        className={style.addPatientFormIcon}
                    />
            </div>
            <form
                className={style.addPatientForm}
                onSubmit={handleSubmit}
            >
                <div className={style.addPatientFormImage}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={style.addPatientFormInputs}>
                    <input
                        className={style.addPatientInput}
                        required
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <input
                        className={style.addPatientInput}
                        required
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        className={style.addPatientInput}
                        required
                        type='text'
                        name='phone'
                        placeholder={'Patient Phone'}
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {phoneError && <span className={style.errorMessage}>{phoneError}</span>}
                    <input
                        className={style.addPatientInput}
                        required
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        className={style.addPatientInput}
                        required
                        type='text'
                        name='frequency'
                        placeholder={'Patient Recall Frequency'}
                        value={formData.frequency}
                        onChange={handleChange}
                    />
                    <input
                        className={style.addPatientSubmit}
                        disabled={
                            !formData.lastName ||
                            !formData.firstName ||
                            !formData.phone ||
                            !formData.email ||
                            !formData.frequency ||
                            !isPhoneValid()
                        }
                        type='submit'
                        value='Add Patient'
                    />
                </div>
            </form>
        </section>
  )
};

export default AddPatient;
