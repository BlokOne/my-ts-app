import { CSSProperties } from 'react'
import backgroundImage from '../../../public/mac.svg'

export const container = (isMobile: any): CSSProperties => ({
  width: isMobile ? '100%' : '1140px',
  maxWidth: '440px',
  paddingBottom: isMobile ? '85px' : '304px',
  height: isMobile ? 'calc(315px + 23px)' : '643px',
  position: 'relative',
})

export const background: CSSProperties = {
  position: 'absolute',
  height: 'inherit',
  width: '100%',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}

export const videoStyle = (isMobile: any): CSSProperties => ({
  padding: isMobile ? '58px 54px 12px' : '34px 143px 78px 143px',
  zIndex: 3,
  display: "flex",
  height: "calc(100% - 132px)"
})

export const iframeStyle = (): CSSProperties => ({
  position: 'relative',
  zIndex: 10,
  width: '100%',
  height: '100%',
})