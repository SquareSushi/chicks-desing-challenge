import DUMMY_DATA from "@/data/DUMMY_DATA"
import classes from './GameItem.module.css';
import { Fragment } from "react";

const GameItem = () => {
    return (
        <Fragment>
            {DUMMY_DATA.map((item) => (
                <div key={item.id} className={classes.gameItem}>

                    <div className={classes.head}>
                        <span className={classes.stock}>In stock </span>
                    </div>

                    <div className={classes.gameImg}>
                        <img src={item.imgURL} alt={item.name} />
                    </div>

                    <div className={classes.gameRow}>
                        <span className={classes.gameName}>{item.name}</span>
                        <img className={classes.logo} src={item.logo} alt={item.name} />
                    </div>

                    <div className={classes.price}>
                        <span className={classes.gamePrice}>{item.price}</span>
                    </div>

                    <div className={classes.description}>
                        <p className={classes.gameDescription}>{item.description}</p>
                    </div>

                    <div>
                        <button>Buy</button>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default GameItem
