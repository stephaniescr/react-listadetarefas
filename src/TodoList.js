import React, { Component } from "react";
import TodoItems from "./TodoItems"
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if(this._inputElement.value !== "") {
      //criando a variável newItem, que vai guardar um objeto
      var newItem = {
        //o objeto contém o texto digitado no input e um valor único para chave
        //que é setado como sendo o horário atual (não vai se repetir)
        text: this._inputElement.value,
        key: Date.now()
      };
    //setando a propriedade items do state
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
    //limpando o input para receber o próximo elemento
    this._inputElement.value = ""
  }

  console.log(this.state.items);
  //com a linha abaixo, é feita a sobrescrita do behavior default desse evento
  e.preventDefault();
}

deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });

  this.setState({
    items: filteredItems
  });
}

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input  ref={(a) => this._inputElement = a}
                    placeholder="digite uma tarefa">
            </input>
            <button type="submit"><i class="fas fa-plus"></i></button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                   delete={this.deleteItem}/>
      </div>
    );
  }
}

export default TodoList;
