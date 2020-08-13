import React from "react";
import "./styles/UserReview.css";
import { connect } from "react-redux";
import { AppStore } from "../../../../redux/types";

interface UserReviewProps {
    user: any; // todo fix any
}

const UserReview: React.FC<UserReviewProps> = (props) => {
    const {user} = props;
    return (
        <div className="UserReview">
            <h3>Текущий пользователь</h3>
            <div>
                <span className="UserReview_label">Имя:</span>
                <p className="UserReview_info">{user?.name || "-"}</p>
            </div>
            <div>
                <span className="UserReview_label">Возраст:</span>
                <p className="UserReview_info">{user?.age || "-"}</p>
            </div>
            <div>
                <span className="UserReview_label">Статус:</span>
                <p className="UserReview_info">{user?.status || "-"}</p>
            </div>
        </div>
    );
};

export default connect(
    (store: AppStore) => {return {user: store.user}} //mapStateToProps
)(UserReview);