import imgReferral from '../../../public/8/icons.svg'
import Button from '../../shared/button'

function TStaking() {
  return (
    <div id={'t-Staking'} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '277px' }}>
      <p style={{ fontWeight: 'bold', fontSize: '60px', color: 'white', marginBottom: '51px' }}>
        T-Staking
      </p>
      <img style={{ marginBottom: '74px' }} src={imgReferral} />
      <Button width='267px' arrow={true}>
        Stake TTTU +
      </Button>
    </div>
  )
}

export default TStaking