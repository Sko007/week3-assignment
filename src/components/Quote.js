import React from "react";

function Quote(props) {
  console.log("what is inside props", props.quotes);

  return (
    <div>
      {props.quotes.map((quotes, key) => {
        return (
          <div key={key}>
            <p>{quotes.quoteText}</p>
            <p>{quotes.quoteAuthor}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Quote;
