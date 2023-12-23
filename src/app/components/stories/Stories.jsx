'use client';

import { useEffect, useState } from "react";
import Story from "./Story";
import { Faker } from "@/app/helpers/miniFaker";

const Stories = () => {
    const [storyUser, setStoryUser] = useState([]);

    useEffect(() => {
     Faker(setStoryUser,70);
    
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