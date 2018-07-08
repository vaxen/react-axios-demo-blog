import React, { Component } from 'react'

import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'
import axios from '../../axios'

class Blog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      selectedPostId: null
    }

    this.postSelectedHandler = (id) => {
      this.setState({selectedPostId: id})
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
      return <Post
        title={post.title}
        key={post.id}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)} />
    })
    return (
      <div>
        <section className='Posts'>
          {posts}
        </section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    )
  }
}

export default Blog
