const { Component, mount, xml, useState } = owl;

class Task extends Component {
  static template = xml`
  <li
    class="list-group-item d-flex justify-content-between align-items-center rounded my-2 mx-2 border-1 shadow"
  >
  <div class="d-flex">
    <input type="checkbox" t-att-id="props.todo.id" class="form-check-input me-2" t-att-checked="props.todo.completed" t-on-change="onCheckboxChange" />
    <label t-att-style="'text-decoration: ' + (props.todo.completed? 'line-through': 'none')" t-att-title="props.todo.title" t-att-for="props.todo.id" class="form-check-label">
      <t t-esc="props.todo.title.length > 25 ? props.todo.title.substring(0, 25) + '...' : props.todo.title"/> 
    </label>
  </div>
  <div class="d-flex">
      <button class="btn btn-success btn-sm me-2" t-on-click="onEdit">Edit</button>
      <button class="btn btn-danger btn-sm" t-on-click="onDelete">Delete</button>
  </div>
</li>
  `;

  onCheckboxChange(ev) {
    const isChecked = ev.target.checked;
    this.props.todo.completed = isChecked;
  }

  onEdit() {
    this.props.state.isEditing = this.props.todo.id;
    this.props.state.input = this.props.todo.title;
  }

  onDelete() {
    const index = this.props.state.todos.findIndex(todo => todo.id === this.props.todo.id);
    if (index !== -1) {
      this.props.state.todos.splice(index, 1);
    }
  }
  
  static props = ['todo', 'state'];
}



class Root extends Component {
  static template = xml`
    <div class="card mx-auto p-3 mt-5">
      <h2 class="text-center mb-2">TODO list with OWL</h2>
      <div class="mx-2 d-flex justify-content-between align-items-center">
        <input
          type="text"
          id="todoInput"
          class="form-control me-2"
          placeholder="Enter a new task"
          aria-label="Enter a new task"
          t-att-value="state.input"
          t-on-input="onInput"
          t-on-keydown="onKeyDown"
        />
        <button class="btn btn-primary w-25" id="addButton" t-on-click="addTodo">
          <t t-if="state.isEditing">Edit</t>
          <t t-else="">Add</t>
        </button>
      </div>
      <ul id="todoList" class="list-group mt-3 border-0">
        <t t-foreach="state.todos" t-as="todo" t-key="todo.id">
          <Task todo="todo" state="state"/>
        </t>
      </ul>
    </div>
    `;

  static components = { Task };

  setup() {
    this.state = useState({
      todos: [
        {
          id: 1,
          title: 'prepare coding interview',
          completed: false,
        },
        {
          id: 2,
          title: 'prepare for the meeting',
          completed: true,
        },
        {
          id: 3,
          title: 'prepare for the presentation',
          completed: false,
        },
        {
          id: 4,
          title: 'prepare for the exam',
          completed: false,
        },
      ],
      input: '',
      isEditing: null,
    });
  }

  onInput(ev) {
    this.state.input = ev.target.value;
  }

  onKeyDown(ev) {
    if (ev.key === 'Enter') {
      this.addTodo();
    }
  }

  addTodo(){
    if (this.state.input) {
      if(this.state.isEditing) {
        const todo = this.state.todos.find(todo => todo.id === this.state.isEditing);
        if (todo) {
          todo.title = this.state.input;
          this.state.isEditing = null;
        }
      }else{
        this.state.todos.push({
          id: this.state.todos.length + 1,
          title: this.state.input,
          completed: false,
        });
      }
      this.state.input = '';
    }
  }

  
}

mount(Root, document.getElementById('root'));
