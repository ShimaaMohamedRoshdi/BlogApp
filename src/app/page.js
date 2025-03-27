// import {blogs} from "@/.velite/generated"
import { blogs } from "../../.velite/generated";
import HomeCoverSection from "../components/Home/HomeConversation";
import FeaturedPosts from "../components/Home/FeatuerdPosts";
 import RecentPosts from "../components/Home/RecentPosts";

const blogsData = require("../../.velite/generated/blogs.json");


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={blogsData} />
       <FeaturedPosts blogs={blogs} />
      <RecentPosts blogs={blogs} /> 
    </main>
  )
}
