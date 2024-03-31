import imgReferral from '../../../public/9/icons.svg'
import { useMediaQuery } from '../../media/useMedia'

function Referral() {
  const isMobile = useMediaQuery()
  return (
    <>
      {
        !isMobile && <div style={{ display: 'flex', flexDirection: 'column', gap: '106px', alignItems: 'center', marginBottom: '254px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '60px', color: 'white' }}>
            Referral program
          </p>
          <img src={imgReferral} />
        </div>
      }
    </>

  )
}

export default Referral