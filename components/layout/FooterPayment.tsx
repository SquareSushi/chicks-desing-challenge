import { Amex, Mastercard, Skrill, Visa , Crypto} from '../svgs';
import classes from './FooterPayment.module.css';   

function FooterPayment () {
    return(
        <div className={classes.footerPayment}>
            <div className={classes.items}>
                <Visa className={classes.visa}/>
                <Mastercard className={classes.master}/>
                <Amex  className={classes.ame} />
                <Skrill className={classes.skri} />
                <Crypto className={classes.cryp} />
                <p> and 50+ more</p>
            </div>
        </div>
    )
}

export default FooterPayment;