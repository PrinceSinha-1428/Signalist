"use client";

import FooterLink from '@/components/forms/FooterLink';
import InputField from '@/components/forms/InputField';
import { Button } from '@/components/ui/button';
import React from 'react';
import { useForm } from 'react-hook-form';

const SignIn: React.FC = () => {

  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<SignUpFormData>({
      defaultValues: {
        email: '',
        password: '',
      },
      mode : 'onBlur'
    });
  
    const onSubmit = async (data: SignUpFormData) => {
      try {
        
      } catch (error) {
        
      }
    }


  return (
    <>
       <h1 className='form-title'>Log In Your Account</h1>
       <form onSubmit={handleSubmit(onSubmit)}className='space-y-5' >
        
        <InputField
            name="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            register={register}
            error={errors.email}
            validation={{ required: "Email address is required", pattern: /^\w+@\w\.\w+$/, message: "Email is required" }}
          />
        <InputField
            name="password"
            label="Password"
            placeholder="********"
            register={register}
            type='password'
            error={errors.password}
            validation={{ required: "Password is required", minLength: 8 }}
          />
        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5' >
          { isSubmitting ? 'Signing In' : 'Log In'}
        </Button>
        <FooterLink text='Don&apos;t have an account' href='/sign-up' linkText='Sign Up' />
       </form>
    </>
  )
}

export default SignIn
