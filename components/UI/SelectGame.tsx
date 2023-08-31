import { Arrow } from "../svgs";
import Button from "./Button";
import classes from "./SelectGame.module.css";

function SelectGame () {
    return (
        <Button className={classes.selectGame}>
            <img src="./public/assets/ffxivlogo.png"/>
            Final Fantasy 14
            <Arrow />
        </Button>
    )
}

export default SelectGame;