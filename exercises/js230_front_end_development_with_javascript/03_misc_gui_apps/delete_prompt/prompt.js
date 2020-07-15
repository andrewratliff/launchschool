document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector("#todos");
  const todoTemplateSource = document.getElementById("todos_template");
  const confirmTemplateSource = document.getElementById("confirm_template");
  const todoTemplate = Handlebars.compile(todoTemplateSource.innerHTML);
  const confirmTemplate = Handlebars.compile(confirmTemplateSource.innerHTML);
  const todo_items = [
    { id: 1, title: 'Homework' },
    { id: 2, title: 'Shopping' },
    { id: 3, title: 'Calling Mom' },
    { id: 4, title: 'Coffee with John '}
  ];

  ul.innerHTML = todoTemplate({todos: todo_items});

  ul.addEventListener("click", event => {
    if (event.target instanceof HTMLSpanElement) {
      const id = event.target.parentElement.dataset.id;
    }
  })
});
