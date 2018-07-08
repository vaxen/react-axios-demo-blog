import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'
import Posts from './Posts/Posts'
import './Blog.css'

class Blog extends Component {
  render () {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/new-post'>New Post</Link></li>
            </ul>
          </nav>
        </header>
        {/* {<Route path='/' exact='true' render={() => <h1>Home</h1>} />} */}
        <Switch>
          <Route path='/' exact component={Posts} />
          <Route path='/new-post' exact component={NewPost} />
          <Route path='/posts/:id' exact component={FullPost} />
        </Switch>
      </div>
    )
  }
}

export default Blog
