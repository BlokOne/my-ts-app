import { CSSProperties } from 'react';
import backgroundImage from '../../public/bgDesktop.jpg';

export const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundAttachment: 'fixed',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  overflow: 'auto',
  minHeight: '100vh',
  height: 'auto'
};

export const mainStyle: CSSProperties = {
  width: '960px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}