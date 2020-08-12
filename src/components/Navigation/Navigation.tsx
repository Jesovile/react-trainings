import React from "react";
import "./styles/Navigation.css";
import { NavigationTabs } from "../../types";

interface NavigationProps {
    currentTab: NavigationTabs;
    onItemClick: (newTab: NavigationTabs) => void;
}

const Navigation: React.FC<NavigationProps> = (props) => {
    const {currentTab, onItemClick} = props;
    
    return (
        <div className="Navigation">
            <p onClick={() => onItemClick(NavigationTabs.LIST)}>Список</p>
            <p onClick={() => onItemClick(NavigationTabs.CONTAINER)}>Container</p>
            <p onClick={() => onItemClick(NavigationTabs.WRAPPER)}>Wrapper</p>
            <p onClick={() => onItemClick(NavigationTabs.RENDER_PROPS)}>Render props</p>
            <p onClick={() => onItemClick(NavigationTabs.FUNC_CHILDREN)}>Children func</p>
            <p onClick={() => onItemClick(NavigationTabs.HOC)}>HOC</p>
        </div>
    );
}

export default Navigation;
