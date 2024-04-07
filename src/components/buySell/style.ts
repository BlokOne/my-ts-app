import { CSSProperties } from "react";
import { CONTAINER_WIDTH } from "../../shared/style";

export const wrapper = (): CSSProperties => ({
  width: CONTAINER_WIDTH,
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
  fontSize: isMobile ? '47px' : '60px',
  height: '73px',
  marginBottom: "15px",
  marginLeft: isMobile ? '0px' : '0'
})

export const subTitleStyle = (isMobile: any): CSSProperties => ({
  fontWeight: 'bold',
  fontSize: '24px',
  marginBottom: "39px",
  marginLeft: isMobile ? '0px' : '0'
})

export const textStyle = (isMobile: any): CSSProperties => ({
  fontSize: '16px',
  marginBottom: "32px",
  fontWeight: 300,
  marginLeft: isMobile ? '0px' : '0'
})

export const wrapperIconsStyle = (): CSSProperties => ({
  display: 'flex',
  marginBottom: '80px',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: "100%",

})

export const wrapperButtonStyle = (isMobile: any): CSSProperties => ({
  paddingTop: "49px",
  width: isMobile ? "352px" : '423px',
  paddingBottom: '49px',
  borderRadius: "25px",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '18px',
  border: '1px solid linear-gradient(rgb(13, 246, 158), rgb(20, 19, 22))'
})


export const wrapperModile2 = (value: any): CSSProperties => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  width: '352px',
  height: 'calc(1539px)',
  margin: '0 auto',
  marginBottom: '80px',
  marginTop: '-700px',
  color: 'white',
  backgroundImage: `url(${value})`,
  backgroundSize: '97% 100%',
  backgroundPosition: 'center',
})