import React, { useState } from "react";
import "./styles/UserInputForm.css";
import { connect } from "react-redux";
import { UserActionTypes, UserAction } from "../../../../redux/substores/User/userActions";

interface UserInputFormProps {
    updateUser: (user) => void;
}

const UserInputForm: React.FC<UserInputFormProps> = (props) => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    return (
        <div className="UserInputForm">
            <h3>Ввод данных о пользователе</h3>
            <div>
                <span className="UserInputForm_label">Имя:</span>
                <input type="text" className="UserInputForm_input" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <span className="UserInputForm_label">Возраст:</span>
                <input type="text" className="UserInputForm_input" onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div>
                <span className="UserInputForm_label">Статус:</span>
                <input type="text" className="UserInputForm_input" onChange={(e) => setStatus(e.target.value)}/>
            </div>
            <div>
                <input
                    type="button"
                    value="Push"
                    onClick={(e) => props.updateUser({name, age, status})}
                />
            </div>
        </div>
    );
};

export default connect(
    null, // mapStateToProps
    (dispatch) => {
        return {
            updateUser: (user) => dispatch(new UserAction(UserActionTypes.UPDATE_USER, user))
        }
    } // mapDispatchToProps
)(UserInputForm);
