import React from 'react'
import Title from './components/title/title'
import Stepper from './components/stepper'
import './index.css'
import Content1 from './components/content'
import Content2 from './components/conten2'
import Content3 from './components/content3'
export default function PresentationalRegister({step, handleNext1,handleNext3, handleChangeValue1, value1}){
    const renderContent =()=>{
        switch(step){
            case 1:
                return <Content1 value={value1} handleChangeValue1={handleChangeValue1} handleNext1={handleNext1}></Content1>
            case 2 :
                return  <Content2 handleNext={handleNext1}></Content2>
            case 3 :
                return  <Content3 handleNext={handleNext3}></Content3>
            default:
                break;
        }
    }
    return (
        <div className='register__container'>
           <Title />
           <Stepper step={step} />
           {
               renderContent()
           }
       </div>
    )
}