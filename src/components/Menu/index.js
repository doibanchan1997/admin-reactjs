import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
let menus = [
    {
        lable: "Doashboard",
        to:"/",
        exact: true,
        icon: "fas fa-tachometer-alt"
    },
    {
        lable: "Product",
        to:"/product",
        exact: false,
        icon: "fas fa-box-open"
    },
    {
        lable: "Doashboard",
        to:"/home2",
        exact: false,
        icon: "fas fa-tasks"
    },
    {
        lable: "Doashboard",
        to:"/home3",
        exact: false,
        icon: "fas fa-spinner"
    },
    {
        lable: "Doashboard",
        to:"/home4",
        exact: false,
        icon: "fas fa-bug"
    },
    {
        lable: "Doashboard",
        to:"/home5",
        exact: false,
        icon: "fas fa-chart-line"
    },
    {
        lable: "Doashboard",
        to:"/home6",
        exact: true,
        icon: "fas fa-book-open"
    },
    {
        lable: "Doashboard",
        to:"/home7",
        exact: false,
        icon: "fas fa-adjust"
    },
    {
        lable: "Doashboard",
        to:"/home8",
        exact: false,
        icon: "fab fa-algolia"
    },
    {
        lable: "Doashboard",
        to:"/home9",
        exact: false,
        icon: "fas fa-audio-description"
    },
]

// custom Menu Link
let MenuLink = ({lable, to, activeOnlyWhenExact, icon}) =>{
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });
    return(
        <li className="sidebar-nav-item">
          <Link to={to} className={`sidebar-nav-link ${match?"active":""}`}>
            <div>
              <i className={icon} />
            </div>
            <span>{lable}</span>
          </Link>
        </li>
    )
}

// show Menu
let showMenu = (menu) =>{
    let result = null;
    if(menu.length>0){
        result = menu.map((item, index)=>{
            return(
                <MenuLink
                    key = {index}
                    activeOnlyWhenExact = {item.exact}
                    to = {item.to}
                    lable = {item.lable}
                    icon = {item.icon}
                />
            )
        })
    }
    return result;
}
const Menu = () =>{
    return (
        <ul className="sidebar-nav">
        {
            showMenu(menus)
        }
        </ul>
    
    )
}
export default Menu;