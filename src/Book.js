import React from 'react';


// Destructuring in the 'function header'
const Book = (props) => {
  
  // const { img, title, author } = props.book; - is not using the 'spread' (...) operator
  const { img, title, author } = props; // if using the 'spread' operator as in this example.


  // attribute, eventHandler
  // onClick, onMouseOver

  const clickhandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Kidda Dunya? From ' + author);
  };

  const complexExample = (theAuthor) => {
    console.log(theAuthor);
  };

  
  // In the return below, if you use the function name and include brackets (for
  // example it you need to pass arguments to the function), then you are // 
  // automatically invoking the function (upon entry to the page). To prevent 
  // this happening, you will need to use an arrow function within the return, 
  // and then invoke your required function from there.
  return  <article className="book" onMouseOver={ () => { 
    console.log(title);
  }}>
            <img src={ img } alt="" onClick={ () => alert(title) } />
            <h1>{ title }</h1>
            <h4>{ author }</h4>
            <button type="button" onClick={ clickhandler }>reference example</button>
            <br />
            <button type="button" onClick={ () => complexExample(author) }>more complex example</button>
          </article>

}


// You can have multiple named exports, but only one default export per file.
export default Book;  