const Post = ({ post }) => {
  return (
    <div className="flex justify-between items-center w-1/2 mt-3 p-2 bg-white">
      <div className="flex space-x-3 items-center ">
        <img
          className=" h-10 rounded-full border"
          src={post.userImage}
          alt={post.userName}
        />
        <h1 className="font-bold">{post.userName}</h1>
      </div>

      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          dataSlot="icon"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Post;
