import React, { useState } from "react";
import "./styles/UserInputForm.css";
import { connect } from "react-redux";
import { UserActionTypes, UserAction } from "../../../../redux/substores/User/userActions";

/*В интерфейсе пропсов описывается функция, которая придет из стора и будет содержать логику диспатча экшна
Эта функция - способ пробросить в редакс экшн и изменить стор*/
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

/*connect - стандартная функция из react-redux, которая подключает компонент к стору
После этого компонент получает возможность получать в свои пропсы данные из редакс-стора,
а также использовать функцию dispatch(), которая выстреливает в стор объект Экшна из своего параметра*/
export default connect(
    // mapStateToProps не используется (компонент не принимает данные из стора, только отправляет)
    null,
    // mapDispatchToProps - функция, получающая в параметр редаксовскую функцию dispatch для проброски в стор объекта Экшна
    // возвращает объект маппинга <имя_пропса>: <лямбда_вызывающая_dispatch>
    (dispatch) => {
        return {      
            // {type: UserActionTypes.UPDATE_USER, payload: newUser} - объект нового экшна      
            updateUser: (newUser) => dispatch({type: UserActionTypes.UPDATE_USER, payload: newUser})
        }
    }
)(UserInputForm);
