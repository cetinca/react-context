import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

const MenuContext = React.createContext()

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(false)

    function toggleMenu() {
        setOpen(prev => !prev)
    }

    return (
        <MenuContext.Provider value={{open: open, toggleMenu: toggleMenu}}>
            <div className="menu" role="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }
