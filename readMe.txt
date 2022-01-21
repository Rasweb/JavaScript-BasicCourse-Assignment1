# To-do list
To run this code write:
npm i

and to compile sass:
sass --watch sass/index.scss:css/main.css


This assignment is a To-do list

This is the first JavaScript project I did. As you can see on 
github this was also the first time i tried github branches. 

This project is a to-do list that is created almost only using javascript.
1. First i created the class JsList{} with a constructor with two properties: this.item and this.done.
These properties are for the to-do items and the boolean for the checked item.

2. Then I created objects firstObject - sixthObject, based on the class with the items ass values and the value
for the boolean set to false. The I merge the objects with objectToArrays=[] an array of objects.

3. The function toLocalStorage() converts objectToArrays to JSON so it can be move to the localStorage.
It then sets the array and then gets it and parse it to a readable string and logs objectToArrays.

4. After that the function createHtmlLi() is created. That finds the div for the array in the index.html.
The it creates the ul and sets the id and loops through objectToArrays to create the <li> and <p> and
appends the items to the <p> and makes it clickabel. There is also a if() that checks if the item class name is checked.
It also creates and adds a cross next to the items for removal and makes it clickabel and appends everything to the div.

5. After the basics comes the functionality.
* removeItem() splices the item if the cross is clicked. Using the btnCross variable.
It also calls toLocalStorage() to update the localStorage array.

* check() checks if the item is done or not.

* createSort() creates everything needed for the sort functionality.

* sortDone() sorts the array if the item is done it will be placed at the bottom.
It also calls toLocalStorage() to update the localStorage array so the sorted
items are moved to the bottom in the localStorage.

* addToDos() uses a <form> and <input> to add new items to the array. 
It also calls toLocalStorage() to update the localStorage array so 
the added item gets added to the localStorage.