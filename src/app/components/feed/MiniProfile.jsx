import React from 'react'

const MiniProfile = () => {
  return (
    <div>
        <div className='flex items-center justify-between mt-14 ml-10 '>
            <img className="h-16 rounded-full border p-[2px]"src="https://avatars.githubusercontent.com/u/88728941?v=4" alt="user-photo" />
            <div className="ml-4 flex-1">
                <h2 className='font-bold '>DuckCode</h2>
                <h3 className=' text-sm text-gray-400'>Welcome to InstaClone</h3>
            </div>
            <button className='font-semibold text-blue-400 text-sm sm:text-base'>Sing up</button>
        </div>
        {/**Suggestions */}
    </div>
  )
}

export default MiniProfile;