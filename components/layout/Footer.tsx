import classes from './Footer.module.css';
import FooterPayment from './FooterPayment';
import FooterBody from './FooterBody';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <FooterPayment />
            <FooterBody/>
        </div>
    )
};

export default Footer;
