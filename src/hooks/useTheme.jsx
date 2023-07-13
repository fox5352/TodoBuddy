import { useState, useEffect } from 'react'

export const useTheme = () => {
    const [ isLight, setIsLight] = useState(Boolean(JSON.parse(localStorage.getItem('Theme'))) | "true")

    document.documentElement.setAttribute('data-theme', isLight? "light" : "dark")
    
    useEffect(()=>{
        localStorage.setItem('Theme', JSON.stringify(isLight? true : false))
    },[isLight])

    const toggleTheme = () => {
        setIsLight(!isLight)
    }

    return { toggleTheme }

}
