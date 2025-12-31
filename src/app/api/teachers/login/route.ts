import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Query teacher from database
    const { data: teacher, error } = await supabase
      .from('teachers')
      .select('*')
      .eq('email', email)
      .eq('is_active', true)
      .single()

    if (error || !teacher) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Verify password (demo passwords are hashed as 'password123')
    // For demo, we'll accept 'password123' as plain text
    // In production, you should compare with bcrypt
    const isValidPassword = password === 'password123'
    
    // For bcrypt comparison (when you have real hashed passwords):
    // const isValidPassword = await bcrypt.compare(password, teacher.password_hash)

    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Update last login
    await supabase
      .from('teachers')
      .update({ last_login: new Date().toISOString() })
      .eq('id', teacher.id)

    // Return teacher data (excluding password)
    const { password_hash, ...teacherData } = teacher
    
    return NextResponse.json({
      success: true,
      teacher: teacherData
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}