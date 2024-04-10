import imgReferral from '../../../public/9/icons.svg'
import imgReferral2 from '../../../public/9/iconsMob.svg'

import { useMediaQuery } from '../../media/useMedia'

function Referral() {
  const isMobile = useMediaQuery()
  return (
    <>
      {
        !isMobile ? <div style={{ display: 'flex', flexDirection: 'column', gap: '106px', alignItems: 'center', marginBottom: '254px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '60px', color: 'white' }}>
            Referral program
          </p>
          <img src={imgReferral} />
        </div> :
          <div style={{ display: 'flex', flexDirection: 'column', gap: '106px', alignItems: 'center', justifyContent: 'center', marginBottom: '120px' }}>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '60px', color: 'white' }}>
              Referral program
            </p>
            <img src={imgReferral2} />
          </div>
      }
    </>

  )
}

export default Referral