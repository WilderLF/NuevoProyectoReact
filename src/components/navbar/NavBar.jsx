import {Link} from 'react-router-dom'
import { CartWidget } from '../cartwidget/CartWidget'
import { useCartContext } from '../context/CartContext/CartContext'
import './navbar.css'
import logo from './navlogo.svg'


export const NavBar = () => {

    const {cart} = useCartContext()
    console.log(cart);

    cart.map(item => console.log(item.quantity))

    return (
        <>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/"><img className="logo-nav" src={logo} alt=""/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>  
                
                { cart.length === 0 ? 
                    <></>
                    :
                    // <Link to="/cart" className="cartWidget"><CartWidget/></Link>          
                    <CartWidget />
                }
                
                <div className="collapse navbar-collapse show m-auto flex-navbar" id="navbarBasic">
                    <div className="">
                        <ul className="flex-navbar navbar-nav me-auto mb-2 mb-xl-0">
                            
                                <Link to="/category/Pollo" className="nav-link nav-link-p" >Pollo</Link>
                            
                                <Link to="/category/Carne" className="nav-link nav-link-p">Carne</Link>
                            
                                <Link to="/category/Chuleta" className="nav-link nav-link-p" >Chuleta</Link>

                                <Link to="/category/Mixto" className="nav-link nav-link-p" >Mixto</Link>                        
                                
                                
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </nav>

        </>
    )
}
