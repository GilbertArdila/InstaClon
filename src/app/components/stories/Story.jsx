import Image from "next/image";


const Story = ({user}) => {
  return (
    <div>
        <Image width={56} height={56} className="rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out" src={user.image} alt={user.userName} />
        <p className="truncate text-xs w-14 ">{user.userName}</p>
    </div>
  )
}

export default Story;