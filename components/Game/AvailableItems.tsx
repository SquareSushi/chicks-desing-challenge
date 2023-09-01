import GameItem from "./GameItem/GameItem";
import classes from './AvailableItems.module.css';

const AvailableItems = () => {

    const itemList = <li className={classes.container}><GameItem /></li>

    return (
        <ul className={classes.list}>{itemList}</ul>
    )
};

export default AvailableItems;