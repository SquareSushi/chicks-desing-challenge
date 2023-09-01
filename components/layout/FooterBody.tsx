import { Discord, Facebook, Instagram, Logo, Stars, Twitter } from '../svgs'
import classes from './FooterBody.module.css'

function FooterBody() {
    return (
        <div className={classes.footerBody}>
            <div className={classes.mainContainer}>
                <div className={classes.socialRow}>
                    <Facebook className={classes.facebook}/>
                    <Instagram className={classes.instagram}/>
                    <Twitter className={classes.twitter}/>
                    <Discord className={classes.discord}/>
                </div>
                <div className={classes.infoRow}>
                    <div className={classes.logoCol}>
                        <Logo className={classes.logo}/>
                        <div><a>support@chicksgold.com</a></div>
                    </div>
                    <div className={classes.infoCol}>
                        <div><h3>Chicks Gold</h3></div>
                        <a>Games</a>
                        <a>About Us</a>
                        <a>Blog</a>
                        <a>Sitemap</a>
                    </div>
                    <div className={classes.infoCol}>
                        <div><h3>Support</h3></div>
                        <a>Contact Us</a>
                        <a>FAQ</a>

                    </div>
                    <div className={classes.infoCol}>
                        <div><h3>Legal</h3></div>
                        <a>Privacy Policy</a>
                        <a>Terms of Service</a>
                        <a>Copyright Policy</a>
                    </div>
                    <div className={classes.rateCol}>
                        <div><a>Trustpilor Reviews</a></div>
                        <Stars className={classes.stars}/>
                    </div>
                </div>
                <div className={classes.copyright}>
                    <p>© 2017 - 2020 Chicksgold.com. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default FooterBody