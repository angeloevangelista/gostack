import React, { Component } from 'react';

import profile from '../assets/profile.jpg';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Angelo Evangelista",
          avatar: profile
        },
        date: "24 Jun 2020",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Angelo Evangelista",
              avatar: profile
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };

  render() {
    return (
      <>
        {this.state.posts.map(post => <PostItem key={post.id} post={post} />)}
      </>
    );
  }
}

export default PostList;