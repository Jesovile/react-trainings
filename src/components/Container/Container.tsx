import React, { useState } from "react";
import "./styles/Container.css";
import ContainedChild from "./ContainedChild/ContainedChild";

const Container: React.FC = () => {
    const [isBlocked, setBlocked] = useState<boolean>(false);

    return (
        <div className="Container">
            <h2>Container</h2>
            <ContainedChild isDisable={isBlocked}/>
            <button onClick={() => setBlocked(!isBlocked)}>
                {isBlocked ? "Unlock" : "Lock"}
            </button>
        </div>
    );
}

export default Container;
