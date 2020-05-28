import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const data = {
    userInfo: [
        {
            name: 'timileyin',
            password: 'password'
        },
        {
            name: 'lukman',
            password: 'password'
        }
    ]
}

// creating a fake login API with 1 seconds in delay
const LoginUser = (loginData) => {
    return new Promise((res, rej) => {
        const verifyLogin = data.userInfo.find(user=> user.password === loginData.password && user.name === loginData.name)
        setTimeout(() =>
        {
            if(verifyLogin) return res(verifyLogin)
            return rej({msg: "Invalid Credentials", statusCode: 301})
        }
            , 1000)
    })
}

function Login({history}) {
    const [formData, setFormData] = useState ({
        name: '',
        password: ''
    })

    // listeniing to change in the input field
    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // submiting form
    const submitForm = (e) =>{
        e.preventDefault()
        const loginData = {
            ...formData
        }

        LoginUser(loginData).then(result=>{
            history.push('/file-manager')
        })
        .catch(err=> {
            alert(err.msg)
        })

    }
    return (
        <div>
            <h3> Login Page </h3>
            <form onSubmit={(e)=> submitForm(e)} className="form">
                <input type='text' placeholder="name" required onChange={(e)=>onChangeHandler(e)} name="name" className="form-control mb-2"/>
                <input type='password' placeholder="password" required onChange={(e)=>onChangeHandler(e)} name="password" className="form-control mb-2" />
                <input type="submit" value="Login" className="form-control mb-2 btn-primary"/>
                <Link to="register"> Register </Link>
            </form>
        </div>
    )
}

export default Login
