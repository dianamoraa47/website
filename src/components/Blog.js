import React from 'react'
import Post from './Post'
class Blog extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      posts:[]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
      this.setState({
        posts: response
      })
    })
    
  }
  render(){
    return (
    <section id="first">
      <header>
        <h2>blog</h2>
      </header>
      <div className="content">
        {
          this.state.posts.map(post =>{
            return <Post key={post.id} post={post}/>
          })
        }
      </div>
    </section>
     )
    }
  }

export default Blog;