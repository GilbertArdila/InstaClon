import Image from 'next/image';
import React from 'react'

const MiniProfile = () => {
  return (
    <div>
        <div className='flex items-center justify-between mt-14 ml-10 '>
            <Image width={64} height={64} className=" img"src="https://avatars.githubusercontent.com/u/88728941?v=4" alt="user-photo" />
            <div className="ml-4 flex-1">
                <h2 className='font-bold '>DuckCode</h2>
                <h3 className=' text-sm text-gray-400'>Welcome to InstaClone</h3>
            </div>
            <button className='btn'>Sing up</button>
        </div>
        
    </div>
  )
}

export default MiniProfile;