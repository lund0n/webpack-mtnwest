class ListModel {
  constructor() {
    this.items = [];
  }
  getAll() {
    return this.items;
  }
  getCompleted() {
    return this.items.filter(item => item.completed);
  }
  getIncomplete() {
    return this.items.filter(item => !item.completed);
  }
  add(name) {
    this.items.push({ name: name, completed: false});
  }
  toggle(index) {
    if (index >= 0 && index < this.items.length) {
      this.items[index].completed = !this.items[index].completed;
    }
  }
  markComplete(name) {
    this.items
      .filter(item => item.name === name)
      .forEach(item => item.completed = true);
  }
}
export default ListModel;
