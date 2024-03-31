import { slide as Menu } from "react-burger-menu";
import { linkStyleMobile } from "./style";
import Button from "../../../shared/button";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SideBar(props: any) {
  const [open, setOpen] = useState<boolean>(false)

  const links = [
    {
      text: 'Products',
      href: '#products'
    },
    {
      text: 'Docs',
      href: '#docs'
    },
    {
      text: 'T-Staking',
      href: '#t-Staking'
    }
  ]

  return (
    <Menu onOpen={() => setOpen(true)} onClose={() => setOpen(false)} isOpen={open} {...props}>
      {links.map(item =>
        <a key={item.text} onClick={() => setOpen(false)} style={linkStyleMobile} href={item.href} >
          {item.text}
        </a>
      )}
      <Button width="230px">
        Join
      </Button>

    </Menu>
  );
}
