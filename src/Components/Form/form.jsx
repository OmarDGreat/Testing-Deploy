import React, { useState } from 'react'
import "./form.css"

function Form() {
    const [formData, setFormDate] = useState({
        name: '',
        company: '',
        email: '',
        message: '',
    });

    const changeInput = (event) => {
        let value = event.target.value;
        const name = event.target.name

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const submitForm = (event) => {
        event.preventDefault()

        setFormData({
            name: '',
            company: '',
            email: '',
            message: '', 
        })
    }

    return (
        <div>
            <form className="form">
                <h5>Name:<input
                value={formData.name}
                name="name"
                onChange={changeInput}
                type="text"
                placeholder="Enter your name"
                /></h5>
                <h5>Company Name:<input
                value={formData.company}
                name="name"
                onChange={changeInput}
                type="text"
                placeholder="Enter your company's name"
                /></h5>
                <h5>Email:<input
                value={formData.email}
                name="name"
                onChange={changeInput}
                type="text"
                placeholder="Enter your email address"
                /></h5>
                <h5>Message:<input
                value={formData.message}
                name="name"
                onChange={changeInput}
                type="text"
                placeholder="Enter a short message"
                /></h5>
                <button onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}

export default Form