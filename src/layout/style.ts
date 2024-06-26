import { CSSProperties } from 'react';
import backgroundImage from '../../public/bgDesktop.jpg';

export const backgroundStyle: CSSProperties = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundAttachment: 'fixed',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  overflow: 'auto',
  minHeight: '100vh',
  height: 'auto',
  position: 'relative'
};

export const mainStyle = (isMobile: any): CSSProperties => ({
  scrollBehavior: "smooth",
  // width: isMobile ? "400px" : '100%',
  width: isMobile ? "100%" : '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})