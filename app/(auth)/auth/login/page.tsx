import React from 'react'
import dynamic from 'next/dynamic' 
import { CircularProgress } from '@mui/material'
import LoadingContainer from '@/app/components/layout/loading/loading.component'
const DynamicLoginForm = dynamic(() => import('./components/login-form/login-form.component'),
{
  loading: () => <LoadingContainer/>,
})

function Login() {
  return (
    <DynamicLoginForm />
  )
}

export default Login