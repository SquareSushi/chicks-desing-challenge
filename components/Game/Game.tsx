import PriceBar from '../UI/Price';
import SearchBar from '../UI/SearchBar';
import SelectGame from '../UI/SelectGame';
import AvailableItems from './AvailableItems';
import classes from './Game.module.css';
import Type from '../UI/Type';

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
                <div>
                    <a >Showing 20 - from 125</a>
                </div>
                <div className={classes.cardContainer}>
                    {/* <AvailableItems /> */}
                </div>
            </div>
        </div>
    )
}

export default Game;