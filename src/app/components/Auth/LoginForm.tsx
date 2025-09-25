'use client';

import React, { useState } from 'react';
import { LoginFormData, User } from '@/types';
import Link from 'next/link';

interface LoginFormProps {
    onLogin: (formdata: LoginFormData) => void
    isLoading?: boolean
}

export default function LoginForm({ onLogin, isLoading = false}: LoginFormProps) {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
        userType: 'student',
        rememberMe: false
    })

// Manage password visibility toggle
const [showPassword, setShowPassword] = useState(false)

// Handle form submission
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // Prevents page reload
    onLogin(formData) // Calls parent-provided login function
}

// Handle input changes (works for text, select, and checkbox)
const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value, type} = e.target
    setFormData( prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
}

const userTypeOptions: {value: User['role'], label: string; description: string}[] = [
    { value: 'student', label: 'Student', description: 'Access your courses and grades' },
    {value: 'parent', label: 'Parent', description: 'Monitor your child\'s progress'},
     { value: 'teacher', label: 'Teacher/Staff', description: 'Access teaching resources' },
    { value: 'admin', label: 'Administrator', description: 'School management system' }
]


}