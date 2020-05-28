import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [formData, setFormData] = useState ({
        name: '',
        password: '',
        confirmPassword: ''
    })

    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = (e) =>{
        e.preventDefault()
        alert("submit login in progress ...")
        //  check if password are equal

        // Call API to submit new USER

        //  Redirect if successfull

        //  Throw an ALert if Error Found

    }

    return (
        <div>
            <h3> Register Page</h3>
            <form onSubmit={(e)=> submitForm(e)} className="form">
                <input type='text' required onChange={(e)=>onChangeHandler(e)} name="name" placeholder="name" className="form-control mb-2"/>
                <input type='password' required onChange={(e)=>onChangeHandler(e)} name="password" placeholder="password" className="form-control mb-2"/>
                <input type='password' required onChange={(e)=>onChangeHandler(e)} name="confirmPassword" placeholder="confirm password" className="form-control mb-2"/>
                <input type="submit" value="Register" className="form-control mb-2 btn-primary"/>
                <Link to="login"> Login </Link>
            </form>
        </div>
    )
}

export default Register