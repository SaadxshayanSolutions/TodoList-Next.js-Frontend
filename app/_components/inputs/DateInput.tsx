"use client"
import React, { FC, useState } from 'react'
import { FieldProps } from 'formik';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface IDateInputProps extends FieldProps {
    placeholder? : string,
    label: string,
    value: string | number,   
}

const DateInput : FC<IDateInputProps> = ({
    field,
    form : {touched, errors,setFieldValue},
    meta,
    label,
    placeholder,
    ...props
}) => {

  return (
    <div className='space-y-1'>
        <label> {label}</label>

        <DatePicker 
        {...field} 
        selected = {field.value} 
        maxDate = {new Date()}
        onChange={(date : Date | null) => setFieldValue(field.name,date)} 
        className="w-full p-2"
        />

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

export default DateInput