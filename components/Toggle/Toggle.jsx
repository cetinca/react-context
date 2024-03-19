import React from "react"

const ToggleContext = React.createContext()

export default function Toggle({ children, onToggle }) {
    const [on, setOn] = React.useState(false)
    // Ref's are updating objects without rendering the components.
    const firstRender = React.useRef(true)
    

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    React.useEffect(() => {
        // To spot running the function on first render we check if it's the first render.
        if (firstRender.current) {
            firstRender.current = false
        } else {
            onToggle()
        }
    }, [on])

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }