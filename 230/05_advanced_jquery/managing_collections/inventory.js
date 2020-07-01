let inventory;

(function() {
  let index = 0;

  inventory = {
    collection: [],
    setDate() {
      const dd = document.getElementById("order_date");
      const date = new Date();
      dd.textContent = date.toUTCString();
    },
    cacheTemplate() {
      const inventory_item = document.getElementById("inventory_item");
      this.template = inventory_item.innerHTML;
      inventory_item.remove();
    },
    addItem() {
      const regex = /ID/g;
      index += 1;

      console.log(this);
      const html = this.template.replace(regex, index);

      this.appendToTable(html);
      this.collection.push({
        id: index,
        name: "",
        stockNumber: "",
        quantity: 1,
      });
    },
    appendToTable(html) {
      const table = document.getElementById("inventory");
      const tr = document.createElement("tr");
      tr.innerHTML = html;
      table.appendChild(tr);
    },
    updateItem(event) {
      const id = parseInt(event.target.name.split("_").slice(-1)[0], 10);
      const inputs = event.target.closest("tr").querySelectorAll("input");
      const obj = {
        name: inputs[1].value,
        stockNumber: inputs[2].value,
        quantity: inputs[3].value,
      };
      const item = this.findItem(id);
      Object.keys(obj).forEach(key => item[key] = obj[key]);
    },
    removeItem(event) {
      event.preventDefault();
      if (event.target.classList.value.includes("delete")) {
        const tr = event.target.closest("tr");
        const id = parseInt(tr.querySelector("input").name.split("_").slice(-1)[0], 10);
        const item = this.findItem(id);
        const index = this.collection.indexOf(item);
        this.collection.splice(index, 1);
        tr.remove();
      };
    },
    findItem(id) {
      return this.collection.find(el => el.id === id);
    },
    bindEvents() {
      const addButton = document.getElementById("add_item");
      const table = document.getElementById("inventory");

      addButton.addEventListener("click", this.addItem.bind(this));
      table.addEventListener("input", this.updateItem.bind(this));
      table.addEventListener("click", this.removeItem.bind(this));
    },
    init() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();


document.addEventListener("DOMContentLoaded", () => {
  inventory.init();
});
