import React from 'react'
import './title.css'

export default function Title(props){
    return (
       <div className='d-flex flex-column w-100 pl-2 pr-2'>
           <div className='d-flex flex-row justify-content-between align-items-center'>
               <img className='title__image' src='https://kucasino.app/wp-content/uploads/2018/09/techcombank.png'/>
               <div className='d-flex flex-row'>
                   <p className='m-0 text-center'>1800 588 822</p>
                   <div className='d-flex flex-row ml-2 title__sw__section justify-content-between align-items-center'>
                       <div className='title__switch' /> {/* Should be Switch Component */}
                       <p className='m-0'>VN</p> 
                   </div>
               </div>
           </div>
           <div className='d-flex align-items-center flex-column'>
                <h2 className='text-uppercase'>Đăng ký ngân hàng điện tử</h2>
                <p className='text-uppercase'>Không cần đến quầy</p>
           </div>
       </div>
    )
}