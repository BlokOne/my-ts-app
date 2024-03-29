import Button from "../../shared/button"
import { titleStyle } from "./style"

import texts from '../../../public/1/texts.svg'
import bigLogo from '../../../public/1/bigLogo.svg'
import mobile from '../../../public/1/mobile.svg'


function Title() {
  return (
    <>
      <h1 style={titleStyle}>T-Project</h1>
      <img style={{ maxWidth: "778.93px", marginBottom: '15px' }} src={texts} />
      <Button width="326px">
        Buy TTTU on MEXC
      </Button>
      <div style={{ display: 'flex', gap: "167px", marginTop: '72px', alignItems: 'center', marginBottom: '99px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '109px', }}>
          <img src={bigLogo} />
          <Button width="396px" arrow={true}>
            Start T-App in the Telegram
          </Button>
        </div>
        <img src={mobile} />
      </div>
    </>
  )
}

export default Title