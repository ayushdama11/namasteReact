// in {} we can give attributes like id or class to the element than we can write it inside this curly braces 

// react.createElement returns an object -we can see this in heading.

// const heading= React.createElement("h1", {id: "heading"}, "hello world from react")

// console.log(heading);   // will return an object   

// const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);   
//  render will convert object to the tag - heading is an object and it will convert it into tag and render it 



/**
 * 
 * <div id="parent">
 *      <div id= "child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 *      <div id= "child2">
 * </div>
*/

// const parent=React.createElement(   //object
//     "div", 
//     {id:"parent"},
//     React.createElement("div",{id:"child"},  [
//         React.createElement("h1",{},"I am an h1 tag"),
//         React.createElement("h2",{},"I am an h2 tag")
//     ])
// );

// console.log(parent);
// root.render(parent);



/**
 * 
 * <div id="parent">
 *      <div id= "child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 *      <div id= "child2">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 * </div>
*/ 


const parent= React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{id:"heading"},"this is an h1 tag"),
            React.createElement("h2",{},"this is an h2 tag")
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{id:"heading"},"this is an h1 tag"),
            React.createElement("h2",{},"this is an h2 tag")
        ])
    ]
);

// here we can see that the code has become very complex, so we can sort this out using- jsx 

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


