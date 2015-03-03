import ListApp from './ListApp.js';
import ListModel from './ListModel.js';
class GroceryApp extends ListApp {
  constructor(rootElem) {
    super(rootElem, new ListModel());
  }
  getTemplate() {
    return `
    <div class="grocery-app">
      <h2>Your Grocery App</h2>
      <ul></ul>
      <input class="new" type="text" value="" placeholder="Enter a grocery item"/>
    </div>
    `;
  }

}

export default GroceryApp;
