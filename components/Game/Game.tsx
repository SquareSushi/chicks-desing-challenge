import SearchBar from '../UI/SearchBar';
import SelectGame from '../UI/SelectGame';
import classes from './Game.module.css';

function Game () {
    return (
        <div>
            <h1 className={classes.title}>Condimentum consectetur </h1>
            <div className={classes.filterOptions}>
                <SelectGame />
                <SearchBar />
            </div>
            
        </div>
    )
}

export default Game;