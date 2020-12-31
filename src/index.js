import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Get books object. When importing a named module, you need to use the EXACT same name.
import { books } from './books'; // Don't need extension for JS files...

// Import Book. When importing a default module, you can use any
// name to reference it. For example, you could refer to Book 
// below as anything you wanted to...provided that you also use
// that name in the code following the import too!
import Book from './Book';


// Stateless functional component
// Always (must) return JSX
/*

   JSX Rules:

    - Return (only) a single element;
    - div / section / article or fragment;
    - use camelCase for html attribute
    - className instead of class;
    - close every element;
    - formatting.

*/


// Function name (the 'component') needs to have upper case first 
// letter for React...in this context.
function BookList () {

  // return (
  //   <section className="booklist">
  //     { books.map((theBook) => {
  //         return <Book key={theBook.id} book={theBook}></Book>
  //       })
  //     }
  //   </section>
  // );

  // Using the 'spread' (...) operator below.
  return (
    <section className="booklist">
      { books.map((theBook) => {
          return <Book key={theBook.id} {...theBook}></Book>
        })
      }
    </section>
  );

}


ReactDom.render(<BookList />, document.getElementById('root'));
