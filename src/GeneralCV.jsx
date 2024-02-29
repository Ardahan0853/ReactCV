import './GeneralCVCSS.css'

function GeneralCV({form, formSubmit}){


    return (
        <>
        <div className='container'>
            <div className="container-info">
                <h1>Personal Info</h1>
                <div>
                    <h2><span>Full Name:</span> {form.name}</h2>
                    <p><span>Email:</span> {form.email}</p>
                    <p><span>Phone Number:</span> {form.phone}</p>
                </div>
            </div>
            <div className="d-flex">
                <div className="container-school">
                    <h1>School</h1>
                    <div>
                        <h2><span>School Name: </span>{form.school.name}</h2>
                        <p><span>Lecture: </span>{form.school.title_of_study}</p>
                        <p><span>Date: </span>{form.school.date_of_study}</p>
                    </div>
                </div>
                <div className="container-experience">
                    <h1>Experience</h1>
                    <div>
                        <h2><span>Company Name: </span>{form.experience.company_name}</h2>
                        <p><span>Job Title: </span>{form.experience.position_title}</p>
                        <p><span>Date: </span>{form.experience.date_of_work}</p>
                    </div>
                </div>
            </div>
        </div>
        <button onClick={formSubmit}>EDIT</button>
        </>
    )
}


export default GeneralCV