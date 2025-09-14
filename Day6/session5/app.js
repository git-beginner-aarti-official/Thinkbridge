const htmlContent = document.getElementById("html-content");
const cssContent = document.getElementById("css-content");
const jsContent = document.getElementById("js-content")
const exploreBtnHTML = document.getElementById("explore-html");
const exploreBtnCss = document.getElementById("explore-css");
const exploreBtnJs = document.getElementById("explore-js");

const moreHTML = [
    { tag: "<h1>", desc: "Defines the main heading of a page. It has higher importance" },
    { tag: "<h2>", desc: "Defines a sub-heading. Less important than <h1> but more than <h3>" },
    { tag: "<h3>", desc: "Defines a subheading under <h2> i.e. less important than <h2>" },
    { tag: "<h4>", desc: "Defines a subheading under <h3> i.e. less important than<h3>" },
    { tag: "<h5>", desc: "Defines a subheading under <h4> i.e. less important than<h4>" },
    { tag: "<h6>", desc: "Defines a subheading under <h5> i.e. less important than<h5> . It is considered as least important" },
    { tag: "<p>", desc: "Defines a paragraph, here we can add text" },
    { tag: "<ul>", desc: "Defines an unordered list." },
    { tag: "<ol>", desc: "Defines an ordered list , it is numbered list." },
    { tag: "<li>", desc: "Defines a list item inside unordered or ordered list." },
    { tag: "<img>", desc: "Used to embed image , it has src attribute in which we can add path to image or image URL" },
    { tag: "<form>", desc: "Creates a form which allows to take input from user." },
    { tag: "<input>", desc: "It defined input filed mainly used in form or anywhere to get input from user." },
    { tag: "<button>", desc: "Creates a button mainly used in form or anywhere in the page" },
    { tag: "<table>", desc: "Define and creates a table." },
    { tag: "<tr>", desc: "Define and creates rows of the table." },
    { tag: "<td>", desc: "Define and creates a table data." },
    { tag: "<th>", desc: "Define and creates table header data or heading." },
    { tag: "<strong>", desc: "Defines important text, it makes the text bold." },
    { tag: "<em>", desc: "Defines emphasized text, it makes text in italic font." },
    { tag: "<br>", desc: "Inserts a line break, next element go to the next line" },
    { tag: "<hr>", desc: "Inserts a horizontal line break." },
    { tag: "<meta>", desc: "Provides metadata about the HTML document." },
];
const htmlAttributes = [
    { attr: "id", desc: "Specifies a unique id for an element." },
    { attr: "class", desc: "Specifies one or more class names for an element." },
    { attr: "src", desc: "Specifies the URL of an external resource, we can add external javascript, css file along with it used in image tag." },
    { attr: "href", desc: "Specifies the URL of a link mainly used in &lta&gt tag." },
    { attr: "alt", desc: "Provides alternative text for an image , used in &ltimg&gt tag." },
    { attr: "title", desc: "Specifies extra information about an element." },
    { attr: "type", desc: "Specifies the type of element, mainly used in &ltinput&gt to specify type of input." },
    { attr: "value", desc: "Specifies the value of an input element." },
    { attr: "name", desc: "Specifies the name of an element , mainly used in forms." },
];
const imageAttributes = [
    { attr: "src", desc: "Specifies the path to the image file." },
    { attr: "alt", desc: "Provides alternative text if the image cannot be displayed." },
    { attr: "width", desc: "Specifies the width of the image in pixels or percentage." },
    { attr: "height", desc: "Specifies the height of the image in pixels or percentage." },
    { attr: "loading", desc: "Specifies how the image should be loaded (lazy or eager)." }
];
const tableAttributes = [
    { attr: "table", desc: "Defines a table element." },
    { attr: "tr", desc: "Defines a row inside a table." },
    { attr: "td", desc: "Defines a standard data cell in a table." },
    { attr: "th", desc: "Defines a header cell in a table, usually bold and centered." },
    { attr: "thead", desc: "Groups the header content in a table." },
    { attr: "tbody", desc: "Groups the body content in a table." },
    { attr: "tfoot", desc: "Groups the footer content in a table." },
    { attr: "caption", desc: "Adds a caption or title to the table." },
    { attr: "colgroup", desc: "Specifies a group of one or more columns in a table for formatting." },
    { attr: "col", desc: "Specifies column properties inside <colgroup>." },
    { attr: "colspan", desc: "Specifies the number of columns a cell should span across." },
    { attr: "rowspan", desc: "Specifies the number of rows a cell should span across." }
];
const formAttributes = [
    { attr: "form", desc: "Defines an HTML form for user input." },
    { attr: "action", desc: "Specifies where to send the form data when submitted (URL)." },
    { attr: "method", desc: "Specifies how to send the form data (GET or POST)." },
    { attr: "input", desc: "Defines an input field where the user can enter data." },
    { attr: "type", desc: "Specifies the type of input (text, password, email, submit, etc.)." },
    { attr: "name", desc: "Specifies the name of the input field (used to identify the data on submit)." },
    { attr: "value", desc: "Specifies the default value of the input field." },
    { attr: "placeholder", desc: "Specifies a short hint or example text inside the input field." },
    { attr: "label", desc: "Defines a label for an input element to improve accessibility." },
    { attr: "textarea", desc: "Defines a multi-line text input field." },
    { attr: "select", desc: "Defines a drop-down list." },
    { attr: "option", desc: "Defines an option in a drop-down list." },
    { attr: "button", desc: "Defines a clickable button (submit, reset, or custom)." },
    { attr: "required", desc: "Specifies that the input must be filled out before submitting." },
    { attr: "disabled", desc: "Specifies that an input field or button is disabled." },
    { attr: "readonly", desc: "Specifies that the input field is read-only (cannot be modified)." },
    { attr: "checked", desc: "Specifies that a checkbox or radio button should be checked by default." },
    { attr: "multiple", desc: "Allows multiple selections in input (file) or select dropdown." },
    { attr: "autocomplete", desc: "Specifies whether the browser should autocomplete the field." },
    { attr: "enctype", desc: "Specifies how form data should be encoded when submitting (used with POST)." }
];

