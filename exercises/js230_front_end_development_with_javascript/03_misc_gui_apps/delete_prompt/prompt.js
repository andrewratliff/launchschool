document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('#todos');
  const todoTemplateSource = document.getElementById('todos_template');
  const confirmTemplateSource = document.getElementById('confirm_template');
  const todoTemplate = Handlebars.compile(todoTemplateSource.innerHTML);
  const confirmTemplate = Handlebars.compile(confirmTemplateSource.innerHTML);
  const confirmPrompt = document.querySelector('.confirm_prompt');
  const overlay = document.querySelector('.overlay');
  const contextMenu = document.querySelector('.context_menu');
  const contextMenuTemplate = Handlebars.compile(contextMenu.innerHTML);
  const todo_items = [
    { id: 1, title: 'Homework' },
    { id: 2, title: 'Shopping' },
    { id: 3, title: 'Calling Mom' },
    { id: 4, title: 'Coffee with John '}
  ];

  document.body.addEventListener('click', () => {
    hideContextMenu();
  })

  ul.innerHTML = todoTemplate({todos: todo_items});

  // ul.addEventListener("click", event => {
    // if (event.target instanceof HTMLSpanElement) {
    //   const id = event.target.parentElement.dataset.id;
    //   const todo = todo_items.find(todo => todo.id === id);

    //   overlay.style.display = "block";
    //   confirmPrompt.style.display = "block";
    //   confirmPrompt.innerHTML = confirmTemplate(todo);

    //   const yes = document.querySelector(".confirm_yes");
    //   yes.addEventListener('click', event => {
    //     event.preventDefault();
    //     const li = document.querySelector(`li[data-id='${id}']`);
    //     li.remove();
    //     hideOverlay();
    //   });

    //   const no = document.querySelector(".confirm_no");
    //   no.addEventListener('click', event => {
    //     event.preventDefault();
    //     hideOverlay();
    //   });
    // }
  // })

  ul.addEventListener("contextmenu", event => {
    if (event.target instanceof HTMLLIElement) {
      console.log('hi');
      event.preventDefault();

      const left = event.clientX;
      const top = event.clientY;
      const id = event.target.dataset.id;

      console.log(left);
      console.log(top);

      displayContextMenu({ left, top }, id);
    }
  })

  function hideOverlay() {
    overlay.style.display = 'none';
    confirmPrompt.style.display = 'none';
    confirmPrompt.innerHTML = '';
  }

  function displayOverlay(todo, id) {
    overlay.style.display = "block";
    confirmPrompt.style.display = "block";
    confirmPrompt.innerHTML = confirmTemplate(todo);

    const yes = document.querySelector(".confirm_yes");
    yes.addEventListener('click', event => {
      event.preventDefault();
      const li = document.querySelector(`li[data-id='${id}']`);
      li.remove();
      hideOverlay();
    });

    const no = document.querySelector(".confirm_no");
    no.addEventListener('click', event => {
      event.preventDefault();
      hideOverlay();
    });
  }

  function displayContextMenu(coords, id) {
    hideContextMenu();

    console.log(coords);
    contextMenu.innerHTML = contextMenuTemplate({ id: id });
    contextMenu.style.top = coords.top;
    contextMenu.style.left = coords.left;
    contextMenu.style.display = 'block';

    document.querySelector('li.remove').addEventListener('click', event => {
      event.preventDefault();
      const todo = todo_items.find(todo => todo.id === id);
      displayOverlay(todo, id);
    });
  }

  function hideContextMenu() {
    contextMenu.style.display = 'none';
    contextMenu.innerHTML = '';
  }
});
