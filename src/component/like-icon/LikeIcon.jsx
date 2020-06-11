import React from "react";
import { connect } from "react-redux";
import { Icon } from "react-icons-kit";
import { ic_favorite_border } from "react-icons-kit/md/ic_favorite_border";
import { createStructuredSelector } from "reselect";

import { likeCountSelect } from "../../redux/cart/cart-selector";

import "./LikeIcon.scss";

const LikeIcon = ({ likeCount }) => (
  <div style={{ color: "pink" }} className="like-icon">
    <Icon icon={ic_favorite_border} size={30} />
    <span className="like-count">{likeCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  likeCount: likeCountSelect,
});

export default connect(mapStateToProps)(LikeIcon);
