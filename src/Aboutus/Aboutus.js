import React from 'react'
import './Aboutus.css'
import owner from './owner.jpg'

export  const Aboutus = React.forwardRef((props , ref) =>{
  return (
    <div className='am' ref={ref}>
      <div className='am-owner' >
        <div>
          <img src={owner} className='owner-imp'>
          </img>
        </div>
        <div >
          Owner
        </div>
        <div>
          A short discription about the owner
        </div>
      </div>
      <div className='am-middleline'>

      </div>
        <div className='am-discription'>
            <div>
                <div>
                    
                </div>
                <div>
                    Something 1
                </div>
                <div>
                    lasd sadas dasdasd asfasfasda sdasd eed sadqws dadasdasd sadasdqe
                </div>
            </div>
            <div>
                <div>
                
                </div>
                <div>
                    Something 1
                </div>
                <div>
                    lasd sadas dasdasd asfasfasda sdasd eed sadqws dadasdasd sadasdqe
                </div>
            </div>
            <div>
                <div>
                
                </div>
                <div>
                    Something 1
                </div>
                <div>
                    lasd sadas dasdasd asfasfasda sdasd eed sadqws dadasdasd sadasdqe
                </div>
            </div>
            <div>
                <div>
                
                </div>
                <div>
                    Something 1
                </div>
                <div>
                    lasd sadas dasdasd asfasfasda sdasd eed sadqws dadasdasd sadasdqe
                </div>
            </div>

        </div>
      </div>
  )
})