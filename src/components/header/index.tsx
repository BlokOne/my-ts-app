import Button from "../../shared/button";
import { HeaderStyle } from "./style";
import Navigation from "./ui/navigation";

export default function Header() {
  return (
    <header
      style={HeaderStyle}
    >
      <img src={`public/logo.svg`} />
      <Navigation  />
      <Button width="175px">
        Join
      </Button>
    </header>
  )
}
