import react, { Children } from "react";
import './styles/FuncChildren.css';

interface FuncChildrenProps {
    children: (isDisable: boolean) => JSX.Element;
}

const FuncChildren = (props) => {
    const {children} = props;
    const isDisabled = true;
    return children(isDisabled);        
}

export default FuncChildren;