const cssSelectors = [
  { selector: ".class", desc: "Selects all elements with the specified class." },
  { selector: "element, element", desc: "Selects all elements matching any of the specified types." },
  { selector: "element element", desc: "Selects all elements that are descendants of a specified element." },
  { selector: "element > element", desc: "Selects all elements that are direct children of a specified element." },
  { selector: "element + element", desc: "Selects the element immediately after the specified element." },
  { selector: "element ~ element", desc: "Selects all elements that are siblings of a specified element." },
  { selector: ":hover", desc: "Selects elements when the mouse hovers over them." },
  { selector: ":active", desc: "Selects elements when they are being activated, e.g., clicked." },
  { selector: ":focus", desc: "Selects elements that are focused, like input fields." },
  { selector: "::before", desc: "Adds content before the content of an element." },
  { selector: "::after", desc: "Adds content after the content of an element." },
  { selector: ":checked", desc: "Selects elements that are checked, like checkboxes or radio buttons." },
  { selector: ":disabled", desc: "Selects elements that are disabled." },
  { selector: ":enabled", desc: "Selects elements that are enabled." }
];

const cssColors = [
  { type: "Named Color", example: "red", desc: "Predefined color names in CSS like red, blue, green, etc. Easy to use and remember." },
  { type: "Hex Code", example: "#FF0000", desc: "Defines color using hexadecimal code. Format: #RRGGBB (Red, Green, Blue). Example: #FF0000 is red." },
  { type: "RGB", example: "rgb(255,0,0)", desc: "Defines color using Red, Green, Blue values from 0-255. Example: rgb(255,0,0) is red." },
  { type: "RGBA", example: "rgba(255,0,0,0.5)", desc: "Like RGB but with an Alpha channel for transparency. 0 = fully transparent, 1 = fully opaque." },
  { type: "HSL", example: "hsl(0, 100%, 50%)", desc: "Hue, Saturation, Lightness. Hue = 0-360°, Saturation and Lightness = 0-100%. Example: hsl(0,100%,50%) is red." },
  { type: "HSLA", example: "hsla(0, 100%, 50%, 0.5)", desc: "Like HSL but with alpha for transparency. Example: semi-transparent red." },
  { type: "CurrentColor", example: "currentColor", desc: "Uses the current text color of the element. Useful for borders or icons to match text color." },
  { type: "Transparent", example: "transparent", desc: "Fully transparent, no color. Often used for backgrounds or overlays." }
];

