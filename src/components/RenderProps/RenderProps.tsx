import React from "react";
import "./styles/RenderProps.css";

interface RenderPropsProps {
    agentCard: JSX.Element;
}

const RenderProps: React.FC<RenderPropsProps> = (props) => {
    const {agentCard} = props;
    return (
        <div className="RenderProps">
            {agentCard}
            <p>Привет от Рендер-пропса</p>
        </div>
    );
};

export default RenderProps;
