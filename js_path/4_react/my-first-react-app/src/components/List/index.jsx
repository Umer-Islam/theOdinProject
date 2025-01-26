const poem = {
    lines: [
      "I write, erase, rewrite",
      "Erase again, and then",
      "A poppy blooms.",
    ],
  };
  
  export default function List() {
    let output = [];
  
    // Fill the output array
    poem.lines.forEach((line,index) =>
      poem.lines[index] != poem.lines[poem.lines.length - 1]
        ? output.push(line) && output.push(<hr />)
        : output.push(poem.lines[poem.lines.length - 1])
    );
    console.log(output);
    return <article>{output}</article>;
  }
  