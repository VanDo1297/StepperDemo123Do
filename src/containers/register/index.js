import React, { useState } from 'react'
import Presentational from './presentational'
export default function Register(props){
    const [step, setStep]= React.useState(1)
    const [value1, setValue1]= React.useState({})
    const handleNext1 =()=>{
        setStep(step+1)
    }

    const handleNext3 =()=>{
        setStep(1)
    }

    const handleChangeValue1 =(e)=>{
        setValue1({
            ...value1,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center'>
            <Presentational handleChangeValue1={handleChangeValue1} value1={value1} step={step} handleNext1={handleNext1} handleNext3={handleNext3}/>
        </div>
    )
}