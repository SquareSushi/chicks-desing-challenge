import PriceBar from '../UI/Price';
import SearchBar from '../UI/SearchBar';
import SelectGame from '../UI/SelectGame';
import AvailableItems from './AvailableItems';
import classes from './Game.module.css';
import Type from '../UI/Type';
import Sort from '../UI/Sort';
import { Arrow } from '../svgs';
import Image from 'next/image';

function Game () {
    return (
        <div>
            <h1 className={classes.title}>Condimentum consectetur </h1>
            <div className={classes.filterOptions}>
                <div className={classes.SelectGame}>
                    <SelectGame />
                </div>
                <div className={classes.SearchBar}>
                    <SearchBar />
                </div>
                <div className={classes.filters}>
                    <div className={classes.price}>
                        <PriceBar />
                    </div>
                    <div className={classes.type}>
                        <Type />
                    </div>
                </div>
            </div>

            <div className={classes.gamesContainer}>
                <div className={classes.containerHead}>
                    <p >Showing 20 - from 125</p>
                    <div className={classes.sort}>
                        <Sort/>
                    </div>
                </div>
                <div className={classes.cardContainer}>
                    <AvailableItems /> 
                </div>
                <div className={classes.containerFooter}>
                    <button className={classes.button}><Arrow className={classes.arrowLeft}/></button>
                    <button className={classes.buttonM}>1</button>
                    <button className={classes.buttonM}>2</button>
                    <button className={classes.buttonM}>3</button>
                    <button className={classes.buttonM}>4</button>
                    <button className={classes.buttonM}>...</button>
                    <button className={classes.buttonM}>11</button>
                    <button className={classes.button}><Arrow className={classes.arrowRight}/></button>
                </div>
            </div>
        </div>
    )
}

export default Game;