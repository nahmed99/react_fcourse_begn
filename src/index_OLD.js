import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';


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

// set up variables

// Create objecrt of details for book:
const firstBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/51horS9CS6L._AC_UL320_SR320,320_.jpg",
  title: "Iqra.Asia",
  author: "Iqra.Asia"
}

const secondBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/61sQ-uGXCrL._AC_UL320_SR228,320_.jpg',
  title: "The PS5",
  author: "Sony"
}

// const title = "Iqra.Asia";
// const author = "Zainex.com";  
// const img = "https://images-eu.ssl-images-amazon.com/images/I/51horS9CS6L._AC_UL320_SR320,320_.jpg";



// Function name (the 'component') needs to have upper case first 
// letter for React...in this context.
function BookList () {

  return (
    <section className="booklist">
      <Book 
        img={ firstBook.img } 
        title={ firstBook.title } 
        author={ firstBook.author }
      >
        <p>
          This paragraph can be accessed by referencing 'children' in props. 
          See the reference in the code below.
        </p>
      </Book>


      <Book 
        img={ secondBook.img }
        title={ secondBook.title } 
        author={ secondBook.author }
      />
      
      {/* <Book title='This is the title' number={25} /> */}
    </section>
  );
}


// Placed outside of the function to show that it will still work.
// const author = "Zainex.com";  

// const Book = (props) => {

//   console.log(props);

//   // const title = "Iqra.Asia";

//   // const theNumber = () => {
//   //   return ("This preceeds the title " + title);
//   // }
  
//   // return  <article className="book">
//   //           <img src={ props.img } alt="" />
//   //           <h1>{ props.title }</h1>
//   //           <h4>{ props.author }</h4>

//   //           {/* <h4>{ author.toUpperCase() }</h4> */}
//   //           {/* <p>{theNumber() + " 71"}</p>  - just a test to see that this works!*/}

//   //           {/* <p>{ props.job }</p>
//   //           <p>{ props.title }</p>
//   //           <p>{ props.number }</p> */}

//   //         </article>

//   // Destructuring using an identifier
//   const {img, title, author} = props;

//     return  <article className="book">
//             <img src={ img } alt="" />
//             <h1>{ title }</h1>
//             <h4>{ author }</h4>
//           </article>

// }

// Destructuring in the 'function header'
const Book = ({ img, title, author, children }) => {

  console.log({img, title, author});

  return  <article className="book">
            <img src={ img } alt="" />
            <h1>{ title }</h1>
            { children }
            <h4>{ author }</h4>
          </article>

}


/*

  The following works too...however, I find it better to 'merge' all
  of the elements as done above.

  NOTE: the active line BELOW this commented out bit!!!
  NOTE: the active line BELOW this commented out bit!!!
  NOTE: the active line BELOW this commented out bit!!!
  NOTE: the active line BELOW this commented out bit!!!
  NOTE: the active line BELOW this commented out bit!!!


const Book = () => {

  const theNumber = () => {
    return ("This preceeds the title " + title);
  }

  return <article className="book">
          <Image></Image>
          <Title />
          <Author />
          <p>{theNumber() + " 71"}</p>  - just a test to see that this works!
        </article>
}

const Image = () => {
  return <img src="https://images-eu.ssl-images-amazon.com/images/I/51horS9CS6L._AC_UL320_SR320,320_.jpg" alt="" />
}

const Title = () => <h1>Iqra.Asia</h1>
const Author = () => <h4 style={ {color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'} }>Zainex.com</h4>
*/


ReactDom.render(<BookList />, document.getElementById('root'));
