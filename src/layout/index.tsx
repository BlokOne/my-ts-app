import { ReactNode } from "react";
import { backgroundStyle, mainStyle } from "./style";
import Header from "../components/header";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={backgroundStyle}>
      <Header />
      <main style={mainStyle}>
        {children}
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
