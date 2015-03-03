import ListApp from './ListApp.js';
import ListModel from './ListModel.js';
class TodoApp extends ListApp {
  constructor(rootElem) {
    super(rootElem, new ListModel());
  }
  getTemplate() {
    return `
    <div class="todo-app">
      <h2>Your Todos for ${require('moment')().format('dddd, MMMM D, YYYY')}</h2>
      <ul></ul>
      <input class="new" type="text" value="" placeholder="Enter a todo item"/>
    </div>
    `;
  }

}

export default TodoApp;
