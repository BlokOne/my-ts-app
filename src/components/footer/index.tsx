import { footerStyle, itemStyle, itemTextStyle, wrapperStyle } from "./style"

import telegramIcon from '../../../public/10/Vector.svg'
import docs from '../../../public/10/Vector4.svg'
import support from '../../../public/10/Vector3.svg'
import youtube from '../../../public/10/Vector2.svg'
import medium from '../../../public/10/Vector1.svg'
import mail from '../../../public/10/Vector5.svg'
import telegramBot from '../../../public/10/Group395.svg'
import twitter from '../../../public/10/path1009.svg'
import logo from '../../../public/logo.svg'


import Button from "../../shared/button"

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={wrapperStyle}>
        {
          items.map(item => <div key={item.title} style={itemStyle}>
            <img src={item.icon} />
            <p style={itemTextStyle}>
              {item.title}
            </p>
            <Button footer width="190px" disabled={true}>
              {item.button}
            </Button>
          </div>)
        }
      </div>
      <img style={{}} src={logo} />
    </footer>
  )
}

export default Footer

const items = [
  {
    title: "Telegram",
    button: 'Join',
    icon: telegramIcon
  },
  {
    title: "Telegram Bot",
    button: 'Join',
    icon: telegramBot
  },
  {
    title: "Twitter",
    button: 'Follow',
    icon: twitter
  },
  {
    title: "Medium",
    button: 'Subscribe',
    icon: medium
  },
  {
    title: "Youtube",
    button: 'Subscribe',
    icon: youtube
  },
  {
    title: "Support",
    button: 'Contact',
    icon: support
  },
  {
    title: "Docs",
    button: 'Read more',
    icon: docs
  }
  , {
    title: "Mail",
    button: 'Write to us',
    icon: mail
  }
]