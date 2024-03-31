import { CSSProperties } from "react";
import backgroundImage from '../../../public/7/Rectangle314.svg'

export const wrapper: CSSProperties = {
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '163px',
  paddingBottom: '197px'
}

export const wrapperInfo: CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
}


export const titleStyle: CSSProperties = {

  fontWeight: 'bold',
  fontSize: '60px',
  height: '73px',
  marginBottom: "15px"
}

export const subTitleStyle: CSSProperties = {
  fontWeight: 'bold',
  fontSize: '24px',
  marginBottom: "39px"
}

export const textStyle: CSSProperties = {
  fontSize: '16px',
  marginBottom: "32px"
}

export const wrapperIconsStyle: CSSProperties = {
  display: 'flex',
  marginBottom: '80px'
}

export const wrapperButtonStyle: CSSProperties = {
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
}