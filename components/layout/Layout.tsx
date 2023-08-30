import MainNavigation from "./MainNavigation";

function Layout (props: any) {
    return (
        <div>
            <MainNavigation />
            <main>{props.children}</main>
            {/* add footer here */}
        </div>
    )
}

export default Layout;
