'use client';

import React, { useState } from 'react';
import { LoginFormData } from '@/types';
import Link from 'next/link';

interface LoginFormProps {
    onLogin: (formdata: LoginFormData) => void
    isLoading: boolean
}

export default function LoginForm({ onLogin, isLoading = false}: LoginFormProps) {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
        userType: 'student',
        rememberMe: false
    })

const [showPassword, setShowPassword] = useState(false)

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(formData)
}

const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value, type} = e.target
    setFormData( prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
}

}