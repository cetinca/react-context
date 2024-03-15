import React from "react"
import Button from "./Button"
import { MenuContext } from "./Menu"




export default function MenuButton({ children }) {
    const value = React.useContext(MenuContext)
    return (
        // aria's are for screen readers
        <Button
            onClick={value.toggleMenu}
            aria-expanded={value.open}
            aria-haspopup="true"
            aria-controls="menu">
            {children}
        </Button>
    )
}