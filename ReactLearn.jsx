import React from 'react';
import ReactDOM from 'react-dom';

//NB: A component should only have one job

//jsx expressions must have one outermost element (typically a div)

const myDiv = (
  <div id="outermost element">
    <h1> Hello world</h1>
  </div>
);

//ReactDOM should have a jsx expression as the first argument
//the second argument finds the element with id = 'app' in the html(external) file to render to
ReactDOM.render(
  <h1>Hello world</h1>,
  document.getElementById('app')
);



// the first argument in ReactDOM can be anything that evalautes to a jsx expression
//thus can be replaced by a variable containing jsx
const myList = (
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
);

ReactDOM.render(
  myList,
  document.getElementById('app')
);


//html class has to be replaced with className since class is a reserved word in js
myDiv = <div className="big">I AM A BIG DIV</div>


// Write code within curly brackets to run them as normal javascript
ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);

//example 2
const theBestString = 'tralalalala i am da best';

ReactDOM.render(
  <h1>{theBestString}</h1>,
  document.getElementById('app')
);

//............................................................
//When writing JSX, it’s common to use variables to set attributes.
const sideLength = "200px";

const panda = (
  <img
    src="images/panda.jpg"
    alt="panda"
    height={sideLength}
    width={sideLength} />
);

//Event listeners
<div>
  function myFunc() {
    alert('Make myFunc the pFunc... omg that was horrible i am so sorry')
  }

  <img onClick={myFunc} />

  <img onMouseEnter={myFunc} />
</div>

/*Note that in HTML, event listener names are written in all lowercase,
such as onclick or onmouseover. In JSX, event listener names are written in
camelCase, such as onClick or onMouseOver. */


//..............................................................................
//NB: you can not inject an if statement into a JSX expression.
//Below if how to use IF statements with jsx...don't wrap them inside the jsx expressions

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message,
  document.getElementById('app')
);

//ternary operator is used nore often in react...ex: age >= drinkingAge ? truthy : falsy
//Example below

function coinToss() {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
  img,
  document.getElementById('app')
);

// Another way to use conditionals....The list item will only display if not judgemental
// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
  favoriteFoods,
  document.getElementById('app')
);
//............................................................
//using map is the most common way to 
//Use i to set unique keys for each list item
const people = ['ben', 'john', 'paul'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  string => <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{peopleLis}</ul>,
  document.getElementById('app')
)

//...........................................................
//Classes
// Class names must begin with a capital letter
//render method must always contain a return statement
class MyComponentClass extends React.Component {
  render() {
    return (<h1>Hello world</h1>);
  }
}

ReactDOM.render(
  <MyComponentClass />, //creates instance of the component class
  document.getElementById('app')
);


//example 2
const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width: '200px'
};

class RedPanda extends React.Component {
  render() {

    //I can also put code before the return
    let ColorR;
    if (!apocalypse) {
      ColorR = 'Red'
    } else {
      ColorR = 'Black'
    }

    return (
      <div>
        <h1>Cute {ColorR} Panda</h1>
        <img
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
      </div>
    );
  }
}

ReactDOM.render(
  <RedPanda />,
  document.getElementById('app')
);

//......................................................................
//Getter methods and this
class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }

  render() {
    return <h1>I like {this.food}.</h1>;
  }
}

//...............................................................
//Event listeners
class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }

  render() {
    return (
      <div onHover={this.myFunc}>
      </div>
    );
  }
}

//.................................................................................
//Export and Import
// You can export var, let, const, function, or class.
//Manifestos.js file will export
export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  agile: 'https://agilemanifesto.org/iso/en/manifesto.html',
  cyborg: 'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};

export const alsoRan = 'TimeCube';


//other file will import
import { faveManifestos, alsoRan } from './Manifestos.js';