const cssBackgrounds = [
  { 
    property: "background-color", 
    example: "background-color: red;", 
    desc: "Sets the background color of an element. Can use named colors, hex codes, RGB, RGBA, HSL, or HSLA."
  },
  { 
    property: "background-image", 
    example: "background-image: url('image.jpg');", 
    desc: "Sets an image as the background of an element. Can use URL, gradients, or none."
  },
  { 
    property: "background-repeat", 
    example: "background-repeat: no-repeat;", 
    desc: "Defines how the background image is repeated. Values: repeat, repeat-x, repeat-y, no-repeat."
  },
  { 
    property: "background-attachment", 
    example: "background-attachment: fixed;", 
    desc: "Specifies whether the background scrolls with the page or stays fixed. Values: scroll, fixed, local."
  },
  { 
    property: "background-position", 
    example: "background-position: center top;", 
    desc: "Specifies the initial position of the background image. Can use keywords or coordinates (px, %, etc.)."
  },
  { 
    property: "background", 
    example: "background: red url('img.jpg') no-repeat center top fixed;", 
    desc: "Shorthand property to set background-color, background-image, background-repeat, background-position, and background-attachment all at once."
  }
];

const cssBorders = [
  { 
    property: "border-width", 
    example: "border-width: 2px;", 
    desc: "Specifies the thickness of the border. Can use px, em, %, etc."
  },
  { 
    property: "border-style", 
    example: "border-style: solid;", 
    desc: "Specifies the style of the border. Values: none, solid, dotted, dashed, double, groove, ridge, inset, outset."
  },
  { 
    property: "border-color", 
    example: "border-color: red;", 
    desc: "Sets the color of the border. Can use named colors, hex codes, RGB, RGBA, HSL, or HSLA."
  },
  { 
    property: "border-top", 
    example: "border-top: 2px solid blue;", 
    desc: "Shorthand for setting the width, style, and color of the top border."
  },
  { 
    property: "border-right", 
    example: "border-right: 3px dashed green;", 
    desc: "Shorthand for setting the width, style, and color of the right border."
  },
  { 
    property: "border-bottom", 
    example: "border-bottom: 1px dotted black;", 
    desc: "Shorthand for setting the width, style, and color of the bottom border."
  },
  { 
    property: "border-left", 
    example: "border-left: 4px solid purple;", 
    desc: "Shorthand for setting the width, style, and color of the left border."
  },
  { 
    property: "border-radius", 
    example: "border-radius: 10px;", 
    desc: "Defines the roundness of the corners. Can use px, %, or multiple values for different corners."
  },
  { 
    property: "border", 
    example: "border: 2px solid red;", 
    desc: "Shorthand property to set border-width, border-style, and border-color all at once."
  },
  { 
    property: "border-color", 
    example: "border-color: red green blue yellow;", 
    desc: "Allows setting different colors for top, right, bottom, and left borders in one line."
  }
];

const cssMargins = [
  { 
    property: "margin", 
    example: "margin: 20px;", 
    desc: "Shorthand property to set the top, right, bottom, and left margins all at once."
  },
  { 
    property: "margin-top", 
    example: "margin-top: 10px;", 
    desc: "Sets the margin space on the top of an element."
  },
  { 
    property: "margin-right", 
    example: "margin-right: 15px;", 
    desc: "Sets the margin space on the right side of an element."
  },
  { 
    property: "margin-bottom", 
    example: "margin-bottom: 20px;", 
    desc: "Sets the margin space on the bottom of an element."
  },
  { 
    property: "margin-left", 
    example: "margin-left: 25px;", 
    desc: "Sets the margin space on the left side of an element."
  },
  { 
    property: "auto", 
    example: "margin: 0 auto;", 
    desc: "Used to center block-level elements horizontally when width is defined."
  }
];

