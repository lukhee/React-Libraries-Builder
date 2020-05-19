import React, { useState } from 'react'

const Login = ({submitForm}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(formData.username === '' || formData.password === ''){
            return alert('field cant be empty')
        }
        submitForm(formData)
        setFormData({
            username: '',
            password: ''
        })
    }
    return (
        <div>
            <h4> Login Page </h4>
            <form className="form" onSubmit={(e)=> onSubmitHandler(e)}>
                <input
                    className="form-control mb-4"
                    type="text" name="username"
                    placeholder="username"
                    value={formData.username}
                    onChange={(e)=>onChangeHandler(e)} />
                <input
                    className="form-control mb-4"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={(e)=>onChangeHandler(e)} />
                <input className="form-control mb-4" type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
