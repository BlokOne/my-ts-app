import imgReferral from '../../../public/8/icons.svg'
import imgReferral2 from '../../../public/8/t-staking.svg'
import { useMediaQuery } from '../../media/useMedia'

import Button from '../../shared/button'

function TStaking() {
  const isMobile = useMediaQuery()
  return (
    <div id={'t-Staking'} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: isMobile ? '114px' : '277px' }}>
      <p style={{ fontWeight: 'bold', fontSize: '60px', color: 'white', marginBottom: '51px' }}>
        T-Staking
      </p>
      <img style={{ marginBottom: '74px' }} src={isMobile ? imgReferral2 : imgReferral} />
      <Button width='267px' arrow={true}>
        Stake TTTU +
      </Button>
    </div>
  )
}

export default TStaking