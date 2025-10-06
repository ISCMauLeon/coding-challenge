'use client';
import { useState, useEffect } from 'react';
import Post from "@/app/_components/post";
import styles from './postList.module.css';

export default function postList({ posts }) {

  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    // Get liked posts from local storage
    const savedLikedPosts = localStorage.getItem('likedPosts');
    setLikedPosts(savedLikedPosts ? JSON.parse(savedLikedPosts) : {});
  }, []);

  // Set liked posts to localStorage
  useEffect(() => {
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
  }, [likedPosts]);

  const handleLike = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <>
      <div className={styles['post-list']}>
        {posts?.length && posts.map(post => (
          <Post
            key={post.post_id}
            postId={post.post_id}
            userId={post.user_id}
            user_name={post.name}
            comment={post.comment}
            image={post?.image}
            timestamp={post.timestamp}
            liked={likedPosts[post.post_id]}
            handleLike={handleLike}
          />
        ))}
      </div>
      {/* TODO: add a load more button. This would involve having an API to hit from a React Client Component to fetch the data */}
    </>
  );
}