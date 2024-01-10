import LogoImg from '@/assets/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={LogoImg} alt="Raoul la giraffe" />
        Blog animalier
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/blog">Articles</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
