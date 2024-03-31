import { ReactNode } from "react"
import { buttonStyle } from "./style"
import arrowSvg from '../../../public/arrow.svg'

type ButtonT = {
  width: string,
  arrow?: boolean
  children: ReactNode | string
  disabled?: boolean
  footer?: boolean
  onClick?: () => void
}

function Button({ width, children, arrow, disabled, footer,onClick }: ButtonT) {
  return (
    <button onClick={onClick} style={buttonStyle(width, arrow, disabled, footer)}>
      {children}
      {
        arrow && <img src={arrowSvg} />
      }
    </button>
  )
}

export default Button