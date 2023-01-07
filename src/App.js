import React from "react";
import "./styles.css";
import { useState } from "react";
import marked from "marked";

export default function App() {
  let inlineCode = "`<div></div>`";
  let multiLineCode = [
    "```",
    "function() {",
    "console.log('Hello World!')}",
    "```"
  ];

  let defaultText = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, ${inlineCode}, between 2 backticks.


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

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

Here's some multi-line code:

${multiLineCode[0]}
${multiLineCode[1]}
${multiLineCode[2]}
${multiLineCode[3]}

`;

  const [text, setText] = useState(defaultText);

  marked.setOptions({
    breaks: true,
    gfm: true
  });
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="container">
      <div className="input-box">
        <h2 className="input-box_heading">Editor</h2>
        <textarea id="editor" onChange={changeHandler} value={text}></textarea>
      </div>
      <div className="output-box">
        <h2 className="output-box_heading">Previewer</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
        ></div>
      </div>
    </div>
  );
}
