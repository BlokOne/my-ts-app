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
              The TTTU token is traded on the MEXC exchange. You can buy and sell tokens, send them to T-Wallet, and trade directly with the T-Tap product. Additionally, MEXC supports USDT on the EOS network.
            </p>
            <div style={wrapperIconsStyle()}>
              <a href="/">
                <img src={icon2} style={{ width: "175px" }} alt="" />
              </a>
              <a href="/">
                <img src={icon1} style={{ width: "175px" }} alt="" />
              </a>
            </div>
            <div className='buttonsWrapper' style={wrapperButtonStyle(isMobile)}>
              <p style={{
                fontWeight: 'bold',
                fontSize: '30px'
              }}>Start Trade TTTU</p>
              <Button onClick={() => {
                const botUrl = "https://www.mexc.com/ru-RU/register?inviteCode=mexc-tproject";
                window.open(botUrl, '_blank')!.focus();
              }} width='254px' arrow>
                TTTU/USDT
              </Button>
            </div>
          </div>
          :
          <div style={wrapper()}>
            <div style={wrapperInfo()}>
              <div>
                <p style={titleStyle(isMobile)}>Buy/Sell TTTU</p>
                <p style={subTitleStyle(isMobile)}>on <span><img src={icon} alt="" /></span></p>
                <p style={textStyle(isMobile)}>
                  The TTTU token is traded on the MEXC exchange. You can buy and sell tokens, send them to T-Wallet, and trade directly with the T-Tap product. Additionally, MEXC supports USDT on the EOS network.
                </p>
                <div style={wrapperIconsStyle()}>
                  <a href="/">
                    <img src={icon2} alt="" />
                  </a>
                  <a href="/">
                    <img src={icon1} alt="" />
                  </a>
                </div>
                <div className='buttonsWrapper' style={wrapperButtonStyle(isMobile)}>
                  <p style={{
                    fontWeight: 'bold',
                    fontSize: '30px'
                  }}>Start Trade TTTU</p>
                  <Button onClick={() => {
                    const botUrl = "https://www.mexc.com/ru-RU/register?inviteCode=mexc-tproject";
                    window.open(botUrl, '_blank')!.focus();
                  }} width='254px' arrow>
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
