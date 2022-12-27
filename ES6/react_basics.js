//ReactJS? - JS Library used for creating UI
//ReactJS History?
//Advantages - SPA - No page reloads, No extra wait time
//DOM??? Virtual DOM?? - Document Object Model

//Virtual DOM - "The Virtual DOM(VDOM) is a programming concept where an ideal, or 'virtual',
//representation of a UI is kept in memory and synced with the 'real' DOM by a library
//such as ReactDOM. This process is called RECONCILIATION"

//ES6 - Babel : compiler to convert ES6 code to ES5.

//Single Page Application & Multiple Page Application

//We will create sample react app

//We will push the code to GIT

//JSX - HTML-looking syntax

//Components - Independent & Reusable code that can be plugged anywhere, anytime. 
//It also allows to make changes to code dynamically.
//Tyes of components - Functional(Stateless) & Class(Stateful)

//Switch from functional component to class component
//Rendering content Dynamically
//summary - React basics part 1


// Summary - React Basics(part 1)
// Environment Setup
// Code Cleanup
// JSX - HTML looking syntax
// Difference between JSX and HTML
// Curly Braces
// React.creatElement() method
// ReactDOM.render() method
// Components
// Styling componets
// Dynamically injecting data using map() method




//React basics part 2
//Props - Important : It help you to pass values from a parent component to a child component so that they can be
//                    accessed within the child component
//Event Handling
//Add users

//State - Important :  It is something that is controlled within a component, unlike props, 
//                     which are controlled by a parent component. Also, a change in state calls
//                     the render() method again. render() method is present only inside a class
//                     component because a class component extends the Component class.

//Note:
//1. State can be maintained inside a class component only.
//2. State is always initialised inside the class constructor.
//3. In case you define the constructor of a class, you need to call the super() method
//   in the first statement of the construcor definition. This method calls the construtor
//   of the parent class.
//4. To set the state, you must always use the setState() method and must never directly
//   manipulate the application's state. However, setState() should never be called inside
//   the constructor.
//5. Whenever state is changed, the render() method of the class is called again.

//Component Lifecycle - Important
//To refer - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
//1. The component lifecycle in React varies from one process to another.
//2. There are totally 3 process - Mounting, Updating, and Unmounting.
//Mounting - It refers to the instance(object is an instance of class) 
//           of a component being created and inserted into the DOM.
//Updating - denotes the instance of a component being updated by props or state.
//Unmounting - refers to the component being removed from DOM.

// MOUNTING - Inside Mounting process, a component's lifecycle is defined by the following methods,
// 1. constructor()
// 2. render()
// 3. componentDidMount()

//********************** Task: ********************************
// componentDidUpdate()
// componentWillUnmount()


//Smart vs Dumb component
//Smart Component - It describes how things work(container - Provides data and logic)
//Dumb Component - It describes how things look(presentational - Presents only data on the DOM)

//Routing - Important : Based on the URL that a user visits, specific content is 
//          loaded on the page (Router --> Routes --> Route)
//Delete Users
//React Hooks - Important



<html>
  <head>
  </head>
  <body>
    <div>
      TEST 1
    </div>
    <div>
      TEST 4
    </div>
  </body>
</html>
