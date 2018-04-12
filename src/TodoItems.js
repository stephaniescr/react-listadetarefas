import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return <li key={item.key}>
                  <div>
                    <a  onClick={() => this.delete(item.key)}>
                      <i className="fas fa-times"></i>
                    </a>
                  </div>
                  <div className="texto">{item.text}</div>
           </li>
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};

export default TodoItems;
