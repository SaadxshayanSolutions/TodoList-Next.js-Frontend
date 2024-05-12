"use client"
import React, { FC, useState } from 'react'
import { FieldProps } from 'formik';
import DateTimePicker from 'react-datetime-picker';

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

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

        <DateTimePicker
        {...field} 
        value = {field.value} 
        minDate = {new Date()}
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