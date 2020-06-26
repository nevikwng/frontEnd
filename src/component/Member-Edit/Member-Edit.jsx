import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import "./Member-Edit";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import { currentUserSelect } from "../../redux/user/user-selector";


function MemberEdit({ currentUserSelect }) {




    const {
        memberAccount,
        memberName,
        memberNickname,
        memberImg,
        memberEmail,
        memberGender,
        memberPhoneNum,
        memberBirth,
        memberAddress
    } = currentUserSelect
    // console.log(currentUserSelect)



    return (
        <>
            <div className="edit">
                <h1>個人資料修改</h1>
                <h3>管理您的檔案以保護您的帳戶</h3>
                <div className="horizontally-line"></div>
                <p>使用者帳號:{memberAccount}</p>
                <form>
                    <div className="form-wrapper">
                        <div className="left-form">
                            <h1>Hi,{memberName}</h1>
                            <input maxLength="10" type="text" placeholder="請輸入姓名"
                            />
                            <input maxLength="10" type="text" placeholder="請輸入暱稱" />
                            <div></div>
                            <input maxLength="10" type="text" placeholder="請輸入生日" />
                            <input
                                maxLength="10"
                                type="text"
                                placeholder="請選擇性別"
                            />
                            <div></div>
                            <input
                                className="input-long"
                                maxLength="20"
                                type="text"
                                placeholder="請輸入手機號碼"
                            />
                            <div></div>
                            <input maxLength="10" type="text" placeholder="請輸入縣市" />
                            <input maxLength="10" type="text" placeholder="請輸入鄉鎮" />
                            <div></div>
                            <input
                                className="input-long"
                                maxLength="10"
                                type="text"
                                placeholder="請輸入地址"
                            />
                            <div></div>
                            <input
                                className="input-long"
                                maxLength="10"
                                type="text"
                                placeholder="請輸入電子郵件"
                            />
                        </div>

                        <div className="right-form">
                            <h5>修改密碼</h5>
                            <input
                                className="input-long"
                                maxLength="10"
                                type="text"
                                placeholder="請輸入密碼"
                            />
                            <div></div>
                            <input
                                className="input-long"
                                maxLength="10"
                                type="text"
                                placeholder="新密碼請設定6-12字元包含任意英數字"
                            />
                            <div></div>
                            <input
                                className="input-long"
                                maxLength="10"
                                type="text"
                                placeholder="請再輸入一次新密碼"
                            />
                            <div></div>
                            <button type="submit">儲存</button>

                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUserSelect: currentUserSelect,
});


export default withRouter(connect(mapStateToProps)(MemberEdit));
