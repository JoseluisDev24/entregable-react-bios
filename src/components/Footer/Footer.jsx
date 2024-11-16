import React from 'react'

function Footer() {
    return (
        <div className='bg-gray-700 p-4 flex items-center justify-between  rounded-lg mt-2'>
            <span className='cursor-pointer'>
                Clear Completed
            </span>
            <img className='cursor-pointer w-6' src="trash.svg" alt="trash icon" />
        </div>
        
    )
}

export default Footer
