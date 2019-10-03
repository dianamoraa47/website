import React from 'react'
class Post extends React.Component{
  render(){
    return <div>
      <h3>{this.props.post.title}</h3>
      <p>{this.props.post.body}</p>
    </div>
  }
}

export default Post;