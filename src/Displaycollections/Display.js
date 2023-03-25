import React , {useState} from 'react'
import Modal from './Modal'
import { array1, array2, array3 } from './Data'
import './Display.css'

export const Displaycollections = React.forwardRef( (props, ref) => {
    const [property1 , property2] = useState('dc-main-div-selecttype-div-onclick')
    const [property3 , property4] = useState('dc-main-div-selecttype-div')
    const [property5 , property6] = useState('dc-main-div-selecttype-div')
    const [isopen, setisopen] =  useState(false)
    const [cardnum, setcardnum] = useState()
    const [current_collection, update_collection] = useState(array1)
    const arraydis = current_collection.map((elm,index) => {return(
        <div key={index} className='dc-cards' onClick={() => {setisopen(true); setcardnum(index)}}>
            <div className='dc-cards-img'>
                <img src={elm.pic} alt=''>
                </img>
                <div>
                {elm.name}
                </div>
            </div>

        </div>
    ) })

  return (
    <div className='dc-main'>
        <div>
            <p className='dc-main-div-heading'>
                Collections
            </p>
            <div className='dc-main-div-addons-div'>
                <p className='dc-main-div-addons'>
                    Choose the way you want
                </p>
            </div>
            <div className='dc-main-div-selecttype'>
                <div value='hiee' ref = {ref} className={property1} onClick={() => {property2('dc-main-div-selecttype-div-onclick') ; property4('dc-main-div-selecttype-div') ; property6('dc-main-div-selecttype-div') ; update_collection(array1)}}>
                    Treditional
                </div>
                <div className={property3} onClick={() => {property4('dc-main-div-selecttype-div-onclick') ; property6('dc-main-div-selecttype-div') ; property2('dc-main-div-selecttype-div') ; update_collection(array2)}} >
                    Formals
                </div>
                <div className={property5} onClick={() => {property6('dc-main-div-selecttype-div-onclick') ; property4('dc-main-div-selecttype-div') ; property2('dc-main-div-selecttype-div') ; update_collection(array3)}}>
                    Party wears
                </div>
            </div>
        </div>
        <div className='dc-main-div'>
            {arraydis}
        </div>
        <Modal vieww={isopen} carddetails={current_collection[cardnum]} setopen={setisopen}>
        </Modal>
    </div>
  )
}
)