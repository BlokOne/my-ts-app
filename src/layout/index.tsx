import { ReactNode } from "react";
import { backgroundStyle, mainStyle } from "./style";
import Header from "../components/header";
import Footer from "../components/footer";
import { useMediaQuery } from "../media/useMedia";

function Layout({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery()
  return (
    <div className="main" style={backgroundStyle}>
      <Header />
      <main style={mainStyle(isMobile)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
