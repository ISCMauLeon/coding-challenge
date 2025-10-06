import styles from './profilePage.module.css';
import { getRandomPosts } from "@/lib/posts";
import { getUser } from '@/lib/users';

export default async function profilePage ({ params }) {
  const { userId } = await params;
  const user = await getUser(userId);

  return (
    <div className={styles['profile-page']}>
      <img className={styles['profile-page-image']} src={`/avatars/user_${userId}.jpg`} />
      <h1>{user.name}</h1>
      <h3>{user.bio}</h3>
    </div>
  );
}