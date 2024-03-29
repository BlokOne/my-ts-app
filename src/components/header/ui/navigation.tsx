import { linkStyle, navStyle } from "./style"

function Navigation() {
  const links = [
    {
      text: 'Products',
      href: '#target-section'
    },
    {
      text: 'Docs',
      href: '#target-section'
    },
    {
      text: 'T-Staking',
      href: '#target-section'
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