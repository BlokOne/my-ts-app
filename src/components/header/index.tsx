import Button from "../../shared/button";
import { HeaderStyle } from "./style";
import Navigation from "./ui/navigation";
import logo from '../../../public/logo.svg'

export default function Header() {
  return (
    <header
      style={HeaderStyle}
    >
      <img src={logo} />
      <Navigation />
      <Button width="175px">
        Join
      </Button>
    </header>
  )
}
