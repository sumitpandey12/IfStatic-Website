import React from 'react'

const CompanyStatBar = () => {
  return (
    <div className='h-[150px] min-w-min bg-[#BD3752] flex justify-center items-center '>
<div className=' w-[95vw] h-[140px]  flex justify-evenly'>
        <div className='flex justify-center flex-col items-center font-poppins'> 
            <h1 className='text-4xl font-bold text-[#ffffff]'>100+</h1>
            <p className='text-base font-semibold text-[#ffffff]'>Project Completed</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
            <h1 className='text-4xl font-bold text-[#ffffff]'>5Cr+</h1>
            <p className='text-base font-semibold text-[#ffffff]'>Marketing Budgets Managed</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
            <h1 className='text-4xl font-bold text-[#ffffff]'>100Cr+</h1>
            <p className='text-base font-semibold text-[#ffffff]'>Reach Delivered</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
            <h1 className='text-4xl font-bold text-[#ffffff]'>10+</h1>
            <p className='text-base font-semibold text-[#ffffff]'>Starts-Ups Supported</p>
        </div>

        </div>
    </div>
  )
}

export default CompanyStatBar