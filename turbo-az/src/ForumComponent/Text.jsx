
import React from 'react'
import { Controller,  } from 'react-hook-form'

function Text(name,control,label) {
   
  return (
    <Controller
    name={name}
    control={control}
    defaultValue=""
    render={(field)=>(
        <TextField {...field} label={label}/>
    )}

    />
  )
}

export default Text
