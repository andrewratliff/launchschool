document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector("#todos");
  const todoTemplateSource = document.getElementById("todos_template");
  const confirmTemplateSource = document.getElementById("confirm_template");
  const todoTemplate = Handlebars.compile(todoTemplateSource.innerHTML);
  const confirmTemplate = Handlebars.compile(confirmTemplateSource.innerHTML);
  const confirmPrompt = document.querySelector(".confirm_prompt");
  const overlay = document.querySelector(".overlay");
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
      const todo = todo_items.find(todo => todo.id === id);

      overlay.style.display = "block";
      confirmPrompt.style.display = "block";
      confirmPrompt.innerHTML = confirmTemplate(todo);

      const yes = document.querySelector(".confirm_yes");
      yes.addEventListener('click', event => {
        event.preventDefault();
        const li = document.querySelector(`li[data-id='${id}']`);
        li.remove();
        resetOverlay();
      });

      const no = document.querySelector(".confirm_no");
      no.addEventListener('click', event => {
        event.preventDefault();
        resetOverlay();
      });
    }
  })

  function resetOverlay() {
    overlay.style.display = 'none';
    confirmPrompt.style.display = 'none';
    confirmPrompt.innerHTML = '';
  }
});
