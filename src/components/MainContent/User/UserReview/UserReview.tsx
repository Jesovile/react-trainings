import React from "react";
import "./styles/UserReview.css";
import { connect } from "react-redux";
import { AppStore } from "../../../../redux/appStore";

/*интерфейс пропсов описывает типы пропсов, которые придут из редакс-стора
Далее эти данные используются компонентом так же, как и любые другие пропсы*/
interface UserReviewProps {
    userFromRedux: any; // todo fix any
}

const UserReview: React.FC<UserReviewProps> = (props) => {
    const {userFromRedux} = props;    
    return (
        <div className="UserReview">
            <h3>Текущий пользователь</h3>
            <div>
                <span className="UserReview_label">Имя:</span>
                <p className="UserReview_info">{userFromRedux?.name || "-"}</p>
            </div>
            <div>
                <span className="UserReview_label">Возраст:</span>
                <p className="UserReview_info">{userFromRedux?.age || "-"}</p>
            </div>
            <div>
                <span className="UserReview_label">Статус:</span>
                <p className="UserReview_info">{userFromRedux?.status || "-"}</p>
            </div>
        </div>
    );
};

/*connect - стандартная функция из react-redux, которая подключает компонент к стору
После этого компонент получает возможность получать в свои пропсы данные из редакс-стора*/
export default connect(
    // mapStateToProps - первый параметр функции connect.
    // Функция, принимающая в параметр весь стор приложения, и возвращающая объект маппинга вида <имя_пропсы>: <переменная_в_объекте_стора>
    (store: AppStore) => {return {userFromRedux: store.user}}
)(UserReview);