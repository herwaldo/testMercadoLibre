import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import searchImg from "../../assets/search.svg"
import '../../App.css';

export const Navbar = () => {
  const searchRef = useRef();
  const navigate = useNavigate();

  const handleSearchClick = () => {
    
    navigate(`/items?search=${searchRef.current.value}`);
  }
  const handleLogoClick = () =>{
    navigate ( `/`);
  }

  return (
    <header className="Navbar">
        <img src="%PUBLIC_URL%/faviconMeli.png" className="Navbar--img" alt="Logo" onClick={handleLogoClick}/>
        <input id="search" name="search" ref={searchRef} placeholder="Buscar productos" className="Navbar--search--input" onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSearchClick()
                        }
                    }}/>
        <button className="Navbar--search--button" onClick={handleSearchClick}><img src={searchImg} alt="Search Button"/></button>
    </header>
  )
}