import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css';

function Layout (props: any) {
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
            {/* add footer here */}
        </div>
    )
}

export default Layout;
