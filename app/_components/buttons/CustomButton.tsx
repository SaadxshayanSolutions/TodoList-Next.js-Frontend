import { Button } from '@/components/ui/button'
import React, { FC } from 'react'


interface buttonProps {
    handleFunction : () => void,
    text: string
}

const CustomButton : FC<buttonProps> = ({handleFunction,text}) => {
  return (
    <Button onClick={handleFunction}>
        {text}
    </Button>
  )
}

export default CustomButton