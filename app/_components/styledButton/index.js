'use client';
import styles from './styledButton.module.css';

export default function styledButton(props) {
  const {
    isActive,
    onClick,
    children,
  } = props;

  return (
    <button
      className={`${styles['styled-button']} ${isActive && styles['styled-button-active']}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
