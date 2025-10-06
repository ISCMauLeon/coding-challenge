import { getRandomPosts } from "@/lib/posts";
import PostList from "./_components/postList";

export default async function Home() {
  const posts = await getRandomPosts();
  return (
    <main>
      <PostList posts={posts} />
    </main>
  );
}
