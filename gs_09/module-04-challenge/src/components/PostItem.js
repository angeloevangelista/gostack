import React, { Component } from "react";
import PropTypes from 'prop-types';

import Comment from './Comment';

class PostItem extends Component {
  render() {
    return (
      <div className="post-item">
        <div className="author-info">
          <img className="avatar" src={this.props.post.author.avatar} />

          <div>
            <strong className="author-name">{this.props.post.author.name}</strong>
            <span className="post-date">{this.props.post.date}</span>
          </div>
        </div>

        <p className="post-content">{this.props.post.content}</p>

        <hr />

        <div className="comments">
          {this.props.post.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object,
}

export default PostItem;