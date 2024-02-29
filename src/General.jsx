import {useState} from 'react'

function General({form, setForm, formSubmit}){
    
    // eslint-disable-next-line react/prop-types
    
    // const getName = (e) => {
    //     setForm((prevForm) => ({...prevForm, name: e.target.value}))
    //     console.log(form.name)
    // }
    console.log(form)

    return (
        <>
        <form className='general-form'>
            <h1 className='cv'>CV BUILDER</h1>
            <div className='info'>
                <h1>Personal Info</h1>
                <div>
                <label htmlFor="general_NAME">Enter Your Fullname</label>
                <input 
                type="text" 
                id='general_NAME'
                value={form.name} 
                onChange={(e) => {setForm((prevForm) => ({...prevForm, name: e.target.value}))}}/>
                </div>
                <div>
                <label htmlFor="general_EMAIL">Enter Your Email</label>
                <input 
                type="email" 
                id='general_EMAIL'
                value={form.email} 
                onChange={(e) => {setForm((prevForm) => ({...prevForm, email: e.target.value}))}}/>
                </div>
                <div>
                <label htmlFor="general_PHONE">Enter Your Phone</label>
                <input 
                type="number" 
                id='general_PHONE'
                value={form.phone} 
                onChange={(e) => {setForm((prevForm) => ({...prevForm, phone: e.target.value}))}}/>
                </div>
            </div>

            <div className='school'>
                <h1>School</h1>

                <div>
                <label htmlFor="general_SCHOOLNAME">Enter Your School Name</label>
                <input 
                type="text" 
                id='general_SCHOOLNAME'
                value={form.school.name} 
                onChange={(e) => {setForm((prevForm) => ({...prevForm, school:{
                    ...prevForm.school,
                    name: e.target.value
                } }))}}/>
                </div>

                <div>
                <label htmlFor="general_SCHOOLSTUDY">Enter Your School of study</label>
                <input 
                type="text" 
                id='general_SCHOOLSTUDY'
                value={form.school.title_of_study} 
                onChange={(e) => {setForm((prevForm) => ({...prevForm, school: {
                    ...prevForm.school,
                    title_of_study: e.target.value
                }}))}}/>
                </div>

                <div>
                <label htmlFor="general_DATEOFSCHOOL">Enter Your Date Of Study</label>
                <input 
                type="date" 
                id='general_DATEOFSCHOOL'
                value={form.school.date_of_study} 
                onChange={(e) => {setForm((prevForm) => ({...prevForm, school:{
                    ...prevForm.school,
                    date_of_study: e.target.value
                }}))}}/>
                </div>
            </div>

            <div className='experience'>
                <h1>Experience</h1>

                <div>
                <label htmlFor="general_EXPERIENCE_COMPANY_NAME">Enter Your Company Name</label>
                <input 
                type="text" 
                id='general_EXPERIENCE_COMPANY_NAME'
                value={form.experience.company_name} 
                onChange={(e) => {setForm((prevForm) => ({...prevForm, experience:{
                    ...prevForm.experience,
                    company_name: e.target.value
                }}))}}/>
                </div>

                <div>
                <label htmlFor="general_POSITION_TITLE">Enter Your Position Title</label>
                <input 
                type="text" 
                id='general_POSITION_TITLE'
                value={form.experience.position_title} 
                onChange={(e) => {setForm((prevForm) => ({...prevForm, experience:{
                    ...prevForm.experience,
                    position_title: e.target.value
                }}))}}/>
                </div>
                
                <div>
                <label htmlFor="general_DATEOFWORK">Enter Your Date Of Work</label>
                <input 
                type="date" 
                id='general_DATEOFWORK'
                value={form.experience.date_of_work} 
                onChange={(e) => {setForm((prevForm) => ({...prevForm, experience:{
                    ...prevForm.experience,
                    date_of_work: e.target.value
                }}))}}/>
                </div>
            </div>
            <button type='submit' onClick={(e) => {
                formSubmit()
                e.preventDefault()
                }}>SUBMIT THE FORM</button>
        </form>
        </>
    )






}

export default General