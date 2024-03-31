import { linkStyle, navStyle } from "./style"

function Navigation() {
  const links = [
    {
      text: 'Products',
      href: '#products'
    },
    {
      text: 'Docs',
      href: '#docs'
    },
    {
      text: 'T-Staking',
      href: '#t-Staking'
    }
  ]


  return (
    <nav style={navStyle}>
      {links.map(item => <a key={item.text} style={linkStyle} href={item.href} >
        {item.text}
      </a>)}
    </nav>
  )
}

export default Navigation