import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import NewPost from './NewPost/NewPost'
import Posts from './Posts/Posts'
import './Blog.css'

class Blog extends Component {
  render () {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li><Link to='/posts'>Posts</Link></li>
              <li><Link to='/new-post'>New Post</Link></li>
            </ul>
          </nav>
        </header>
        {/* {<Route path='/' exact='true' render={() => <h1>Home</h1>} />} */}
        <Switch>
          <Route path='/posts' component={Posts} />
          <Redirect from='/' exact to='/posts' />
          <Route path='/new-post' exact component={NewPost} />
          <Route render={() => <h1>404 Not found</h1>} />
        </Switch>
      </div>
    )
  }
}

export default Blog
