import LogoImg from '@/assets/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';
import NavLink from './nav-link';

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
            <NavLink href="/blog">Articles</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
