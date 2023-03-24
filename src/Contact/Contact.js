import React from 'react'
import maillogo from './allimg/mail.png'
import phonelogo from './allimg/phone.png'
import mapimg from './allimg/map.png'
import './Contract.css'


export const Contact = React.forwardRef((props,ref) =>{
  return (
    <div className='CM' ref={ref}>
      <div>
        CONTACT
      </div>
      <div>
      <a href='https://goo.gl/maps/NF98ZkphSk6HoNMk9'>
      <div className='CM-map'>
        <img src={mapimg}/>
      </div>
      </a>
      <div className='CM-info'>
        <div>
            <div >
              <img className='CM-info-mail' src={maillogo} ></img>

            </div>            
            <div>
                Email us
            </div>
            <div>
                xyyx@gmail.com
            </div>
        </div>
        <div>
            <div >
              <img className='CM-info-phone' src={phonelogo}></img>
            </div>
            <div>
                Call us
            </div>
            <div>
                +91 123456789
            </div>
        </div>
      </div>
      </div>
    </div>
  )
})