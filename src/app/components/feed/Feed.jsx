import React from "react";
import Stories from "../stories/Stories";
import Posts from "./Posts";
import MiniProfile from "../suggestions/MiniProfile"
import Suggestions from "../suggestions/Suggestions";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        <Stories />
        <Posts />
      </section>

      <section className="hidden md:inline-grid md:col-span-1 ">
        <div className="fixed xl:w-[380px] w-auto  ">
          
          <MiniProfile/>
         <Suggestions/>
        </div>
      </section>
    </main>
  );
};

export default Feed;
