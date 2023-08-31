import { Arrow, Sword } from "../svgs";
import classes from "./SelectGame.module.css";

function SelectGame () {
    return (
        <button className={classes.selectGame}>
            <div className={classes.mainContainer}>
                <Sword className={classes.sword}/>
                <span>Final Fantasy XIV</span>
            </div>
            <div>
            <Arrow className={classes.arrow}/>
            </div>
        </button>
    )
}

export default SelectGame;