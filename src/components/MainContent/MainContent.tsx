import React from "react";
import "./styles/MainContent.css";

const MainContent: React.FC = (props) => {
    return (
        <div className="MainContent">
            {props.children}
        </div>
    );
};

export default MainContent;
