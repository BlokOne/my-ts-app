import { CSSProperties } from "react";
import { CONTAINER_WIDTH } from "../../shared/style";

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
      display: 'grid',
      gap: '150px',
      gridTemplateColumns: 'calc(50% - 75px) calc(50% - 75px)',
      alignItems: 'center',
      width: CONTAINER_WIDTH,
      padding: '132px 0px',
      maxHeight: '800px'
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
  height: '80vh',
  width: `calc(100% - 0px)`,
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