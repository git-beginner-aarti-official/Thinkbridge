const htmlContent = document.getElementById("html-content");
const exploreBtnHTML = document.getElementById("explore-html");

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

exploreBtnHTML.onclick = loadMoreHTML;

window.addEventListener("load", () => {
  window.location.hash = "#html";
});