class Table {
  constructor(headings, rows) {
    this.headings = headings;
    this.rows = rows;

    this.createTable();
  }
  //CREATE TABLE
  createTable() {
    //MAKING A DIV
    const tableDiv = document.createElement("div");
    tableDiv.classList.add("new-table");
    const body = document.querySelector("body");
    body.appendChild(tableDiv);

    //MAKING A TABLE
    let table = document.createElement("table");
    table.classList.add("table");
    tableDiv.appendChild(table);

    this.createHeadings();
  }

  //CREATE HEADINGS
  createHeadings() {
    let thead = document.createElement("thead"),
      trHeading = document.createElement("tr");

    this.headings.forEach(heading => {
      const th = document.createElement("th"),
        thContent = document.createTextNode(heading.label);

      th.appendChild(thContent);
      trHeading.appendChild(th);
    });

    let table = document.querySelector(".table");
    table.appendChild(thead);
    thead.appendChild(trHeading);

    this.createRows();
  }

  //CREATE ROWS
  createRows() {
    let tbody = document.createElement("tbody"),
      table = document.querySelector(".table");
    table.appendChild(tbody);

    rows.forEach(row => {
      let trRow = document.createElement("tr");
      tbody.appendChild(trRow);

      const rowEntries = Object.entries(row);

      for (const [key, value] of rowEntries) {
        let headingsObj = this.headings.find(o => o.for == key);

        if (headingsObj) {
          let td = document.createElement("td");

          let tdContent = document.createTextNode(value);
          td.appendChild(tdContent);
          trRow.appendChild(td);
        } else if (!headingdObj) {
          let td = document.createElement("td");

          let tdContent = document.createTextNode("-");
          td.appendChild(tdContent);
          trRow.appendChild(td);
        }
      }
    });
  }
}
