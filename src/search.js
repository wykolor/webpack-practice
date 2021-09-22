import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
class Search extends React.Component {
  render() {
    return <div className="search-text">这里是react JSX语法</div>
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)
