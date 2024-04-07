import { useMediaQuery } from "../../media/useMedia"
import Button from "../../shared/button"
import { titleStyle, wrapper, textStyle, logoStyle, wrapperLogoStyle, textWrapper, buttonsWrapper, imageStyle } from "./style"

type ItemT = {
  mobile: string,
  mobile2: string,
  logo?: string,
  title: string,
  button: string
  arrow: boolean
  text: string
  href1: string
  href2: string
  id?: string
  onClick?: () => void
}

function Item({ mobile, logo, title, button, arrow, text, id, mobile2, onClick }: ItemT) {
  console.log(button)
  const isMobile = useMediaQuery()
  return (
    <>
      {
        isMobile ?
          <div id={id} style={wrapper(isMobile, mobile2)}>
            <div style={wrapperLogoStyle}>
              {logo && <div style={logoStyle}>
                <img src={logo} />
              </div>}
              <h3 style={titleStyle}>
                {title}
              </h3>
            </div>
            <div style={textWrapper}>
              <p style={textStyle}>
                {text}
              </p>
            </div>
            <div style={buttonsWrapper}>
              <Button width="306px" arrow={arrow}>
                {button}
              </Button>
              {logo && <Button disabled={true} width="306px" >
                Learn more
              </Button>}
            </div>
          </div >
          :
          <div id={id} style={wrapper(isMobile, mobile)}>
            <div style={imageStyle(mobile)} />
            <div style={{ height: '80%', display: 'flex', flexDirection: 'column', justifyContent: button === 'RoadMap' ? 'center' : 'space-between', maxHeight: '800px' }}>
              <div style={wrapperLogoStyle}>
                {logo && <div style={logoStyle}>
                  <img src={logo} />
                </div>}
                <h3 style={titleStyle}>
                  {title}
                </h3>
              </div>
              <div style={textWrapper}>
                <p style={textStyle}>
                  {text}
                </p>
              </div>
              <div style={buttonsWrapper}>
                <Button onClick={onClick} width="306px" arrow={arrow}>
                  {button}
                </Button>
                {logo && <Button disabled={true} width="306px" >
                  Learn more
                </Button>}
              </div>
            </div>
          </div >
      }
    </>
  )
}

export default Item