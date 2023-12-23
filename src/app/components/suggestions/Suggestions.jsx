'use client';
import minifaker from 'minifaker';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Faker } from '@/app/helpers/miniFaker';

const Suggestions = () => {
    const [Suggestions, setSuggestions] = useState([]);

    useEffect(() => {
      Faker(setSuggestions,5);
      
    }, [])
 
    
  return (
    <div className='mt-4 ml-10'>
        <div className='flex justify-between items-center mb-5 text-sm'>
            <h3 className='font-bold text-gray-400'>Suggestions for you</h3>
            <button className='btn'>See all</button>
        </div>
        {Suggestions.map((suggestion) =>(
            <div className='flex items-center justify-between mt-3 ' key={suggestion.id}>
                <Image width={40} height={40} className='img' src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`} alt="random image" />
                <div className='flex-1  '>
                    <h2 className='font-semibold text-sm'>{suggestion.userName}</h2>
                    <h3 className='text-gray-400 text-xs'>{suggestion.jobTitle}</h3>
                </div>
                <button className='btn'>Follow</button>
            </div>
        ))}
    </div>
  )
}

export default Suggestions;