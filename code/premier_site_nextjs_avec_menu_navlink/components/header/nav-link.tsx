'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';

interface INavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink(props: INavLinkProps) {
  const path = usePathname();

  return (
    <Link
      href={props.href}
      className={path.startsWith(props.href) ? classes.active : undefined}
    >
      {props.children}
    </Link>
  );
}
