import { CSSProperties } from "react"

export const footerStyle: CSSProperties = {
  maxWidth: "1140px",
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: "142px"
}

export const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  marginBottom: '15px',
  justifyContent: 'center'
}

export const itemStyle = (isMobile: any): CSSProperties => ({
  maxWidth: isMobile ? '175px' : "266px",
  maxHeight: '357px',
  color: '#fff',
  padding: isMobile ? '84px 20px 48px' : '87px 38px 48px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: "2px solid #1C191D",
  borderRadius: '25px',
  marginBottom: '15px'
})

export const itemTextStyle: CSSProperties = {
  fontWeight: 'bold',
  fontFamily: "Inter",
  marginBottom: "43px",
  marginTop: '41px',
  fontSize: '20px'
}