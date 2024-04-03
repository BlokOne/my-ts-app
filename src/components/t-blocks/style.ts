import { CSSProperties } from "react"

export const wrapper = (isMobile: any, mobile: string): CSSProperties => {
  return isMobile ? {
    padding: '434px 0px 104px 0px',
    display: 'flex',
    gap: '20px',
    background: `url(${mobile})`,
    flexDirection: 'column',
    backgroundSize: '100% auto',
    backgroundPosition: 'top', // Изображение будет прижато к верху
    backgroundRepeat: 'no-repeat' // Если не хотите, чтобы фон повторялся
  } :
    {
      padding: '132px 0px',
      display: 'grid',
      gap: '150px',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center'
    }

}

export const titleStyle: CSSProperties = {
  fontFamily: 'Inter',
  fontWeight: 700,
  fontSize: '30px',
  color: 'white',
  textAlign: "center",
  marginTop: '-35px',
}

export const imageStyle = (mobile: string): CSSProperties => ({
  height: '86vh',
  width: `calc(100vh * ${393 / 817})`, // Ширина вычисляется на основе соотношения сторон
  backgroundImage: `url(${mobile})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
})

export const textStyle: CSSProperties = {
  fontFamily: 'Inter',
  fontWeight: 300,
  fontSize: '16px',
  textAlign: "center",
  color: 'white'
}

export const wrapperLogoStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: "43px"

}

export const logoStyle: CSSProperties = {
  width: '243px',
  height: '206px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const textWrapper: CSSProperties = {
  marginBottom: '43px'
}

export const buttonsWrapper: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  alignItems: 'center'
}