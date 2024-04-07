import Button from "../../shared/button";
import { HeaderStyle } from "./style";
import Navigation from "./ui/navigation";
import logo from '../../../public/logo.svg'
import SideBar from "./ui/sideBar";
import { useMediaQuery } from "../../media/useMedia";

export default function Header() {
  const isMobile = useMediaQuery();

  return (
    <>
      {
        isMobile ?
          <>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <header style={{ paddingTop: "59px", marginBottom: "107px", paddingLeft: '35px', paddingRight: '35px' }}>
              <img src={logo} />
            </header>
          </>
          :
          <header
            style={HeaderStyle}
          >
            <img src={logo} />

            <Navigation />
            <Button onClick={() => {
              const botUrl = "tg://resolve?domain=t_projects_bot";
              window.location.href = botUrl;
            }} width="175px">
              Join
            </Button>

          </header>
      }
    </>
  )
}
