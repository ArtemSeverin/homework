/** @format */

function createTable(rows, columns) {
  const container = document.querySelector(".container");
  const table = document.createElement("table");

  let num = 1;

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      const box = document.createElement("td");
      box.textContent = num;
      num++;
      row.appendChild(box);
    }
    table.appendChild(row);
  }

  return container.append(table);
}

const table = createTable(10, 10);