const cssBoxModel = [
  { 
    property: "width", 
    example: "width: 200px;", 
    desc: "Sets the width of the content area of an element. Can use px, %, em, etc."
  },
  { 
    property: "height", 
    example: "height: 100px;", 
    desc: "Sets the height of the content area of an element."
  },
  { 
    property: "padding", 
    example: "padding: 10px;", 
    desc: "Shorthand to set the space between the content and the border on all sides."
  },
  { 
    property: "padding-top", 
    example: "padding-top: 5px;", 
    desc: "Sets the padding space on the top side of an element."
  },
  { 
    property: "padding-right", 
    example: "padding-right: 10px;", 
    desc: "Sets the padding space on the right side of an element."
  },
  { 
    property: "padding-bottom", 
    example: "padding-bottom: 5px;", 
    desc: "Sets the padding space on the bottom side of an element."
  },
  { 
    property: "padding-left", 
    example: "padding-left: 10px;", 
    desc: "Sets the padding space on the left side of an element."
  },
  { 
    property: "margin", 
    example: "margin: 20px;", 
    desc: "Shorthand to set the outer spacing of an element on all sides."
  },
  { 
    property: "border", 
    example: "border: 2px solid black;", 
    desc: "Shorthand to set border width, style, and color of an element."
  },
  { 
    property: "box-sizing", 
    example: "box-sizing: border-box;", 
    desc: "Specifies how the total width and height of an element are calculated. Values: content-box (default), border-box."
  }
];

const cssFonts = [
  { 
    property: "font-family", 
    example: "font-family: Arial, sans-serif;", 
    desc: "Specifies the font of the text. Can provide multiple fonts as fallback."
  },
  { 
    property: "font-size", 
    example: "font-size: 16px;", 
    desc: "Sets the size of the font. Can use px, em, rem, %, etc."
  },
  { 
    property: "font-weight", 
    example: "font-weight: bold;", 
    desc: "Specifies the weight (thickness) of the font. Values: normal, bold, bolder, lighter, 100-900."
  },
  { 
    property: "font-style", 
    example: "font-style: italic;", 
    desc: "Specifies the style of the font. Values: normal, italic, oblique."
  },
  { 
    property: "text-align", 
    example: "text-align: center;", 
    desc: "Aligns the text horizontally inside its container. Values: left, right, center, justify."
  },
  { 
    property: "line-height", 
    example: "line-height: 1.5;", 
    desc: "Sets the space between lines of text."
  },
  { 
    property: "letter-spacing", 
    example: "letter-spacing: 2px;", 
    desc: "Sets the space between characters."
  }
];

const cssFlexbox = [
  { 
    property: "display", 
    example: "display: flex;", 
    desc: "Turns an element into a flex container."
  },
  { 
    property: "flex-direction", 
    example: "flex-direction: row;", 
    desc: "Defines the direction of flex items. Values: row, row-reverse, column, column-reverse."
  },
  { 
    property: "justify-content", 
    example: "justify-content: center;", 
    desc: "Aligns flex items horizontally along the main axis. Values: flex-start, flex-end, center, space-between, space-around, space-evenly."
  },
  { 
    property: "align-items", 
    example: "align-items: center;", 
    desc: "Aligns flex items vertically along the cross axis. Values: flex-start, flex-end, center, baseline, stretch."
  },
  { 
    property: "flex-wrap", 
    example: "flex-wrap: wrap;", 
    desc: "Defines whether flex items wrap or not. Values: nowrap, wrap, wrap-reverse."
  },
  { 
    property: "gap", 
    example: "gap: 10px;", 
    desc: "Sets the space between flex items."
  },
  { 
    property: "align-self", 
    example: "align-self: flex-end;", 
    desc: "Overrides align-items for a specific flex item."
  }
];

