import React from 'react'

export default function Conten3({handleNext}){
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <p>Content 3</p>
            <button style={{
                borderRadius:'7px',
                border:'unset',
                backgroundColor:'red',
                minWidth:'120px',
                width:'80%', 
                marginTop:'20px',
                minHeight:'40px',
                color:'#fff'
            }} onClick={handleNext}>Thực hiện</button>
        </div>
    )
}