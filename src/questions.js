export default [
  {
    id: 'q1',
    text: 'Which of the following definitions best describes React.js?',
    answers: [
      'A library to build user interfaces with help of declarative code.',
      'A library for managing state in web applications.',
      'A framework to build user interfaces with help of imperative code.',
      'A library used for building mobile applications only.',
    ],
  },
  {
    id: 'q2',
    text: 'What purpose do React hooks serve?',
    answers: [
      'Enabling the use of state and other React features in functional components.',
      'Creating responsive layouts in React applications.',
      'Handling errors within the application.',
      'Part of the Redux library for managing global state.',
    ],
  },
  {
    id: 'q3',
    text: 'Can you identify what JSX is?',
    answers: [
      'A JavaScript extension that adds HTML-like syntax to JavaScript.',
      'A JavaScript library for building dynamic user interfaces.',
      'A specific HTML version that was explicitly created for React.',
      'A tool for making HTTP requests in a React application.',
    ],
  },
  {
    id: 'q4',
    text: 'What is the most common way to create a component in React?',
    answers: [
      'By defining a JavaScript function that returns a renderable value.',
      'By defining a custom HTML tag in JavaScript.',
      'By creating a file with a .jsx extension.',
      'By using the "new" keyword followed by the component name.',
    ],
  },
  {
    id: 'q5',
    text: 'What does the term "React state" imply?',
    answers: [
      'An object in a component that holds values and may cause the component to render on change.',
      'The lifecycle phase a React component is in.',
      'The overall status of a React application, including all props and components.',
      'A library for managing global state in React applications.',
    ],
  },
  {
    id: 'q6',
    text: 'How do you typically render list content in React apps?',
    answers: [
      'By using the map() method to iterate over an array of data and returning JSX.',
      'By using the for() loop to iterate over an array of data and returning JSX.',
      'By using the forEach() method to iterate over an array of data and returning JSX.',
      'By using the loop() method to iterate over an array of data and returning JSX.',
    ],
  },
  {
    id: 'q7',
    text: 'Which approach can NOT be used to render content conditionally?',
    answers: [
      'Using a the #if template syntax.',
      'Using a ternary operator.',
      'Using the && operator.',
      'Using an if-else statement.',
    ],
  },
  {
    id: 'q8',
    text: 'What is the purpose of React’s useEffect hook?',
    answers: [
      'To perform side effects in function components.',
      'To initialize state in function components.',
      'To handle user events in components.',
      'To create new context providers.',
    ],
  },
  {
    id: 'q9',
    text: 'Which of the following can update a component’s state?',
    answers: [
      'setState or useState.',
      'props.',
      'return.',
      'throw.',
    ],
  },
  {
    id: 'q10',
    text: 'What does the React.createContext function do?',
    answers: [
      'Creates a Context object to pass data through the component tree without manually passing props.',
      'Creates a custom hook for data fetching.',
      'Initializes state for components.',
      'Creates event listeners for user interactions.',
    ],
  },
  {
    id: 'q11',
    text: 'What is the role of a key in React?',
    answers: [
      'To help React identify which items have changed, are added, or are removed.',
      'To initialize state in components.',
      'To provide unique identifiers for every HTML element in the DOM.',
      'To indicate a component’s ID.',
    ],
  },
  {
    id: 'q12',
    text: 'What is the purpose of the React.memo function?',
    answers: [
      'It optimizes functional components by memoizing the result to avoid unnecessary re-renders.',
      'It creates a deep copy of the props passed to a component.',
      'It is used to create context in React applications.',
      'It manages asynchronous operations within components.',
    ],
  },
  {
    id: 'q13',
    text: 'What is Redux commonly used for in React applications?',
    answers: [
      'For managing global state across different components.',
      'For rendering lists in components.',
      'For styling components with dynamic properties.',
      'For handling network requests.',
    ],
  },
  {
    id: 'q14',
    text: 'What does the "useReducer" hook do?',
    answers: [
      'Manages complex state logic by dispatching actions in a reducer function.',
      'Provides a way to manage global state in React.',
      'Fetches data from an API and stores it in state.',
      'Handles asynchronous operations within components.',
    ],
  },
  {
    id: 'q15',
    text: 'Which of the following is a characteristic of a controlled component in React?',
    answers: [
      'Its form data is handled by React state.',
      'Its form data is handled by the DOM.',
      'It uses refs for managing state.',
      'It cannot update its own value without external input.',
    ],
  },
  {
    id: 'q16',
    text: 'How do you pass data from a parent component to a child component in React?',
    answers: [
      'By using props.',
      'By using state.',
      'By using context directly.',
      'By calling setState in the child component.',
    ],
  },
  {
    id: 'q17',
    text: 'What does the "key" prop do when passed to a list item?',
    answers: [
      'Helps React keep track of which items are changed, added, or removed.',
      'Allows each item to have a unique ID in the database.',
      'Specifies the order in which items are displayed.',
      'Keeps each item from re-rendering.',
    ],
  },
  {
    id: 'q18',
    text: 'How is the virtual DOM different from the real DOM?',
    answers: [
      'It is an in-memory representation of the real DOM that improves rendering efficiency.',
      'It is only used when developing mobile applications.',
      'It is the actual DOM structure rendered on the screen.',
      'It requires additional libraries to work.',
    ],
  },
  {
    id: 'q19',
    text: 'Which of the following does NOT trigger a re-render in React?',
    answers: [
      'Calling setState with the same value as the current state.',
      'Updating a key on an item in a list.',
      'Changing a prop passed down to a component.',
      'Mutating an object inside state directly.',
    ],
  },
  {
    id: 'q20',
    text: 'What is the role of the "children" prop in React?',
    answers: [
      'Allows a component to render nested elements passed between its opening and closing tags.',
      'Manages state within a child component.',
      'Adds event listeners to all child components.',
      'Allows a parent component to change the lifecycle of a child component.',
    ],
  },
  {
    id: 'q21',
    text: 'What is the use of the "useContext" hook in React?',
    answers: [
      'It allows components to access context values without passing props through every level of the tree.',
      'It manages the global state in a Redux store.',
      'It initializes the local state of a component.',
      'It is used to handle asynchronous data fetching in components.',
    ],
  },
  {
    id: 'q22',
    text: 'How can React be defined in terms of MVC architecture?',
    answers: [
      'It is primarily the View layer in MVC.',
      'It is used as the Model in MVC.',
      'It can replace the entire MVC architecture.',
      'It acts as the Controller layer in MVC.',
    ],
  },
  {
    id: 'q23',
    text: 'What does "lifting state up" mean in React?',
    answers: [
      'Moving state to the closest common ancestor of components that need it.',
      'Passing state from a child component to its parent.',
      'Sharing state directly between sibling components.',
      'Making state global so it can be accessed by any component.',
    ],
  },
  {
    id: 'q24',
    text: 'What is React’s Context API mainly used for?',
    answers: [
      'To share data across the component tree without passing props down manually.',
      'To create controlled components in forms.',
      'To manage complex state within a single component.',
      'To handle events within a component tree.',
    ],
  },
  {
    id: 'q25',
    text: 'In which lifecycle phase can you safely make AJAX requests in a class component?',
    answers: [
      'componentDidMount',
      'constructor',
      'render',
      'componentWillReceiveProps',
    ],
  },
  {
    id: 'q26',
    text: 'What does the "useRef" hook primarily do?',
    answers: [
      'Allows access to DOM elements and persists values between renders without causing re-renders.',
      'Creates a reference to a state variable.',
      'Adds event listeners to DOM elements.',
      'Initializes state in functional components.',
    ],
  },
  {
    id: 'q27',
    text: 'What is a side effect in React?',
    answers: [
      'Any operation that affects something outside the component, like fetching data.',
      'Updating a component’s local state.',
      'Changing the appearance of a component based on props.',
      'Passing data from a parent to a child component.',
    ],
  },
  {
    id: 'q28',
    text: 'Why would you use the "Fragment" component in React?',
    answers: [
      'To group multiple elements without adding extra nodes to the DOM.',
      'To define a reusable piece of UI.',
      'To create an isolated scope for styles.',
      'To manage conditional rendering of elements.',
    ],
  },
  {
    id: 'q29',
    text: 'What is the primary purpose of "ReactDOM.render"?',
    answers: [
      'To render a React element into the actual DOM.',
      'To update the virtual DOM when a component’s state changes.',
      'To create a new component instance.',
      'To add event listeners to DOM elements.',
    ],
  },
  {
    id: 'q30',
    text: 'What is the difference between "props" and "state" in React?',
    answers: [
      'Props are passed to components, while state is managed within the component.',
      'State is passed to components, while props are managed within the component.',
      'Props are mutable, while state is immutable.',
      'Props can only hold primitive values, while state can hold objects.',
    ],
  },
  {
    id: 'q31',
    text: 'Which hook would you use to optimize performance by memoizing expensive calculations?',
    answers: [
      'useMemo',
      'useCallback',
      'useRef',
      'useReducer',
    ],
  },
  {
    id: 'q32',
    text: 'What does the term "Pure Component" mean in React?',
    answers: [
      'A component that only re-renders if its props or state have changed.',
      'A component that does not have any children.',
      'A component that manages its own state without props.',
      'A component that is not affected by context.',
    ],
  },
  {
    id: 'q33',
    text: 'How can you prevent a component from re-rendering unnecessarily?',
    answers: [
      'By using React.memo or shouldComponentUpdate for class components.',
      'By using useEffect in the component.',
      'By passing props directly to the component.',
      'By not setting any state in the component.',
    ],
  },
  {
    id: 'q34',
    text: 'What does "hydrate" do in React?',
    answers: [
      'It attaches event listeners to server-rendered HTML.',
      'It fetches data from the server and stores it in state.',
      'It triggers a re-render of the component tree.',
      'It sets up the initial state of a component.',
    ],
  },
  {
    id: 'q35',
    text: 'Which hook allows you to cache a function definition?',
    answers: [
      'useCallback',
      'useMemo',
      'useEffect',
      'useState',
    ],
  },
  {
    id: 'q36',
    text: 'How can you ensure a component only mounts once?',
    answers: [
      'By passing an empty dependency array to useEffect.',
      'By using useState without an initial value.',
      'By creating a local variable instead of state.',
      'By using React.memo around the component.',
    ],
  },
  {
    id: 'q37',
    text: 'What does the "return" statement inside useEffect indicate?',
    answers: [
      'A cleanup function to run when the component unmounts or dependencies change.',
      'The value to be stored in state after the effect.',
      'The component’s render method.',
      'A function to re-run the effect immediately.',
    ],
  },
  {
    id: 'q38',
    text: 'What is the purpose of "React.lazy"?',
    answers: [
      'To dynamically import components only when they are needed.',
      'To suspend the rendering of a component until it is fully loaded.',
      'To delay updates to state variables.',
      'To handle errors that occur during rendering.',
    ],
  },
  {
    id: 'q39',
    text: 'How does the "Error Boundary" in React work?',
    answers: [
      'It catches JavaScript errors in the component tree below it and displays a fallback UI.',
      'It prevents components from re-rendering if there are syntax errors.',
      'It allows components to log errors in the console only.',
      'It prevents user actions that could trigger errors.',
    ],
  },
  {
    id: 'q40',
    text: 'What is a React Portal used for?',
    answers: [
      'Rendering child components outside the main DOM hierarchy.',
      'Passing props between deeply nested components.',
      'Allowing access to state in sibling components.',
      'Managing animations within a component.',
    ],
  },
  {
    id: 'q41',
    text: 'What is the "useLayoutEffect" hook for?',
    answers: [
      'To perform DOM manipulations after the render but before the browser paints.',
      'To handle asynchronous data fetching after the component renders.',
      'To add global event listeners to the document.',
      'To control the initial rendering of the component.',
    ]
  },{
    id: 'q42',
    text: 'Which hook would you use to manage a complex state object in React?',
    answers: [
      'useReducer',
      'useState',
      'useEffect',
      'useContext',
    ],
  },
  {
    id: 'q43',
    text: 'What is the purpose of keys in a list rendering in React?',
    answers: [
      'They help React identify which items have changed, are added, or removed.',
      'They serve as unique identifiers for components.',
      'They allow direct access to list elements by index.',
      'They are used to style list elements dynamically.',
    ],
  },
  {
    id: 'q44',
    text: 'What does the "children" prop do in React?',
    answers: [
      'It allows components to pass nested elements to other components.',
      'It represents a special state of a component.',
      'It renders all sibling components together.',
      'It stores props passed from parent components.',
    ],
  },
  {
    id: 'q45',
    text: 'Which method is best for passing data from a parent component to a child component?',
    answers: [
      'Using props.',
      'Using state.',
      'Using context.',
      'Using Redux.',
    ],
  },
  {
    id: 'q46',
    text: 'What is the purpose of React.StrictMode?',
    answers: [
      'To highlight potential problems in an application during development.',
      'To make components render faster.',
      'To enable production optimizations in development mode.',
      'To improve the security of React applications.',
    ],
  },
  {
    id: 'q47',
    text: 'What happens when you pass an array as a dependency in useEffect?',
    answers: [
      'The effect runs only when any of the dependency values change.',
      'The effect will run every time the component renders.',
      'The effect will not run at all.',
      'The effect will only run once when the component mounts.',
    ],
  },
  {
    id: 'q48',
    text: 'Why would you use React.memo for a component?',
    answers: [
      'To prevent unnecessary re-renders by memoizing the component output.',
      'To make the component stateful.',
      'To handle asynchronous events within the component.',
      'To allow context to be accessed within the component.',
    ],
  },
  {
    id: 'q49',
    text: 'How can you pass a function as a prop in React?',
    answers: [
      'By passing the function directly as a prop to the child component.',
      'By using context to provide the function to the child component.',
      'By storing the function in state and passing it as a prop.',
      'By wrapping the function in a memoized callback before passing it as a prop.',
    ],
  },
  {
    id: 'q50',
    text: 'What is "hydration" in the context of server-side rendering in React?',
    answers: [
      'The process of attaching event listeners to server-rendered HTML.',
      'Rendering a component into a specific HTML element in the DOM.',
      'Re-rendering components every time the server data changes.',
      'Initializing component state with data fetched from the server.',
    ],
  },
];
