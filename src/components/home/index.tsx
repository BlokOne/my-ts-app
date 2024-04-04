import Button from "../../shared/button"
import { titleStyle, wrapper, wrapperModile } from "./style"
import { CONTAINER_WIDTH } from "../../shared/style"

import texts from '../../../public/1/texts.svg'
import texts2 from '../../../public/Group301.svg'

import bigLogo from '../../../public/1/bigLogo.svg'
import mobile from '../../../public/1/mobile.svg'
import { useMediaQuery } from "../../media/useMedia"


function Title() {
  const isMobile = useMediaQuery();

  return (
    <>
      <div style={wrapper()}>
        <h1 style={titleStyle(isMobile)}>T-Project</h1>
        {!isMobile ? <img style={{ height: '50%', maxHeight: '600px', marginBottom: '15px' }} src={texts} /> : <img style={{ width: '100%' }} src={texts2} />}
        <Button width="326px">
          Buy TTTU on MEXC
        </Button>
      </div>
      {
        !isMobile ? <div style={{ display: 'flex', gap: "167px", width: CONTAINER_WIDTH, marginTop: '72px', alignItems: 'center', marginBottom: '99px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '109px', }}>
            <img src={bigLogo} />
            <Button width="396px" arrow={true}>
              Start T-App in the Telegram
            </Button>
          </div>
          <img src={mobile} />
        </div>
          :
          <div style={wrapperModile(mobile)}>
            <img style={{ width: '324px' }} src={bigLogo} />
            <Button width="396px" arrow={true}>
              Start T-App in the Telegram
            </Button>
          </div>
      }
    </>
  )
}

export default Title