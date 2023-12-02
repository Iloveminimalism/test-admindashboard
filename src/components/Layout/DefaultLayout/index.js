import SideBar from './Sidebar/SideBar';
import TopBar from './Topbar/Topbar';
import './layout.css';

function DefaultLayout({ children }) {
    return (
        <div className="app">
            <SideBar />
            <div className="content">
                <TopBar />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
