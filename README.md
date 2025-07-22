 # Blog Preview card

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

#### Desktop view:
![Desktop view](./screenshots/desktop-view.jpg)

#### Modile view:
![Mobile view](./screenshots/mobile-view.jpg)

### Links

- Source Code: [view on GitHub](https://github.com/Sibi-Ram/Blog-preview-card)
- Live Site URL: [QR code Component website](https://sibi-ram.github.io/Blog-preview-card/)

## My process

### Built with


- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- Flexbox

### What I learned

Initailly in css I used
```css
display: flex;
align-items: center;
```
on the ```<main>``` element, but the box was not vertically centered.

After googling I found out the reason.
The reason: I did not set a height on the flex parent (main), so there was no extra vertical space for centering. ___By default, block elements stretch to 100% width but only as much height as their content.___

corrected code:

Set a height (e.g., height: 100vh;) on the flex parent (```<main>```).

```css
height: 100vh;
align-items: center;
```
will vertically center the child inside the parent.

**Key Learning:**

___For vertical centering with flexbox, the container must have a defined height.___


## Author

- Twitter - [SRtheDev](https://www.twitter.com/SRtheDev)
- Frontend Mentor - [Sibi-Ram](https://www.frontendmentor.io/profile/Sibi-Ram)



## Acknowledgments

This is my solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS).

