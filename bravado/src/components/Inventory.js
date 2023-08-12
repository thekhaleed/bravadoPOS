import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Inventory(props) {

  const Location = useLocation();
  props.location(Location)

  return (
    <div className='col-12 col-sm-11 col-md-11 text-light bg-dangr'>
      <div className='p-2'>
        <h5 className='head-title'>reports</h5>
        <hr className='line'/>
      </div>

      <div className='screen bg-dange d-flex p-0'>
      </div>
    
    </div>
  )
}
