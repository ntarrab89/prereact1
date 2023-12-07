import CartWidget from "./CartWidget"
import LinksContainer from "./LinksContainer"

const NavBar=()=>{
    return(<div className="flex flex-row bg-slate-600 text-white flex justify-between">

        <LinksContainer/>
        <CartWidget/>
        
        </div>
    )
}
export default NavBar