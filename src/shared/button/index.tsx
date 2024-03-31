import { ReactNode } from "react"
import { buttonStyle } from "./style"
import arrowSvg from '../../../public/arrow.svg'

type ButtonT = {
  width: string,
  arrow?: boolean
  children: ReactNode | string
  disabled?: boolean
  footer?: boolean
}

function Button({ width, children, arrow, disabled,footer }: ButtonT) {
  return (
    <button style={buttonStyle(width, arrow, disabled,footer)}>
      {children}
      {
        arrow && <img src={arrowSvg} />
      }
    </button>
  )
}

export default Button