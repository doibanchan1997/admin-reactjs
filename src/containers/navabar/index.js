import React, {useState, useEffect}  from 'react';
const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(true);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
        document.body.classList.toggle("sidebar-expand");
      },[isOpen])

      useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if(localTheme ==='light'){
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        }else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
      },[theme])
    const collapseSidebar = ()=> {
        setIsOpen(!isOpen)
        console.log(isOpen);
    }
    const switchTheme = () => {
        console.log(theme);
        if(theme ==='light'){
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
        else {
            localStorage.setItem('theme', 'light'); 
            setTheme('light');
        }
    }
    return(
    <div className="navbar">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link">
            <i className="fas fa-bars" onClick={collapseSidebar} />
            </a>
        </li>
        <li className="nav-item">
            <img src="./assets/img/AT-pro-black.png" alt="ATPro logo" className="logo logo-light" />
            <img src="./assets/img/AT-pro-white.png" alt="ATPro logo" className="logo logo-dark" />
        </li>
        </ul>
        <form className="navbar-search">
        <input type="text" name="search" className="navbar-search-input" placeholder="what you looking for.." />
        <i className="fas fa-search" />
        </form>
        <ul className="navbar-nav nav-right">
        <li className="nav-item mode">
            <a className="nav-link" href="#" onClick={switchTheme}>
            <i className="fas fa-moon dark-icon" />
            <i className="fas fa-sun light-icon" />
            </a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link">
            <i className="fas fa-bell dropdown-toggle" data-toggle="notification-menu" />
            <span className="navbar-badge">12</span>
            </a>
            <ul className="dropdown-menu notification-menu" id="notification-menu">
            <div className="dropdown-menu-header">
                <span>
                Notification
                </span>
            </div>
            <div className="dropdown-menu-content overlay-scrollbar">
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a> 
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-gift" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br />
                    <span>15/10/2020</span>
                    </span>
                </a>
                </li>
            </div>
            <div className="dropdown-menu-footer">
                <span>
                View all notification
                </span>
            </div>
            </ul>
        </li>
        <li className="nav-item">
            <div className="avt dropdown">
            <img src="./assets/img/hao.jpg" alt="user image" className="dropdown-toggle" data-toggle="user-menu" />
            <ul id="user-menu" className="dropdown-menu">
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-user-tie" />
                    </div>
                    <span>Profile</span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-cog" />
                    </div>
                    <span>Profile</span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-user-tie" />
                    </div>
                    <span>Profile</span>
                </a>
                </li>
                <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                    <div>
                    <i className="fa fa-user-tie" />
                    </div>
                    <span>Profile</span>
                </a>
                </li>
            </ul>
            </div>
        </li>
        </ul>
    </div>
    )
}
export default Navbar;