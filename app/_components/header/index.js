import Link from "next/link";
import Image from "next/image";
import AvatarIcon from "@/app/_components/avatarIcon";
import logoImg from '@/app/_assets/logo.png';
import styles from './header.module.css';

const HARDCODED_PROFILE_USER_ID = 6; // This is a hardcoded user ID for the current user since there is no Signing Method yet

export default function appHeader() {
  return (
    <div className={styles['app-header']}>
      <Link className={styles['app-header-logo']} href="/">
        <Image src={logoImg} alt="Facealbum logo." priority />
        Facealbum
      </Link>

      <AvatarIcon userId={HARDCODED_PROFILE_USER_ID} />
    </div>
  );
}
