// import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';


// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       items:[],
//       currentItem:{
//         text:'',
//         key:''
//       }
//     }
//     this.addItem = this.addItem.bind(this);
//     this.handleInput = this.handleInput.bind(this);
//   }
//   addItem(e){
//     e.preventDefault();
//     const newItem = this.state.currentItem;
//     if(newItem.text !==""){
//       const items = [...this.state.items, newItem];
//     this.setState({
//       items: items,
//       currentItem:{
//         text:'',
//         key:''
//       }
//     })
//     }
//   }
//   handleInput(e){
//     this.setState({
//       currentItem:{
//         text: e.target.value,
//         key: Date.now()
//       }
//     })
//   }
//   deleteItem(key){
//     const filteredItems= this.state.items.filter(item =>
//       item.key!==key);
//     this.setState({
//       items: filteredItems
//     })

//   }
   
  
//  render(){
//   return (
//     <div className="App">
//       <header>
//         <form id="to-do-form" onSubmit={this.addItem}>
//           <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
//           <button type="submit">Add</button>
//         </form>
//         <p>{this.state.items.text}</p>
        
        
//       </header>
//     </div>
//   );
//  }
// }


// export default App;


import React from 'react'
import './App.css'

export class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);

  }

    handleInput(e){
      this.setState({
        currentItem:{
        text:e.target.value,
        key:Date.now(),
        }
      })
    }

    addItem(e){
      e.preventDefault();
      const newItem=this.state.currentItem;
      console.log(newItem);
      if(newItem.text!==''){
        const newItems=[...this.state.items  , newItem];
        this.setState({
          items:newItems,
          currentItem:{
            text:'',
            key:''
          }
        })

      }
    }
  

 
  render() {
    return (
      <header>
        <form id="to-do-form" onSubmit={this.addItem}> 
          <input type='text' placeholder='Enter Text'  value={this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type='button'>Add</button>
        </form>
        
      </header>
    )
  }
}

export default App
