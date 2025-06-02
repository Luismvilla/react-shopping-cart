import { useEffect, useState } from "react"
import { Filters } from "./Filters"

export function Header () {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY>50)
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll".handleScroll)
  },[setIsScrolled])

  return (
		<header className={isScrolled ? "scrolled" : ""}>
      <h1>Lista de productos</h1>
			<Filters />
    </header>
      
	)
}