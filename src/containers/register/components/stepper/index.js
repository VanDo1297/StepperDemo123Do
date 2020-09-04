import React, { useEffect } from 'react'
import './index.css'
const steps =[
    {
        id:1,
        label:'Xác thực thông tin'
    },
    {
        id:2,
        label:'Tạo tên truy cập'
    },
    {
        id:3,
        label:'Sử dụng dịch vụ'
    }
]
export default function Stepper({step}){
    const [stepActive, setStepActive] = React.useState(step)

    useEffect(()=>{
        setStepActive(step)
    },[step])

    const StepItem=(step)=>{
        return (
            <div className='step__item d-flex flex-column justify-content-center align-items-center'>
                <p>{step.label}</p>
                <div className={`step__item__line ${stepActive >= step.id ? 'active' : ''}`}>
                    <div className={`dot ${stepActive >= step.id ? 'active' : ''}`} />
                </div>
            </div>
        )
    }
    return (
       <div className='d-flex flex-row justify-content-between w-100 pl-2 pr-2 mt-3'>
           {
               steps.map(step => StepItem(step))
           }
       </div>
    )
}