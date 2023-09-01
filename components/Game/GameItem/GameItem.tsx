import DUMMY_DATA from "@/data/DUMMY_DATA"
import classes from './GameItem.module.css';
import { Fragment } from "react";
import Cart from '../../svgs/Cart.svg'
import Image from "next/image";

const GameItem = () => {
    return (
        <Fragment>
            {DUMMY_DATA.map((item) => (
                <div key={item.id} className={classes.gameItem}>

                    <div className={classes.head}>
                        <div className={classes.special}>
                            {item.sale && ( <span className={classes.dot}></span> )} {null}
                            {item.sale && ( <span className={classes.sale}>ON SALE</span> )} {null}
                            <span className={classes.stock}>In stock </span>
                        </div>
                        <div className={classes.numberContainer}>
                            <input className={classes.number} type='number' value={1} />
                        </div>
                    </div>

                    <div className={classes.gameImg}>
                        <Image src={item.imgURL} alt={item.name} width={70} height={70}/>
                    </div>

                    <div className={classes.gameRow}>
                        <span className={classes.gameName}>{item.name}</span>
                        <Image src={item.logo} alt={item.name}  width={20} height={20}/> 
                    </div>
                        
    
                    <div className={classes.price}>
                        {item.price &&(<span className={classes.gamePrice}>{`$${item.price}`}</span>)} {null}
                        {item.discount && (<span className={classes.gameDiscount}>{`$${item.discount}`}</span>
                        )} {null} 
                    </div>

                    <div className={classes.description}>
                        <p className={classes.gameDescription}>{item.description}</p>
                    </div>

                    <div className={classes.buttonContainer}>
                        <button className={classes.detail}>Detail</button>
                        <button className={classes.buy}>Add  <Cart className={classes.cart}/> </button>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default GameItem
