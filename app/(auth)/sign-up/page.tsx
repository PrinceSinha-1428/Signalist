"use client";

import InputField from '@/components/forms/InputField';
import SelectField from '@/components/forms/SelectField';
import { Button } from '@/components/ui/button';
import React from 'react'
import { useForm } from 'react-hook-form'




const SignUp: React.FC = () => {

  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: 'US',
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology'
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
       <h1 className='form-title'>Sign Up & Personalize</h1>
       <form onSubmit={handleSubmit(onSubmit)}className='space-y-5' >
        <InputField
            name="fullName"
            label="Full Name"
            placeholder="John Doe"
            register={register}
            error={errors.fullName}
            validation={{ required: "Full Name is required", minLength: 2}}
          />
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
          {/* country */}

          <SelectField></SelectField>
        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5' >
          { isSubmitting ? 'Creating Account' : 'Start Your Investment Journey'}
        </Button>
       </form>
    </>
  )
}

export default SignUp
