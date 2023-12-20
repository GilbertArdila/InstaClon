'use client';

import minifaker from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
    const [storyUser, setStoryUser] = useState([]);

    useEffect(() => {
     const storyUsers = minifaker.array(70,(i)=>(
        {
            userName: minifaker.username({locale:"en"}).toLowerCase(),
            image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
            id:i

        }
     ))
     setStoryUser(storyUsers);
    
    }, [])
     
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
{storyUser.map((user)=>(
    <Story key={user.id} user={user}/>
))}
        </div>
  )
}

export default Stories;