// Use faveManifestos:
console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`);
//..........................................................................................

//Import and Export bigger example
//NavBar.js exports
export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

//ProfilePage.js Imports
import { NavBar } from './NavBar.js';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(
  <ProfilePage />,
  document.getElementById('app')
)

//.................................................................
//Using Props
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Michael' />,
  document.getElementById('app')
);


//example 2 ...import class and use prop
import { Greeting } from './Greeting.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Victor" />

        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


//..........................................................
//Can use props to make decisions thus you can have multpile return methods inside a class

export class Greeting extends React.Component {
  render() {
    if (this.props.signedIn == false) {
      return <h1>GO AWAY</h1>;
    } else {
      return <h1>Hi there, {this.props.name}!</h1>;
    }
  }
}

//other script (importing)
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison" signedIn={true} />
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


//....................................................................
//define eventhandlers
// no "function" is put infront cos they act as methods inside the class
class Example extends React.Component {
  MrhandleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return (
      <h1 onClick={this.MrhandleEvent}>
        Hello world
      </h1>
    );
  }
}

//............................................
//passing event handlers to external scripts
export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
}
// other script
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    alert("hey there");
  }

  render() {
    return <Button onClick={this.handleClick} />;
    //Button here is a component instance thus onClick is merely a prop name
    //not an event listener
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

//.....................................................
//Default props
class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button' };

ReactDOM.render(
  <Button text="text here will overwrite default" />,
  document.getElementById('app')
);

//........................................................
//State
// We must create constructors to use state

class App extends React.Component {
  // constructor method begins here:
  constructor(props) {
    super(props);
    this.state = {
      title: 'Best App',
      hungry: false
    };
  }

  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

//update states
/*this.setState() takes two arguments: an object that will update
the component’s state, and a callback. You basically never need the callback.*/

this.setState({ hungry: true });


//Example
class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
    /*Due to the way that event handlers are bound in JavaScript,
     this.toggleMood() loses its this when it is used. When you write a
      component class method that uses this, then you need to bind that method 
      inside of your constructor function!*/
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    )
  }
}

//NB: you can’t call this.setState() from inside of the render function
//and this.setState Automatically Calls render












/////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



//React JS part 2


//Stateful and stateless components
//passing state from a stateful to a stateless component

export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}

//in other script
import { Child } from './Child'


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }
  render() {
    return <Child name={this.state.name} />;
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
)



//NB
/* A React component should use props to store information that can be changed, but can only
be changed by a different component.

A React component should use state to store information that the component itself can change. */



//Child component update its parents state

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    /* with all methods that we pass in React, we must first bind our new method to the
     current instance of Child. */
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
    //takes event object created by event listeners do and adds name value
  }

  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select onChange={this.handleChange} id="great-names">
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}


//NB: A component should only have one job
//above code made child do two jobs so we move one job to a sibling

//updated code below
//parent.js
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
};

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);

//Child.js
//only provides way to change name now
export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}

//Sibling.js
//this component has taken the job of displaying the name
export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}


//.........................................................................
//styles
//in-line style
const styleMe = (<h1 style={{ background: 'lightblue', color: 'darkred' }}>Please style me! I am so bland!</h1>);

ReactDOM.render(
  styleMe,
  document.getElementById('app')
);

//or
const styles = {
  color: 'darkcyan',
  background: 'mintcream'
};

export class StyledClass extends React.Component {
  render() {
    return (
      <h1 style={styles}>
        Hello world
      </h1>
    );
  }
}


/*Defining a variable named style in the top-level scope would be an extremely bad idea in many JavaScript environments!
In React, however, it’s totally fine.
Remember that every file is invisible to every other file, except for what you choose to expose via module.exports. */


//In regular JavaScript, style names are written in hyphenated-lowercase:

const styles = {
  'margin-top': "20px",
  'background-color': "green"
};
//In React, those same names are instead written in camelCase:

const styles = {
  marginTop: "20px",
  backgroundColor: "green"
};

//This has zero effect on style property values, only on style property names.
//In react the px is assumed for numbers so you can leave out "" for numbers


//Importing a style.js stylesheet
//style.jsx
const fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
const background = 'pink url("https://media.giphy.com/media/oyr89uTOBNVbG/giphy.gif") fixed';
const fontSize = '4em';
const padding = '45px 0';
const color = 'green';


export const styles = {
  fontFamily: fontFamily,
  background: background,
  fontSize: fontSize,
  padding: padding,
  color: color
};

//Home.js
import { styles } from './styles';

const divStyle = {
  background: styles.background,
  color: styles.color,
  fontFamily: styles.fontFamily
};

export class Home extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <h1>THANK YOU FOR VISITING MY HOMEPAGE!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('app')
);



//use double dots to move one level up - import { example } from '../components/GuineaPigs'

//Separate container components from presentational components

//create Components folder for presentationalcomponents
//create container folder for container/logic components

//this is the presentational component code
//it should only focus on presenting the content
import React from 'react';

export class GuineaPigs extends React.Component {

  render() {
    const src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

//the container should focus on all the background logic

import React from 'react';
import ReactDOM from 'react-dom';
import { GuineaPigs } from '../components/GuineaPigs'

const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return (
      < GuineaPigs src={src} />
    );
  }
}

ReactDOM.render(
  <GuineaPigsContainer />,
  document.getElementById('app')
);


/*When you separate a container component from a presentational component,
 the presentational component will always end up like this: one render() function, and no other properties. */



//..........................................................................................................
//stateless functional components

// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}




// The same component class, written as a stateless functional component:
export const MyComponentClass = (props) => {
  return <h1>{props.greeting}</h1>;
}

// Works the same either way:
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);


//............................................................................................................

//Prop Types

//add this below the component class with all expected props
Runner.propTypes = {
  message: React.PropTypes.string.isRequired,
  style: React.PropTypes.object.isRequired,
  isMetric: React.PropTypes.bool.isRequired,
  miles: React.PropTypes.number.isRequired,
  milesToKM: React.PropTypes.func.isRequired,
  races: React.PropTypes.array.isRequired
};


//example
import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

GuineaPigs.propTypes = {
  src: React.PropTypes.string.isRequired,
}


//..............................................................................
//React forom
// text updates with every change of input
//state could be used to update server as user types

export class Input extends React.Component {


  constructor(props) {
    super(props);

    this.state = { userInput: '' };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Input />,
  document.getElementById('app')
);




/*The fact that <input /> keeps track of information makes it an uncontrolled component.
It maintains its own internal state, by remembering data about itself.

A controlled component has no memory. If you ask it for information about itself,
then it will have to get that information through props. Most React components are controlled. */


















//........................................................................................................................

//There are three categories of lifecycle methods: mounting, updating, and unmounting.

/*
There are three mounting lifecycle methods:

componentWillMount (mounting lifecycle events only execute the first time that a component renders.)
render
componentDidMount (mounting lifecycle events only execute the first time that a component renders.)

When a component mounts, it automatically calls these three methods, in order.
 */

export class Example extends React.Component {
  componentWillMount() {
    alert('component just finished mounting!');
  }

  render() {

  }
}



//render belongs to two categories: mounting lifecycle methods, and updating lifecycle methods.

/*
If your React app uses AJAX to fetch initial data from an API, then componentDidMount is the place to make that AJAX call.
More generally, componentDidMount is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks.
componentDidMount is also the place to set timers using setTimeout or setInterval.


 */

//....................................................................................
export class Flashy extends React.Component {
  componentWillMount() {
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }

  componentDidMount() {
    alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
  }

  render() {

    alert('Flashy is rendering!');


    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);


/*
There are five updating lifecycle methods:

componentWillReceiveProps (runs before render)
shouldComponentUpdate (also runs before render)
componentWillUpdate
render
componentDidUpdate


Whenever a component instance updates, it automatically calls all five of these methods, in order.
 */

export class Flashy extends React.Component {

  componentWillReceiveProps(nextProps) {
    alert("Check out the new props.text that "
      + "I'm about to get:  " + nextProps.text);
  }


  shouldComponentUpdate(nextProps, nextState) {
    if ((this.props.text == nextProps.text) &&
      (this.state.subtext == nextState.subtext)) {
      alert("Props and state haven't changed, so I'm not gonna update!");
      return false;
    } else {
      alert("Okay fine I will update.")
      return true;
    }
  }
  /*
   if shouldComponentUpdate returns false, then the component will not update! None of the remaining 
   lifecycle methods for that updating period will be called, including render.
 
   shouldComponentUpdate automatically receives two arguments: nextProps and nextState. 
   It’s typical to compare nextProps and nextState to the current this.props and this.state, and use the results to decide what to do.
    */


  componentWillUpdate(nextProps, nextState) {
    if (document.body.style.background != yellow
      && this.state.highest >= 950 * 1000) {
      document.body.style.background = yellow;
    }
  }

  /*
  The main purpose of componentWillUpdate is to interact with things outside of the React architecture. If you need to do non-React
  setup before a component renders, such as checking the window size or interacting with an API.
   */

  render() {

  }



  componentDidUpdate(prevProps, prevState) {
    if (this.state.latestClick < prevState.latestClick) {
      this.endGame();
    }



  }
}


//.............................................................................................................
/*
componentWillUnmount
A component’s unmounting period occurs when the component is removed from the DOM. This could happen if the DOM is rerendered without the component,
or if the user navigates to a different website or closes their web browser.
 */


export class Flashy extends React.Component {

  componentWillUnmount(prevProps, prevState) {
    clearInterval(this.interval);
  }

}
