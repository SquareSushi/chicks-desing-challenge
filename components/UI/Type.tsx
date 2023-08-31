import { Feather, Arrow } from '../svgs';
import classes from './Type.module.css';


function TypeBar () {
    return (
        <div className={classes.type}>
            <div className={classes.mainContainer}>
                <Feather className={classes.Feather}/>
                <div className={classes.secondContainer}>
                    <a className={classes.top}>Item type</a>
                    <a>All</a>
                </div>
            </div>
            <div>
                <Arrow className={classes.arrow} />
            </div>
        </div>
    )
}

export default TypeBar;