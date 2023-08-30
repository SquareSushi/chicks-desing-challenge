import { Arrow, Hamburguer, Logo, User } from '../svgs';
import Button from '../UI/Button';
import classes from './MainNavigation.module.css';


function MainNavigation () {
    return(
        <nav className={classes.navbar}>
            <div className={classes.burguer_container}>
                <Hamburguer className={classes.burguer}/>
            </div>
            <div className={classes.logo_container}>
                <Logo className={classes.logo} />
            </div>
            <div className={classes.links_container}>
                <ul className={classes.mainlinks}>
                    <li>
                        <a className={classes.links_text}>CURRENCY </a>
                        <Arrow className={classes.arrow} />
                    </li>
                    <li>
                        <a>ITEMS</a>
                        <Arrow className={classes.arrow} />
                    </li>
                    <li>
                        <a>ACCOUNTS</a>
                        <Arrow className={classes.arrow} />
                    </li>
                    <li>
                        <a>SERVICES</a>
                        <Arrow className={classes.arrow} />
                    </li>                    
                    <li>
                        <a>SWAP</a>
                        <Arrow className={classes.arrow} />
                    </li>
                    <li>
                        <a>SELL</a>
                        <Arrow className={classes.arrow} />
                    </li>
                </ul> 
                <ul className={classes.sidelist}> 
                    <li>
                        <a>USD</a>
                    </li>
                    <li>
                        <a>CART (5)</a>
                    </li>           
                </ul>
                <Button className={classes.signinButton}>SIGN IN <User className={classes.User}/> </Button>
            </div>
        </nav>
    )
}

export default MainNavigation;