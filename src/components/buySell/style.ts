import { CSSProperties } from "react";
import backgroundImage from '../../../public/7/Rectangle314.svg'

export const wrapper = (): CSSProperties => ({
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '163px',
  paddingBottom: '197px'
})

export const wrapperInfo = (): CSSProperties => ({
  display: 'flex',
  flexDirection: 'column'
})


export const titleStyle = (isMobile: any): CSSProperties => ({
  fontWeight: 'bold',
  fontSize: isMobile ? '59px' : '60px',
  height: '73px',
  marginBottom: "15px",
  marginLeft: isMobile ? '12px' : '0'
})

export const subTitleStyle = (isMobile: any): CSSProperties => ({
  fontWeight: 'bold',
  fontSize: '24px',
  marginBottom: "39px",
  marginLeft: isMobile ? '12px' : '0'
})

export const textStyle = (isMobile: any): CSSProperties => ({
  fontSize: '16px',
  marginBottom: "32px",
  fontWeight: 300,
  marginLeft: isMobile ? '12px' : '0'
})

export const wrapperIconsStyle = (isMobile: any): CSSProperties => ({
  display: 'flex',
  marginBottom: '80px',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: "100%",

})

export const wrapperButtonStyle = (): CSSProperties => ({
  backgroundImage: `url(${backgroundImage})`,
  paddingTop: "49px",
  width: '423px',
  paddingBottom: '49px',
  borderRadius: "25px",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '18px',
  border: '1px solid linear-gradient(rgb(13, 246, 158), rgb(20, 19, 22))'
})


export const wrapperModile2 = (value: any): CSSProperties => ({
  color: 'white',
  backgroundImage: `url(${value})`,
  height: 'calc(1752px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  marginBottom: '80px',
  backgroundSize: '97% 100%',
  backgroundPosition: 'center',
  alignItems: 'flex-start',
  marginTop: '-497px'

})