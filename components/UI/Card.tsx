import classes from './Card.module.css';

function Card (props: any) {
    return(
        <div className={classes.cardContainer}>
            {props.children}
        </div>
    )
}

export default Card;