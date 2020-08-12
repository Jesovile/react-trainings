import React from "react";
import "./styles/Wrapper.css";

interface WrapperProps {
    isActive: boolean;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
    const {isActive, children} = props;
    return (
        <div className={`Wrapper ${isActive ? "Wrapper--active" : undefined}`}>
            {children}
        </div>
    );
};

export default Wrapper;
