import React from "react";
import "./styles/AgentCard.css";

interface AgentCardProps {
    agentName: string;
    agentAge: string;
    agentStatus: string;
}

const AgentCard: React.FC<AgentCardProps> = (props) => {
    const {agentName, agentAge, agentStatus} = props;
    return (
        <div className="AgentCard">
            <h4>{agentName}</h4>
            <p>{`Age: ${agentAge}`}</p>
            <p>{`Status: ${agentStatus}`}</p>
        </div>
    );
};

export default AgentCard;