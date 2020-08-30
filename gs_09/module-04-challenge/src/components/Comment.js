import React, { Component } from "react";

import PropTypes from 'prop-types';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <img className="avatar" src={this.props.comment.author.avatar} />

        <div className="comment-box">
          <p>
            <span>{this.props.comment.author.name}</span>
            {this.props.comment.content}
          </p>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object,
}

export default Comment;