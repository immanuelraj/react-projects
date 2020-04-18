import React from 'react'
import './todo.css'

export class Todo extends React.Component {

  constructor(props){
    super(props);
    this.state={
      newItem:'',
      list:[]
    }
  }  

  addItem(todovalue){
    if(todovalue!=''){
      const newItem = {
        id: Date.now(),
        value:todovalue,
        isDone: false
      };
      const list =[...this.state.list];
      list.push(newItem)

      this.setState({
        list,
        newItem:''
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list:updatedList,
    });
  }

  updateInput(input){
    this.setState({newItem:input});
  }

  render() {
    return(
      <div className='container'>
        <div className='add-task'>
          <label className='task-title'>Add Items</label>
          <input 
            type='text'
            className='input-text'
            required
            value={this.state.newItem}
            onChange={e=> this.updateInput(e.target.value)}
            placeholder='Write Todo...'>
          </input>
          <button
          className='add-btn'
          onClick={()=> this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}>Add</button>
        </div>
        <div className='list'>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  <input 
                  type='checkbox'
                  checked={item.isDone}
                  onChange={()=>{}}
                  className='box'/>
                  <h3>{item.value}</h3>
                  <button className='btn' onClick={() => this.deleteItem(item.id)}>Remove</button>
                </li>
              );
            })};
          </ul>
        </div>
      </div>
    )
  }
};

export default Todo;