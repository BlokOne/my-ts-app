import { CSSProperties } from 'react'
import backgroundImage from '../../../public/mac.svg'

export const container: CSSProperties = {
  width: '1140px',
  paddingBottom: '304px',
  height: '643px',
  position: 'relative',
}

export const background: CSSProperties = {
  position: 'absolute',
  height: 'inherit',
  width: '100%',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}

export const videoStyle: CSSProperties = {
  padding: '34px 143px 78px 143px',
  zIndex: 3,
  display: "flex",
  height: "calc(100% - 110px)"
}

export const iframeStyle: CSSProperties = {
  position: 'relative',
  zIndex: 10,
  width: '100%',
  height: '100%',
};