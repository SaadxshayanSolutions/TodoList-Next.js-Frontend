"use client"
import React, { FC } from 'react'
import { FieldProps } from 'formik';


interface ISelectInputProps extends FieldProps {
    placeholder? : string,
    id: string,
    type: string,
    name: string,
    className: string,
    label: string,
    value: string | number,   
    children: React.ReactNode
    options: {value:string, text:string}[]
}

const SelectInput : FC<ISelectInputProps> = ({
    field,
    form: {touched, errors},
    meta,
    label,
    placeholder,
    children,
    options,
    ...props
}) => {

  return (
    <div className='space-y-1 p-2'>
        <label>{label}</label>

        <select {...field} {...props} className='w-full p-4'>
            {
                options.map(option => {
                    return (
                        <option 
                        value = {option.value} 
                        key={option.value}
                        className='p-2'
                        >
                            {option.text}
                        </option>
                    )
                })
            }
        </select>

      {
        touched[field.name] &&
        errors[field.name] && 
        <div className="text-xs text-red-600">
          `${errors[field.name]?.toString()}`
        </div>
      }
    </div>
  )
}

export default SelectInput