const cssResponsive = [
  { 
    property: "@media", 
    example: "@media (max-width: 768px) { ... }", 
    desc: "Used to apply CSS rules depending on screen size or device. Common for responsive design."
  },
  { 
    property: "max-width / min-width", 
    example: "body { font-size: 14px; } @media (max-width: 480px) { body { font-size: 12px; } }", 
    desc: "Define breakpoints for styling changes at different screen widths."
  },
  { 
    property: "relative units", 
    example: "width: 50%; font-size: 1.2rem;", 
    desc: "Use %, em, rem, vw, vh units for scalable and flexible layouts."
  },
  { 
    property: "flexible grids", 
    example: "display: flex; flex-wrap: wrap;", 
    desc: "Combine flexbox or grid layouts with percentages for responsive layouts."
  },
  { 
    property: "viewport meta tag", 
    example: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>", 
    desc: "Ensures the layout scales correctly on mobile devices."
  }
];

const jsBasics = [
    { 
        keyword: "console.log()", 
        desc: "Prints messages to the browser console. Useful for debugging or checking values." 
    },
    { 
        keyword: "Data Types", 
        desc: "Primitive types: string, number, boolean, null, undefined, symbol. Objects and arrays are reference types." 
    },
    { 
        keyword: "Operators", 
        desc: "Arithmetic (+, -, *, /), comparison (==, ===, >, <), logical (&&, ||, !) operators are used for operations." 
    },
    { 
        keyword: "Comments", 
        desc: "Single-line comments: // Comment, Multi-line: /* Comment */" 
    },
    { 
        keyword: "Statements & Expressions", 
        desc: "Statements perform actions (e.g., let x = 5;), expressions evaluate to a value (e.g., 5 + 3)." 
    },
    { 
        keyword: "Type Conversion", 
        desc: "Converting between types: Number('5') → 5, String(5) → '5', Boolean(0) → false." 
    }
];

const jsConditionals = [
    { 
        keyword: "if / else", 
        desc: "Executes code based on a condition. 'if' runs when the condition is true, 'else' runs when false. Example: if (age >= 18) { ... } else { ... }" 
    },
    { 
        keyword: "else if", 
        desc: "Checks multiple conditions in sequence. Example: if (score > 90) {...} else if (score > 70) {...} else {...}" 
    },
    { 
        keyword: "switch", 
        desc: "Executes one block of code among many options based on a value. Example: switch(day) { case 'Monday': ... break; default: ... }" 
    }
];

const jsLoops = [
    { 
        keyword: "for", 
        desc: "Repeats a block of code a known number of times. Example: for (let i = 0; i < 5; i++) { console.log(i); } \nAlso see: while loop for unknown iterations." 
    },
    { 
        keyword: "while", 
        desc: "Repeats a block of code while a condition is true. Example: let i = 0; while(i < 5) { console.log(i); i++; }" 
    },
    { 
        keyword: "do...while", 
        desc: "Similar to while loop but executes the block at least once before checking the condition. Example: do { console.log(i); i++; } while(i < 5);" 
    },
    { 
        keyword: "for...in", 
        desc: "Loops through the keys of an object. Example: for (let key in obj) { console.log(key, obj[key]); }" 
    },
    { 
        keyword: "for...of", 
        desc: "Loops through the values of iterable objects like arrays. Example: for (let val of arr) { console.log(val); }" 
    }
];
const jsArrays = [
    { keyword: "Array Declaration", desc: "Arrays store multiple values. Example: let arr = [1, 2, 3]; console.log(arr); // [1,2,3]" },
    { keyword: "push()", desc: "Adds one or more elements to the end of an array. Example: arr.push(4); console.log(arr); // [1,2,3,4]" },
    { keyword: "pop()", desc: "Removes the last element from an array. Example: arr.pop(); console.log(arr); // [1,2,3]" },
    { keyword: "shift()", desc: "Removes the first element from an array. Example: arr.shift(); console.log(arr); // [2,3]" },
    { keyword: "unshift()", desc: "Adds elements to the beginning of an array. Example: arr.unshift(0); console.log(arr); // [0,2,3]" },
    { keyword: "length", desc: "Returns the number of elements in the array. Example: console.log(arr.length); // 3" },
    { keyword: "indexOf()", desc: "Returns the index of a specified element, -1 if not found. Example: console.log(arr.indexOf(2)); // 1" },
    { keyword: "slice()", desc: "Returns a shallow copy of a portion of the array. Example: console.log(arr.slice(1,3)); // [2,3]" },
    { keyword: "splice()", desc: "Adds/removes elements at a specific position. Example: arr.splice(1,1,'a'); console.log(arr); // [0,'a',3]" }
];

