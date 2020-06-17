import React from "react";
import { connect } from "react-redux";
import { Icon } from "react-icons-kit";
import { ic_favorite_border } from "react-icons-kit/md/ic_favorite_border";
import { createStructuredSelector } from "reselect";

import {
  likeCountSelect,
  cartHiddenSelect,
} from "../../redux/cart/cart-selector";
import { taggleCartDropdown } from "../../redux/cart/cart-action";

import "./LikeIcon.scss";

const LikeIcon = ({ likeCount, taggleCartDropdown, hidden }) => (
  <div
    style={{ color: "pink" }}
    className="like-icon"
    onMouseOver={() => {
      if (hidden) return;
      taggleCartDropdown();
    }}
  >
    <Icon icon={ic_favorite_border} size={30} />
    <span className="like-count">{likeCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  likeCount: likeCountSelect,
  hidden: cartHiddenSelect,
});

const mapDispatchToProps = (dispatch) => ({
  taggleCartDropdown: () => dispatch(taggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeIcon);
