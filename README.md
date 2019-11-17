## Table plugin
* [General](#general)
* [Setup](#setup)
* [Usage](#usage)

# General

It's easy to use pluging to create dynamic table.  <br/>
Uses only javascript, html and css.

# Setup

Add the things described below to your code.

### 📌 Head section

First thing is to link css plik in your head section.

```
    <link rel="stylesheet" href="css/table.css"/>
```

# Usage

### 📌 Body section
Then in your body section add script with variables "heading" and "rows". <br/><br/>
In the array "heading" add as many objects as you want to have headers. <br/> 
The "label" key is for adding a header name and the "for" key is for assigning values from header to the rows.<br/><br/> 
In the array "rows" add as many objects as you want to have rows. <br/> 
Add keys with the same names you used in the "headings" variable.<br/> 
<b>Don't forget to add all keys in right order even if some of them are empty.</b>

```
    <script>

        let headings = [
            {
                label: "Nazwa",
                for: "name"
            },
            {
                label: "Ilość",
                for: "quantity"
            },
            {
                label: "Cena",
                for: "price"
            },
            {
                label: "Data",
                for: "date"
            }
        ];

        let rows = [
            {
                name: "Komputer",
                quantity: 1,
                price: "$150",
                date: "09/02/19"
            },
            {
                name: "Monitor",
                quantity: "",
                price: "$100",
                date: "10/18/19"
            },
            {
                name: "Krzesło",
                quantity: 10,
                price: "$20",
                date: ""
            }
        ];
        const table = new Table(headings, rows);   

    </script>

```