const jsObjects = [
    { keyword: "Object Declaration", desc: "Objects store data in key-value pairs. Example: let obj = {name: 'John', age: 25}; console.log(obj);" },
    { keyword: "Access Properties", desc: "Use dot or bracket notation. Example: console.log(obj.name); // John, console.log(obj['age']); // 25" },
    { keyword: "Add/Update Property", desc: "Add or change a property. Example: obj.city = 'London'; console.log(obj.city); // London" },
    { keyword: "Delete Property", desc: "Remove a property. Example: delete obj.age; console.log(obj); // {name: 'John', city: 'London'}" },
    { keyword: "Object.keys()", desc: "Returns all keys as an array. Example: console.log(Object.keys(obj)); // ['name','city']" },
    { keyword: "Object.values()", desc: "Returns all values as an array. Example: console.log(Object.values(obj)); // ['John','London']" },
    { keyword: "Object.entries()", desc: "Returns [key, value] pairs. Example: console.log(Object.entries(obj)); // [['name','John'], ['city','London']]" }
];

const jsFunctions = [
    { keyword: "Function Declaration", desc: "Defines a function. Example: function greet(name) { return 'Hello ' + name; } console.log(greet('Alice')); // Hello Alice" },
    { keyword: "Function Expression", desc: "Assign a function to a variable. Example: const greet = function(name) { return 'Hi ' + name; }; console.log(greet('Bob')); // Hi Bob" },
    { keyword: "Arrow Functions", desc: "Short syntax for functions. Example: const greet = name => 'Hey ' + name; console.log(greet('Eve')); // Hey Eve" },
    { keyword: "Parameters & Arguments", desc: "Functions take inputs (parameters) and receive values (arguments). Example: function add(a,b){ return a+b; } console.log(add(2,3)); // 5" },
    { keyword: "Return Statement", desc: "Returns a value to the caller. Example: function square(x){ return x*x; } console.log(square(4)); // 16" },
    { keyword: "Default Parameters", desc: "Provide default values. Example: function greet(name='Guest'){ return 'Hello ' + name; } console.log(greet()); // Hello Guest" },
    { keyword: "Rest Parameters", desc: "Collect multiple arguments into an array. Example: function sum(...nums){ return nums.reduce((a,b)=>a+b); } console.log(sum(1,2,3)); // 6" }
];



