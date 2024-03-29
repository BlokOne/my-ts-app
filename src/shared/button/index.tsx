import { ReactNode } from "react"
import { buttonStyle } from "./style"

type ButtonT = {
  width: string,
  arrow?: boolean
  children: ReactNode | string
  disabled?: boolean
}

function Button({ width, children, arrow, disabled }: ButtonT) {
  return (
    <button style={buttonStyle(width, arrow, disabled)}>
      {children}
      {
        arrow && <img src="public/arrow.svg" />
      }
    </button>
  )
}

export default Button