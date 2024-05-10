"use client"
import React, { FC } from 'react'
import { FieldProps } from 'formik';


interface ITextInputProps extends FieldProps {
    className: string,
    label: string,
    value: string | number,   
}

const TextAreaInput : FC<ITextInputProps> = ({
    field,
    form: {touched, errors},
    meta,
    label,
    ...props
}) => {

  return (
    <div className='space-y-1'>
        <label> {label}</label>
        <textarea {...field} {...props} className='w-full p-2'/>

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

export default TextAreaInput