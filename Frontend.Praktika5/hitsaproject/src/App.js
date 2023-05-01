import React, { Component } from "react";
import { Link } from "react-router-dom"; // Added import statement for Link
import axios from 'axios';
import './App.css';
import Content from './components/Content'; // Added import statement for Content

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
    };
  }

  componentDidMount() {
    axios.get('http://dev.vk.edu.ee/~natalia/hitsaproject/api/room')
      .then(res => {
        this.setState({ rooms: res.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    const { rooms } = this.state;
    console.log(rooms)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Project HITSA</h1>
        </header>
        <main>
          <Content />
          <ul>
            {rooms.map(r => (
              <li >
                <Link to={`/room/${r.room}`}>{r.room}</Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

