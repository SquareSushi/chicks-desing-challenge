import { Itembag, Arrow } from '../svgs';
import classes from './Price.module.css';


function PriceBar () {
    return (
        <div className={classes.price}>
            <div className={classes.mainContainer}>
                <Itembag className={classes.bag}/>
                <div className={classes.secondContainer}>
                    <a className={classes.top}>Price</a>
                    <a>All</a>
                </div>
            </div>
            <div>
                <Arrow className={classes.arrow} />
            </div>
        </div>
    )
}

export default PriceBar;