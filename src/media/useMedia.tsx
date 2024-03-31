import { useContext } from 'react';
import MediaQueryContext from './';

export const useMediaQuery = () => useContext(MediaQueryContext);