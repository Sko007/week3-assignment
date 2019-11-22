import React from "react";

function Quote(props) {
  console.log("what is inside props", props.quotes);

  return (
    <div>
      {props.quotes.map((quotes, key) => {
        return (
          <div key={key}>
            <p>{quotes.quoteText}</p>
            <h3>{quotes.quoteAuthor}</h3>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default Quote;
