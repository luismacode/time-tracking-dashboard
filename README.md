# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![screenshot-desktop](./screenshots/time-tracking-desktop.jpeg)
![screenshot-mobile](./screenshots/time-tracking-mobile.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Utilities Classes
- Flexbox
- CSS Grid
- Mobile-first workflow
- BEM
- Javascript

### What I learned

Through the development of this challenge I learned:

1. Import a file with extension json into a javascript module:

  ```js
    import json from '.data/data.json' assert {type:'json'};
  ```

2. Use a tagged template to generate a string containing Html elements.

  ```js
    function html(strings, ...keys) {
    return function () {
    const temp = strings.slice();
    keys.forEach((key, i) => {
      temp[i] += key;
    });
      return temp.join("");
      };
    }
```

3. Import and call the tagged function in the index file like this.

  ```js
      const template = html`
      <article class="card">
        ........
      </article>
    `(data);
```

4. Convert a string template to a dom node to then add it as a child to the parent node.

  ```js
      const node = new DOMParser().parseFromString(template, "text/html").body.firstElementChild;
      parentNode.appendChild(node)
```

### Continued development

In the future I will do a separate project in vuejs or react of this same challenge to add support for all browsers.

Note that the use of import assertions  only works in browsers with support it and at the time this challenge was finished is not supported in firefox. So if you run this code in firefox the user experience will be bad instead I recommend using google chrome or Microsoft Edge in its latest updated version.

### Useful resources

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JS](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [Import-assertions](https://github.com/tc39/proposal-import-assertions)
- [tagged-template](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Dom parser](https://davidwalsh.name/convert-html-stings-dom-nodes)

## Author

- Linkedin - [luismachaca](www.linkedin.com/in/luismachaca)
- Frontend Mentor - [@luismacode](https://www.frontendmentor.io/profile/luismacode)
- Twitter - [@luismacode](https://www.twitter.com/luismacode)

## Acknowledgments

  At some point instead of advancing I got stuck in certain things that I needed to know, this  [youtube video](https://www.youtube.com/watch?v=52q6OGbcIso&list=WL&index=2) the channel is called CodingTube .I really learned some things that I did not know and it helped me a lot to finish this challenge. As well as all the free resources on the internet, they very helpful.
