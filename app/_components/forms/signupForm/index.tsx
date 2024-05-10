"use client"

import React, { useState, useTransition } from 'react'
import { Formik , Form, Field, FormikHelpers} from 'formik';
import { SignUpschema } from '@/app/schemas/registrationSchema';
import TextInput from '../../inputs/TextInput';
import { Button } from '@/components/ui/button';
import { buttonVariants } from "@/components/ui/button"
import * as Yup from 'yup';
import SelectInput from '../../inputs/selectInput';
import DateInput from '../../inputs/DateInput';
import { signup } from '@/app/_actions/auth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const initialValues = {
    firstName : "",
    lastName: "",
    email: "",
    password : "",
    dob : new Date(),
    gender: "male"

}

const options = [
    {value: "male", text: "Male"},
    {value: "female", text: "Female"}
]

const SignupForm = () => {

    const [ispending,startTransition] = useTransition()
    const router = useRouter()

    const handleSignupSubmit = async (
        values : Yup.InferType<typeof SignUpschema>,
        { resetForm }: FormikHelpers<Yup.InferType<typeof SignUpschema>>

        ) => {
                startTransition(async () => {

                const res =  await signup(values)
                  
                if(!res.success) {

                    toast.error(`Oops: ${res.message}`)

                    return;
                }
                
                toast.success("User created successfully")

                router.push("/")
                
                resetForm()
            })

        }

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={SignUpschema}
    onSubmit={handleSignupSubmit}
    >
        <Form className='space-y-2'>
            <Field 
             component = {TextInput}    
             name = "firstName" 
             label ="First name" 
             placeholder = "First Name"
             />
            <Field 
            component = {TextInput}   
            name = "lastName"  
            label ="Last name" 
            placeholder = "Last Name"
            />
            <Field 
            component = {TextInput}   
            name = "email"     
            label ="Email" 
            placeholder = "Email"
            />
            <Field 
            component = {TextInput}   
            name = "password"  
            label ="Password" 
            placeholder = "Password"      
            type = "password"  
            />
            <Field 
            component = {DateInput}   
            name = "dob"       
            label ="Date of Birth" 
            />
            <Field 
            component = {SelectInput} 
            name = "gender"    
            label = "Gender" 
            placeholder = "Gender"       
            options= {options}
            />

            <Button
            className= "w-full bg-green-400 disabled:bg-green-600"
            type = "submit"
            disabled = {ispending}
            >
            {ispending ? "Singning in..." : "Sign in"}
            </Button>
        </Form>
    </Formik>
  )
}

export default SignupForm