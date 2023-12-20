import Post from "./Post";


const Posts = () => {
    /**Dummy data for a while */
    const post = [
        {
            id:"1",
            userName:"G.A.C",
            userImage: `https://avatars.githubusercontent.com/u/88728941?v=4`,
            image:"https://images.unsplash.com/photo-1703027816278-2573b76e62f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
            caption:"feels cold here"
        },
        {
            id:"2",
            userName:"G.A.C",
            userImage: `https://avatars.githubusercontent.com/u/88728941?v=4`,
            image:"https://plus.unsplash.com/premium_photo-1696862516220-be1e1aa943f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
            caption:"my new aparment"
        },
        {
            id:"3",
            userName:"G.A.C",
            userImage: "https://avatars.githubusercontent.com/u/88728941?v=4",
            image:"https://images.unsplash.com/photo-1695653423459-beb6b8a8169b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
            caption:"fBuying some food for my party"
        },
        {
            id:"4",
            userName:"G.A.C",
            userImage: `https://avatars.githubusercontent.com/u/88728941?v=4`,
            image:"https://plus.unsplash.com/premium_photo-1700135090918-ecb43069e20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D",
            caption:"Wow!!"
        }
    ]
  return (
    <div>
        {post.map((post)=>(
            <Post key={post.id} post={post}/>
        ))}
    </div>
  )
}

export default Posts;