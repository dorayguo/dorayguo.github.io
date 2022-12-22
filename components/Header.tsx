import Link from 'next/link'
export default function Header() {
    return (
      <header>
        <div>
          <Link href='/' passHref id="header-name">Dora Guo</Link>
          <span> | </span>
          <Link href='/blog' passHref id="header-blog">blog</Link>
        </div>
      </header>
    )
}