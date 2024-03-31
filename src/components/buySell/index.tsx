import mobile from '../../../public/7/mobile.svg'
import mobile2 from '../../../public/7/mobile2.svg'

import icon from '../../../public/7/Group390.svg'
import icon1 from '../../../public/7/Group391.svg'
import icon2 from '../../../public/7/Group392.svg'
import Button from '../../shared/button'
import { subTitleStyle, textStyle, titleStyle, wrapper, wrapperButtonStyle, wrapperIconsStyle, wrapperInfo, wrapperModile2 } from './style'
import { useMediaQuery } from '../../media/useMedia'


export default function BuySell() {
  const isMobile = useMediaQuery()

  return (
    <>
      {
        isMobile ?
          <div style={wrapperModile2(mobile2)}>
            <p style={titleStyle(isMobile)}>Buy/Sell TTTU</p>
            <p style={subTitleStyle(isMobile)}>on <span><img src={icon} alt="" /></span></p>
            <p style={textStyle(isMobile)}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            </p>
            <div style={wrapperIconsStyle(isMobile)}>
              <a href="/">
                <img src={icon2} alt="" />
              </a>
              <a href="/">
                <img src={icon1} alt="" />
              </a>
            </div>
            <div style={wrapperButtonStyle(isMobile)}>
              <p style={{
                fontWeight: 'bold',
                fontSize: '30px'
              }}>Start Trade TTTU</p>
              <Button width='254px' arrow>
                TTTU/USDT
              </Button>
            </div>
          </div>
          :
          <div style={wrapper(isMobile)}>
            <div style={wrapperInfo(isMobile)}>
              <div>
                <p style={titleStyle(isMobile)}>Buy/Sell TTTU</p>
                <p style={subTitleStyle(isMobile)}>on <span><img src={icon} alt="" /></span></p>
                <p style={textStyle(isMobile)}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                </p>
                <div style={wrapperIconsStyle(isMobile)}>
                  <a href="/">
                    <img src={icon2} alt="" />
                  </a>
                  <a href="/">
                    <img src={icon1} alt="" />
                  </a>
                </div>
                <div style={wrapperButtonStyle(isMobile)}>
                  <p style={{
                    fontWeight: 'bold',
                    fontSize: '30px'
                  }}>Start Trade TTTU</p>
                  <Button width='254px' arrow>
                    TTTU/USDT
                  </Button>
                </div>
              </div>
            </div>
            <img src={mobile} alt="" />
          </div>
      }
    </>

  )
}
