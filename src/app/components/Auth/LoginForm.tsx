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
return (
    <div className="min-h-screen flex items center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            {/* Form Header */}
            <div className="text-center">
                {/* Logo Circle */}
                <div className="mx-auto h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">BS</span>
                </div>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                    Bhrikuti Secondary School Portal
                </p>
            </div>

            {/* Login Form */}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm space-y-4">
                    {/* User Type Selection */}
                    <div>
                        <label htmlFor="userType" className="block text-sm font-medium text-gray- 700 mb-2">
                            I am a
                        </label>
                        <select
                         name="userType"
                         id="userType"
                         value={formData.userType}
                         onChange={handleChange}
                         className="appearance-none relative block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white">
                            {userTypeOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                         </select>
                         <p className="mt-1 text-xs text-gray-500">
                            {userTypeOptions.find(opt => opt.value === formData.userType)?.description}
                         </p>
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email address
                        </label>
                    </div>
                </div>
            </form>
        </div>
    </div>

)
 
}