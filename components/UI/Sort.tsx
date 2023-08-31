import { Filter, Arrow } from '../svgs';
import classes from './Sort.module.css';


function Sort () {
    return (
        <div className={classes.Sort}>
            <div className={classes.mainContainer}>
                <Filter className={classes.Filter}/>
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

export default Sort;