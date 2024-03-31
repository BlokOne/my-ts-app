import { createContext, useState, useEffect, ReactNode } from 'react';

const MediaQueryContext = createContext({});

export const MediaQueryProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1200px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1200px)');
    const listener = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <MediaQueryContext.Provider value={isMobile}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export default MediaQueryContext;