function escapeHTML(html) {
    return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function loadMoreHTML() {
    moreHTML.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.tag)}</strong> :<br>${escapeHTML(item.desc)}`;
        htmlContent.appendChild(p);
    });

    const attrHeading = document.createElement("h3");
    attrHeading.textContent = "HTML Attributes";

    attrHeading.style.backgroundColor = "rgb(34, 116, 139)";
    attrHeading.style.color = "white";
    attrHeading.style.padding = "5px 15px";
    attrHeading.style.borderRadius = "5px";
    attrHeading.style.marginTop = "20px";
    htmlContent.appendChild(attrHeading);

    htmlAttributes.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${item.attr}</strong> :<br>${item.desc}`;
        htmlContent.appendChild(p);
    });

    const imgHeading = document.createElement("h3");
    imgHeading.textContent = "HTML Images";

    imgHeading.style.backgroundColor = "rgb(34, 116, 139)";
    imgHeading.style.color = "white";
    imgHeading.style.padding = "5px 15px";
    imgHeading.style.borderRadius = "5px";
    imgHeading.style.marginTop = "20px";
    htmlContent.appendChild(imgHeading);

    imageAttributes.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${item.attr}</strong> :<br>${item.desc}`;
        htmlContent.appendChild(p);
    });

    const tbHeading = document.createElement("h3");
    tbHeading.textContent = "HTML Tables"

    tbHeading.style.backgroundColor = "rgb(34, 116, 139)";
    tbHeading.style.color = "white";
    tbHeading.style.padding = "5px 15px";
    tbHeading.style.borderRadius = "5px";
    tbHeading.style.marginTop = "20px";
    htmlContent.appendChild(tbHeading);

    tableAttributes.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${item.attr}</strong> : <br>${item.desc}`;
        htmlContent.appendChild(p);
    })

    const formHeading = document.createElement("h3");
    formHeading.textContent = "HTML Forms"

    formHeading.style.backgroundColor = "rgb(34, 116, 139)";
    formHeading.style.color = "white";
    formHeading.style.padding = "5px 15px";
    formHeading.style.borderRadius = "5px";
    formHeading.style.marginTop = "20px";
    htmlContent.appendChild(formHeading);

    formAttributes.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${item.attr}</strong> : <br>${item.desc}`;
        htmlContent.appendChild(p);
    })


    exploreBtnHTML.style.display = "none";
}

function loadMoreCSS(){
    cssSelectors.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.selector)}</strong> :<br>${escapeHTML(item.desc)}`;
        cssContent.appendChild(p);
    });

    const colorHeading = document.createElement("h3");
    colorHeading.textContent = "CSS Colors"

    colorHeading.style.backgroundColor = "rgb(34, 116, 139)";
    colorHeading.style.color = "white";
    colorHeading.style.padding = "5px 15px";
    colorHeading.style.borderRadius = "5px";
    colorHeading.style.marginTop = "20px";
    cssContent.appendChild(colorHeading);

    cssSelectors.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.selector)}</strong> :<br>${escapeHTML(item.desc)}`;
        cssContent.appendChild(p);
    });

    const backgrounProperties = document.createElement("h3");
    backgrounProperties.textContent = "CSS Backgrounds"

    backgrounProperties.style.backgroundColor = "rgb(34, 116, 139)";
    backgrounProperties.style.color = "white";
    backgrounProperties.style.padding = "5px 15px";
    backgrounProperties.style.borderRadius = "5px";
    backgrounProperties.style.marginTop = "20px";
    cssContent.appendChild(backgrounProperties);

    cssBackgrounds.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.property)}</strong> : <br><em>${escapeHTML(item.example)}</em><br>${escapeHTML(item.desc)}`;
        cssContent.appendChild(p);
    });


    const border = document.createElement("h3");
    border.textContent = "CSS Borders"

    border.style.backgroundColor = "rgb(34, 116, 139)";
    border.style.color = "white";
    border.style.padding = "5px 15px";
    border.style.borderRadius = "5px";
    border.style.marginTop = "20px";
    cssContent.appendChild(border);

    cssBorders.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.property)}</strong> : <br><em>${escapeHTML(item.example)}</em><br>${escapeHTML(item.desc)}`;
        cssContent.appendChild(p);
    });

    const margins = document.createElement("h3");
    margins.textContent = "CSS Margins"

    margins.style.backgroundColor = "rgb(34, 116, 139)";
    margins.style.color = "white";
    margins.style.padding = "5px 15px";
    margins.style.borderRadius = "5px";
    margins.style.marginTop = "20px";
    cssContent.appendChild(margins);

    cssMargins.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.property)}</strong> : <br><em>${escapeHTML(item.example)}</em><br>${escapeHTML(item.desc)}`;
        cssContent.appendChild(p);
    });

    const boxModel = document.createElement("h3");
    boxModel.textContent = "CSS BOX MODEL"

    boxModel.style.backgroundColor = "rgb(34, 116, 139)";
    boxModel.style.color = "white";
    boxModel.style.padding = "5px 15px";
    boxModel.style.borderRadius = "5px";
    boxModel.style.marginTop = "20px";
    cssContent.appendChild(boxModel);

    cssBoxModel.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.property)}</strong> : <br><em>${escapeHTML(item.example)}</em><br>${escapeHTML(item.desc)}`;
        cssContent.appendChild(p);
    });

    const fonts = document.createElement("h3");
    fonts.textContent = "CSS FONTS"

    fonts.style.backgroundColor = "rgb(34, 116, 139)";
    fonts.style.color = "white";
    fonts.style.padding = "5px 15px";
    fonts.style.borderRadius = "5px";
    fonts.style.marginTop = "20px";
    cssContent.appendChild(fonts);

    cssFonts.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.property)}</strong> : <br><em>${escapeHTML(item.example)}</em><br>${escapeHTML(item.desc)}`;
        cssContent.appendChild(p);
    });

    const flexbox = document.createElement("h3");
    flexbox.textContent = "CSS FlexBox"

    flexbox.style.backgroundColor = "rgb(34, 116, 139)";
    flexbox.style.color = "white";
    flexbox.style.padding = "5px 15px";
    flexbox.style.borderRadius = "5px";
    flexbox.style.marginTop = "20px";
    cssContent.appendChild(flexbox);

    cssFlexbox.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.property)}</strong> : <br><em>${escapeHTML(item.example)}</em><br>${escapeHTML(item.desc)}`;
        cssContent.appendChild(p);
    });

    const responsives = document.createElement("h3");
    responsives.textContent = "CSS Responsive"

    responsives.style.backgroundColor = "rgb(34, 116, 139)";
    responsives.style.color = "white";
    responsives.style.padding = "5px 15px";
    responsives.style.borderRadius = "5px";
    responsives.style.marginTop = "20px";
    cssContent.appendChild(responsives);

    cssResponsive.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.property)}</strong> : <br><em>${escapeHTML(item.example)}</em><br>${escapeHTML(item.desc)}`;
        cssContent.appendChild(p);
    });

    exploreBtnCss.style.display = "none";
}

