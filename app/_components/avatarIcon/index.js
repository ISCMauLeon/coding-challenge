import Link from 'next/link';
import avatarPlaceholderImg from '@/public/avatars/avatar-placeholder.png';
import styles from './avatarIcon.module.css';

export default function avatarIcon({ userId }) {
  const imageSrc = userId ? `/avatars/user_${userId}.jpg` : avatarPlaceholderImg.src; // Makeshift user profile images since I don;t want to store images blobs on the DB

  return <>
    <Link className={styles['avatar-icon']} href={`/profile/${userId}`}>
      <img src={imageSrc} alt="Avatar image." />
    </Link>
  </>
}