import React from 'react'
import './Modal.css'

export default function Modal(props) {
  if(props.vieww === true){
    return (
        <div className='modal-main'>
          <div className='modal-main-real'>
            <div className='modal-main-img'>
              <img src={props.carddetails.pic} alt=''>
              </img>
              <div onClick={() => { props.setopen(false)}}>
                close
              </div>
            </div>
            <div className='modal-main-discri'>
              <p>
                {props.carddetails.name}
              </p>
              <div>
                Price : 500
              </div>
            </div>
          </div>
        </div>

    )
  }
  else return null

}