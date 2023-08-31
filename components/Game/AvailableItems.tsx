import GameItem from "./GameItem/GameItem";
import classes from './AvailableItems.module.css';
import Card from "../UI/Card";

const AvailableItems = () => {

    const itemList = <li><GameItem /></li>

    return (
        <Card>
            <ul className={classes.list}>{itemList}</ul>
        </Card>
    )
};

export default AvailableItems;