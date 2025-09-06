const htmlContent = document.getElementById("html-content");
const exploreBtnHTML = document.getElementById("explore-html");

const moreHTML = [
    { tag: "<h1>", desc: "Defines the main heading of a page. It has higher importance" },
    { tag: "<h2>", desc: "Defines a sub-heading. Less important than <h1> but more than <h3>" },
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
    { tag: "<a>", desc: "Defines a hyperlink to another page or another resource." },
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
    attrHeading.style.padding = "5px 10px";
    attrHeading.style.borderRadius = "5px";
    attrHeading.style.marginTop = "20px";
    htmlContent.appendChild(attrHeading);

    htmlAttributes.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${item.attr}</strong> :<br>${item.desc}`;
        htmlContent.appendChild(p);
    });

    
    exploreBtnHTML.style.display = "none";
}
exploreBtnHTML.onclick = loadMoreHTML;