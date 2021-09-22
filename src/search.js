import React from 'react'
import ReactDOM from 'react-dom'

import poster from './assets/avatar.png'

import './search.less'
class Search extends React.Component {
  render() {
    return <div className="search-text">这里是react JSX语法<img src={poster} /></div>
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)
