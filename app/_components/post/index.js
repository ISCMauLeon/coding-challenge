import Link from 'next/link';
import AvatarIcon from '../avatarIcon';
import StyledButton from '../styledButton';
import styles from './post.module.css';

export default function post (props) {
  const {
    postId,
    userId,
    user_name,
    comment,
    image,
    timestamp,
    liked,
    handleLike
  } = props;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(timestamp * 1000).toLocaleDateString("en-US", options);

  return <>
    <div className={styles['post']}>
      <div className={styles['post-header']}>
        <AvatarIcon userId={userId} />
        <div className={styles['post-header-text-wrapper']}>
          <Link href={`/profile/${userId}`}>
            <h2>{user_name}</h2>
          </Link>
          {formattedDate}
        </div>
      </div>
      <hr/>
      { image && (
        <img className={styles['post-image']} src={image}/>
      )}
      {comment}
      <hr/>
      <StyledButton
        isActive={liked}
        onClick={() => handleLike(postId)}
      >
        {liked ? 'Liked' : 'Like'}
      </StyledButton>
    </div>
  </>
}