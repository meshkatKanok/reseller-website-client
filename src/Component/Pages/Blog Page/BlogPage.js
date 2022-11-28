import React from 'react';

const BlogPage = () => {
    return (
        <div>
             <h1 className='mt-5 text-center'>Question Blog Part</h1>
            <div class="card mt-3 "> 
  <img src="https://miro.medium.com/max/1400/1*L6VRj89-jxhxDp6NDOmYrA.png" class="card-img-top w-50 mx-auto" alt="..."/>
  <div class="card-body">
    <h1 className='card-title'>1.What are the different ways to manage a state in a React application?</h1>
    <p class="card-text">Ans : The Four Kinds of React State to Manage
Local state. Global state. Server state. URL state</p>
  </div>
</div>
            <div class="card mt-5 "> 
  <img src="https://miro.medium.com/max/1042/1*ULmG2uiAlgQksjj-brp2fw.jpeg" class="card-img-top w-50 mx-auto" alt="..."/>
  <div class="card-body">
    <h1 className='card-title'>2. How does prototypical inheritance work?</h1>
    <p class="card-text">Ans : The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Objec</p>
  </div>
</div>
            <div class="card mt-5 "> 
  <img src="https://www.guru99.com/images/1/Unit-Testing.png" class="card-img-top w-50 mx-auto" alt="..."/>
  <div class="card-body">
    <h1 className='card-title'>3. What is a unit test? Why should we write unit tests?</h1>
    <p class="card-text">Ans : The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
  </div>
</div>
            <div class="card mt-5 "> 
  <img src="https://preview.redd.it/zkmxq39ywck51.jpg?width=1200&format=pjpg&auto=webp&s=55e643b52aa23f51585c610fb5f9427928290102" class="card-img-top w-50 mx-auto" alt="..."/>
  <div class="card-body">
    <h1 className='card-title'>4. React vs. Angular vs. Vue?</h1>
    <p class="card-text">Ans : React is a UI library, Angular is a fully-fledged front-end framework, while Vue. js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they're not 100 percent the same, so it makes sense to compare them and understand their differences</p>
  </div>
</div>
            
        </div>
    );
};

export default BlogPage;