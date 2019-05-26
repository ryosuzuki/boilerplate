import React, { Component } from 'react'

const socket = io.connect('http://localhost:8080/')

class App extends Component {
  constructor(props) {
    super(props)
    window.App = this
    this.socket = socket
    this.state = {
    }
  }

  componentDidMount() {
    const message = { msg: 'hello world' }
    this.socket.emit('test', message)
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }

}
export default App