import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo, Input, Button } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { login } from '../store/authSlice'
import { useForm } from 'react-hook-form'

function Signup() {

    const [error, setError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    return (
        <div>Signup</div>
    )
}

export default Signup