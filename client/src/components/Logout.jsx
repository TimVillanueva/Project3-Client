import { DataContext } from '../DataContext'
import { useEffect, useContext } from 'react'
import Logo from "../images/OutDoorsyLogoFinal2.svg"

const Logout = () =>{
    const {setUser, setAuth} = useContext(DataContext)

    useEffect(() => {
        setUser(null)
        setAuth(false)
        localStorage.clear();
    })

    return(
    <div>
    <h1 style={{marginTop:"20px"}}>See You Soon! </h1>
    
    <img src={Logo} style={{scale:".3", position: "relative", top:"-450px"}}/>

    
    </div>)
}

export default Logout