import React from "react";
import "./Member-SiderBar";
import { Link } from "react-router-dom";

function MemberSidebar() {
    return (
        <>
            <div className="member-sidebar">
                <h1>會員中心</h1>

                <ul className="list-unstyled">
                    <li>
                        <Link to="/memberEdit">
                            個人資料修改
                        </Link>
                    </li>
                    <li>
                        <span>購買紀錄</span>
                    </li>
                    <li>
                        <span>購買紀錄</span>
                    </li>
                    <li>
                        <span>購買紀錄</span>
                    </li>
                    <li>
                        <span>購買紀錄</span>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default MemberSidebar;