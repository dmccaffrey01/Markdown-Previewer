function updatePreview() {
    // Get preview element
    let previewElement = document.getElementById("preview");
    // Get editor value
    let editorVal = document.getElementById("editor").value;
    // Get marked value
    let markedVal = marked.parse(editorVal);
    // Change preview to marked value
    previewElement.innerHTML = markedVal;
}

function setDefault() {
    // Set default text
    let defaultText = `\
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine ==  && lastLine ==) {
    return multiLineCode;
    }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Yin Yang logo](https://images.vexels.com/media/users/3/211859/isolated/lists/5c58d82a06605734c6f2b1a3fe925f83-japan-taijitu-yin-yang.png)
    `
    // Grab the editor and preview
    let editor = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
    // Set editor value and preview HTML
    editor.value = defaultText;
    previewElement.innerHTML = marked.parse(defaultText);
}

