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
  nextButtonRef?: any
}

function Button({ width, children, arrow, disabled, footer, onClick, nextButtonRef }: ButtonT) {
  return (
    <button ref={nextButtonRef} onClick={onClick} style={buttonStyle(width, arrow, disabled, footer)}>
      {children}
      {
        arrow && <img src={arrowSvg} />
      }
    </button>
  )
}

export default Button