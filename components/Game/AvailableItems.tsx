import GameItem from "./GameItem/GameItem";
import classes from './AvailableItems.module.css';
import DUMMY_DATA from "@/data/DUMMY_DATA";
import Card from "../UI/Card";

const AvailableItems = () => {

   /*  const itemList = DUMMY_DATA.map((item) => (
        <GameItem
            key={item.id}
            title={item.name}
            price={item.price}
            logo={item.logo}
            imgUrl={item.imgURL}
        /> 
    )); */

    return (
        <Card>
            {/* <ul className={classes.list}>{itemList}</ul> */}
        </Card>
    )
};

export default AvailableItems;