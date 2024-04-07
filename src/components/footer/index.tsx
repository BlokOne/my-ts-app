import { footerStyle, itemStyle, itemTextStyle, wrapperStyle } from "./style"

import telegramIcon from '../../../public/10/Vector.png'
import docs from '../../../public/10/Vector4.png'
import support from '../../../public/10/Vector3.png'
import mail from '../../../public/10/Vector2.png'
import medium from '../../../public/10/Vector1.png'
import youtube from '../../../public/10/Vector5.png'
import telegramBot from '../../../public/10/Group395.png'
import twitter from '../../../public/10/path1009.png'
import logo from '../../../public/logo.svg'


import Button from "../../shared/button"
import { useMediaQuery } from "../../media/useMedia"

function Footer() {
  const isMobile = useMediaQuery()

  return (
    <footer style={footerStyle}>
      <div style={wrapperStyle}>
        {
          items.map(item => <div key={item.title} style={itemStyle(isMobile)}>
            <img src={item.icon} />
            <p style={itemTextStyle}>
              {item.title}
            </p>
            <Button onClick={() => {
              if (item.href.length > 0) {
                window.location.href = item.href;
              }
            }} footer width={isMobile ? '147px' : '190px'} disabled={true}>
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
    icon: telegramIcon,
    href: "tg://resolve?domain=t_project"
  },
  {
    title: "Telegram Bot",
    button: 'Join',
    icon: telegramBot,
    href: "tg://resolve?domain=t_projects_bot"
  },
  {
    title: "Twitter",
    button: 'Follow',
    icon: twitter,
    href: 'https://twitter.com/t_project_tttu'
  },
  {
    title: "Medium",
    button: 'Subscribe',
    icon: medium,
    href: ''
  },
  {
    title: "Youtube",
    button: 'Subscribe',
    icon: youtube,
    href: ''
  },
  {
    title: "Support",
    button: 'Contact',
    icon: support,
    href: 'tg://resolve?domain=t_project_support_bot'
  },
  {
    title: "Docs",
    button: 'Read more',
    icon: docs,
    href: 'https://t-project.gitbook.io/docs'
  }
  , {
    title: "Mail",
    button: 'Write to us',
    icon: mail,
    href: 'mailto:theterminal02@gmail.com'
  }
]