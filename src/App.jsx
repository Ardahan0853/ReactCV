
import './App.css'
import General from './General';
import {useState} from 'react'
import GeneralCV from './GeneralCV';


function App() {


const [form, setForm] = useState({
  name:'',
  email:'',
  phone:'',
  school:{
      name:'',
      title_of_study:'',
      date_of_study:''
  },
  experience:{
      company_name:'',
      position_title:'',
      date_of_work:''
  }
})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleFormSubmit = () => {
    setIsFormSubmitted(true)
  }
  const handleFormSubmitFalse = () => {
    setIsFormSubmitted(false)
  }
  
  return (
    <div>
     {!isFormSubmitted && <General setForm={setForm} form={form} formSubmit={handleFormSubmit}/>}
     {isFormSubmitted && <GeneralCV form={form} formSubmit={handleFormSubmitFalse}/>}
    </div>
  );
}

export default App
