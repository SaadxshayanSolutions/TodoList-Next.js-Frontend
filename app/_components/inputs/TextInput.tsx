"use client"
import React, { FC } from 'react'
import { FieldProps } from 'formik';
import { Input } from '@/components/ui/input';


interface ITextInputProps extends FieldProps {
    className: string,
    label: string,
    value: string | number,   
}

const TextInput : FC<ITextInputProps> = ({
    field,
    form: {touched, errors},
    meta,
    label,
    ...props
}) => {

  return (
    <div className='space-y-1'>
        <label> {label}</label>
        <input {...field} {...props} className='w-full p-2'/>

      {
        touched[field.name] &&
        errors[field.name] && 
        <div className="text-xs text-red-600">
            {errors[field.name]?.toString()}
        </div>
      }
    </div>
  )
}

export default TextInput