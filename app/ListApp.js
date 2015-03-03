class ListApp {
  constructor(rootElem, listModel) {
    this.rootElem = rootElem;
    this.listModel = listModel;

    require('./list-style.css');

    this.rootElem.innerHTML = this.getTemplate();

    this.renderList();

    // Add a new item
    this.rootElem.addEventListener('keypress', event => {
      if (event.keyCode === 13) {
        let targetElement = event.target;
        let candidates = this.rootElem.querySelectorAll('input.new');
        var hasMatch = Array.prototype.indexOf.call(candidates, targetElement) >= 0;
        if (hasMatch) {
          this.listModel.add(targetElement.value);
          targetElement.value = '';
          this.renderList();
        }
      }
    });

    // Toggle the completed state using checkboxes
    this.rootElem.addEventListener('click', event => {
      let targetElement = event.target;
      let candidates = this.rootElem.querySelectorAll('input.checkbox');
      var hasMatch = Array.prototype.indexOf.call(candidates, targetElement) >= 0;
      if (hasMatch) {
        this.listModel.toggle(parseInt(targetElement.getAttribute('value'), 10));
        this.renderList();
      }
    });
  }

  renderList() {
    var listElem = this.rootElem.querySelector('ul');
    listElem.innerHTML = this.listModel.getAll().map((listItem, i) => {
      return `
      <li class="${listItem.completed ? 'completed' : 'incomplete'}">
        <label>
          <input type="checkbox" class="checkbox" value="${i}" ${listItem.completed ? 'checked' : ''}/>
          ${listItem.name}
        </label>
      </li>
    `;
    }).join('');
  }

  getTemplate() {
    return `
    <div class="list-app">
      <h2>Demo List App</h2>
      <ul></ul>
      <input class="new" type="text" value="" placeholder="Enter a list item"/>
    </div>
    `;
  }
}

export default ListApp;
