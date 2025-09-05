# DOM and events

DOM : Document object model (tree like representation of HTML page)
A. Select element : find things on page
B. Update elements : change text ,HTML, attributes and classes
C. Listen for events : clicks, typing, submitting forms
D. Create/Remove elements : you can do these dynamically


finding HTML elements
3 ways to find HTML elements
1. find by ID : document.getElementById(id)
2. find by tag name : document.getElementsByTagName(name)
3. find by class name : document.getElementsByClassName(name)

properties : 

1. element.innerHTML = new HTML content  (Change the inner HTML of an element)
2. element.attribute = new value  (Change the attribute value of an HTML element)
3. element.style.property = new style (change the style of HTML)
4. element.setAttribute(attribute, value)  (change attribute value of element)


Updating Text and HTML 
element.textContent = "Hello"  (used for only text)
element.innerHTML = "<b>Hi</b>" (inserts HTML)

updating classes :
element.classList.add("");
element.classList.remove("");

