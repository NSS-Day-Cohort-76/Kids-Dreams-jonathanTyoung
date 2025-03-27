# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > Your answer here: The module that contains the code for this clickEvent is in the kids.js module. The document.addEventListener gets invoked/called in the DOM when some HTML belonging to the "child" datatype is clicked on. What the DOM calls in the function belongs to the state of this particular datatype.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Your answer here: The `findCelebrityMatch()` function must be invoked here because within its declaration, the function is having a return value that matches a celebrity to a child. That value is what is returned when the function is invoked. And that value is also necessary information, not so much for the ForLoop itself, but the string literal found within the ForLoop, specifically in the interpolations that need the celebrity name and sport.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > Your answer here: In the celebrityList module, there is state belonging to the "celebrity" datatype that contains the interpolation of the celeb's sport. Later in the module I define a variable with this piece of state, include the variable's interpolation into the HTML's string literal, and this produces the sport name of the celebrity when the name gets clicked on. 

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Your answer here: In the main module there are three functions getting imported from their respective modules. Each function contains HTML string literals. This HTML, after imported into 'main' is getting rendered to the DOM through by means of the .innerHTML property of the DOM, which is getting and converting the information for the web browser.