function loadMoreJs(){
    jsBasics.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.keyword)}</strong> :<br>${escapeHTML(item.desc)}`;
        jsContent.appendChild(p);
    });

    const conditionalStatements = document.createElement("h3");
    conditionalStatements.textContent = "Conditional Statements";
    conditionalStatements.style.backgroundColor = "rgb(34, 116, 139)";
    conditionalStatements.style.color = "white";
    conditionalStatements.style.padding = "5px 15px";
    conditionalStatements.style.borderRadius = "5px";
    conditionalStatements.style.marginTop = "20px";
    jsContent.appendChild(conditionalStatements);

    jsConditionals.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.keyword)}</strong> :<br>${escapeHTML(item.desc)}`;
        jsContent.appendChild(p);
    });

    const loops = document.createElement("h3");
    loops.textContent = "Loops";
    loops.style.backgroundColor = "rgb(34, 116, 139)";
    loops.style.color = "white";
    loops.style.padding = "5px 15px";
    loops.style.borderRadius = "5px";
    loops.style.marginTop = "20px";
    jsContent.appendChild(loops);

    jsLoops.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.keyword)}</strong> :<br>${escapeHTML(item.desc)}`;
        jsContent.appendChild(p);
    });

    const array = document.createElement("h3");
    array.textContent = "Array";
    array.style.backgroundColor = "rgb(34, 116, 139)";
    array.style.color = "white";
    array.style.padding = "5px 15px";
    array.style.borderRadius = "5px";
    array.style.marginTop = "20px";
    jsContent.appendChild(array);

    jsArrays.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.keyword)}</strong> :<br>${escapeHTML(item.desc)}`;
        jsContent.appendChild(p);
    });

    const objects = document.createElement("h3");
    objects.textContent = "Array";
    objects.style.backgroundColor = "rgb(34, 116, 139)";
    objects.style.color = "white";
    objects.style.padding = "5px 15px";
    objects.style.borderRadius = "5px";
    objects.style.marginTop = "20px";
    jsContent.appendChild(objects);

    jsObjects.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.keyword)}</strong> :<br>${escapeHTML(item.desc)}`;
        jsContent.appendChild(p);
    });

    const functions = document.createElement("h3");
    functions.textContent = "Array";
    functions.style.backgroundColor = "rgb(34, 116, 139)";
    functions.style.color = "white";
    functions.style.padding = "5px 15px";
    functions.style.borderRadius = "5px";
    functions.style.marginTop = "20px";
    jsContent.appendChild(functions);

    jsFunctions.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${escapeHTML(item.keyword)}</strong> :<br>${escapeHTML(item.desc)}`;
        jsContent.appendChild(p);
    });

    exploreBtnJs.style.display = "none";
}
exploreBtnHTML.onclick = loadMoreHTML;
exploreBtnCss.onclick = loadMoreCSS;
exploreBtnJs.onclick = loadMoreJs;

window.addEventListener("load", () => {
  window.location.hash = "#html";
});