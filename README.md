# Mouse Tracker Render Props

### Screenshot:
  ![Screenshot](/public/img/homepage.png)

#### [Link to Live Site](https://arathurs.github.io/Mouse-Tracking-Render-Props/) 
#### [Link to Repo](https://github.com/Arathurs/Mouse-Tracking-Render-Props.git/)  

### About the Project

A reusable `<Mouse>` component, which tracks mouse movement and can be fed dynamic content to be rendered while completely reusing core functionality. 

`<Mouse>` can be fed content to render by adding a render props with the value of a function which renders another component or JSX.



To see an example, visit the live site above. You can play around with this code by cloning this entire repo and running `npm start` in the root folder, which will start a local server on your machine and allow viewing of the site. Or for an easier option that still includes all of this repo's functionality,just download Example.html in the source code root folder and open it in any web browser. The functionality of `<Mouse>` is used to display a `<Chimp>` component, which also receives `<Mouse>`'s state.

This code will result in the image of the chimp following the mouse each time it moves, almost appearing like a chase. Don't trust baby chimps...