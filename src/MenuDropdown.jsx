import React from "react"
import { MenuContext } from "./Menu"


export default function MenuDropdown({ children }) {
    const value = React.useContext(MenuContext)
    return value.open ? (
        <div className="menu-dropdown" id="menu" aria-hidden={!value.open}>
            {children}
        </div>
    ) : null
}
