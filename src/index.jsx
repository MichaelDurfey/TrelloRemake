import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import NavBar from './components/Navbar';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [
        {
          title: 'Winnie',
          tasks: [
            'go somewhere',
            'eat something',
          ],
        },
        {
          title: 'Bob',
          tasks: [
            'foo',
            'bar'
          ],
        },
        {
          title: 'Thomas',
          tasks: [
            'foo',
            'bar'
          ],
        },
        {
          title: 'George',
          tasks: [
            'foo',
            'bar'
          ],
        },
      ]
    };
  }

addBoard() {
  const title = window.prompt('title?');
  if (title !== null && title.length > 0) {
    const boards = this.state.boards.slice();
    const newBoard = {
      title,      
      tasks: [],
    }
    boards.push(newBoard);
    this.setState({
      boards,
    })
  }
}

handleClick(i) {
  const input = window.prompt('new card?');
  if (input !== null && input.length > 0) {
    let board = this.state.boards.slice();
    board[i].tasks.push(input);
    this.setState({
      board,
    });
  }
}

handleLeftClick(i, taskIndex) {
  const board = this.state.boards.slice();
  const taskToMove = board[i].tasks[taskIndex];
  board[i].tasks.splice(taskIndex, 1);
  board[i - 1].tasks.push(taskToMove);
  this.setState({
    board,
  });
}

handleRightClick(i, taskIndex) {
  const board = this.state.boards.slice();
  const taskToMove = board[i].tasks[taskIndex];
  board[i].tasks.splice(taskIndex, 1);
  board[i + 1].tasks.push(taskToMove);
  this.setState({
    board,
  });
}

// getLocalStorage() {
//   let localStorageObj = localStorage.getItem('_recipeBook');
//   if (localStorageObj != undefined) {
//     this.state.recipes = JSON.parse(localStorageObj); 
//     this.setState(this.state)
//   }
// }

// newRecipe(recipe){
//   this.state.recipes = this.state.recipes.concat(recipe)
//   this.setState(this.state);
//   localStorage.setItem('_recipeBook', JSON.stringify(this.state.recipes))
// }
  
// deleteItem(index){
//   this.state.recipes.splice(index, 1)
//   this.setState(this.state)
//   localStorage.setItem('_recipeBook', JSON.stringify(this.state.recipes))
// }

  render() {
    return (
    <div>
      <NavBar addBoard={() => this.addBoard()}/>
      <div className="container">
        {
          this.state.boards.map((board, index) => {
            return(
              <Board
              handleLeftClick={(i, taskIndex) => this.handleLeftClick(i, taskIndex)}
              handleRightClick={(i, taskIndex) => this.handleRightClick(i, taskIndex)}
              index={index} 
              last={this.state.boards.length - 1} 
              addTask={() => {this.handleClick(index)}}
              board={board} />
            )
          })
        }
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
