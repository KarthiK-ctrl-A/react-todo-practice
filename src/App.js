import React from "react";
import logo from "./logo.svg";
import "./App.css";



class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        newItem:"",
        list : []
    }
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value : todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem : ""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id );
    this.setState({
      list: updatedlist
    });
  }

  updateInput(input){
    this.setState({
      newItem: input
    });
  }

  render(){
    return(
                  <div>
                        <div className="left">
                              <img className="logo" src={logo}/>
                              <p className="title">TODO APP</p>
                        </div>
                        <div className="right">
                            <p className="add-todo">Add TODO....</p>
                            <input type="text" className="input-text"
                                   placeholder=" Type Something...."
                                   placeholderColor={"hsl(0,0%,100%)"}
                                   required
                                   value = {this.state.newItem}
                                   onChange = {e => this.updateInput(e.target.value)}
                                   />
                             <button 
                             className="add-btn" 
                             onClick = {() => this.addItem(this.state.newItem)}
                             disabled = {!this.state.newItem.length}
                             type="submit" >Add</button>
                             <p className="todo-list">Your TODO's :</p>
                             <div className="frame">
                                  <ul>
                                    {this.state.list.map(item => {
                                      return(
                                        <li className = "li"key = {item.id}>
                                          <input
                                          type = "checkbox"
                                          name = "isDone"
                                          checked = {item.isDone}
                                          onChange={(() => {})}
                                          />
                                          <h4 className="content">
                                            {item.value}
                                          </h4>
                                          <button
                                          className="btn"
                                          onClick = {() => this.deleteItem(item.id)}
                                          >Delete</button>
                                        </li>
                                      );
                                    })}
                                    <li className="li">
                                        <input type="checkbox" className="Checkbox" id=""/>
                                        <h4 className="content">Learn React</h4> 
                                        <button className="btn">Delete</button>
                                    </li>
                                  </ul>
                               </div>
                          </div>
                      </div>
 );
  }
  
}

export default App;