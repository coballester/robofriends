import React from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
// import { robots } from './robots';
import Scroll from './Scroll';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({robots: data}));
  }

  // IF I USED onSearchChange(event) {--} THEN "this" would be the input, not the App 
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }
  
  render () {
    const filteredRobots = this.state.robots.filter(
      robot =>
          robot.name.toLowerCase().includes(
            this.state.searchfield.toLowerCase())
    );
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    }
    return (
      <div className='tc'>
        <h1 className='f2'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className='tc'>
//       <h1>Robofriends</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//     );
// }

export default App;















// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
