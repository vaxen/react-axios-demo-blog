import React, { Component } from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import './Posts.css'

class Posts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      selectedPostId: null
    }

    this.postSelectedHandler = (id) => {
      this.props.history.push({pathname: '/' + id})
    }
  }

  componentDidMount () {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4)
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Demo'
          }
        })
        this.setState({posts: updatedPosts})
        // console.log(response)
      })
  }

  render () {
    const posts = this.state.posts.map(post => {
      return (
        // <Link to={'/posts/' + post.id} >
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.props.history.push(`/posts/${post.id}`)} />
        // </Link>
      )
    })

    return (
      <section className='Posts'>
        {posts}
      </section>
    )
  }
}
export default Posts
