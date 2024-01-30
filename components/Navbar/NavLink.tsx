import Link from 'next/link'

type Props = {
    link: string,
    title: string
}

const NavLink: React.FC<Props> = ({link, title}) => {
  return (
    <li className="body-text text-gradient_blue-purple !font-bold">
    <Link
      href={link}
      target="_blank"
    >
      {title}
    </Link>
  </li>  )
}

export default NavLink