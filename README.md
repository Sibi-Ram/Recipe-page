 # Recipe page

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

- Source Code: [view on GitHub](https://github.com/Sibi-Ram/Recipe-page)
- Live Site URL: [Recipe-Page website](https://sibi-ram.github.io/Recipe-page/)

## My process

### Built with

- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- Flexbox
- Mobile-first workflow

### What I learned

Inorder to style the Bullets and numbering, I used ```::marker``` pseudo-element,which allows to style the bullet/numbering independently from the list item text:


```css
.recipe-list li::marker{
  color: #854632;
} 
```

**Horizontal Rule - Styling**
```<hr>``` is rendered using borders, not background property.

using the border-top property, which is the most reliable way to set ```<hr> ```color and thickness across browsers

```css
hr {
  border: 4px solid #a00; /* sets both color and thickness */
}
```
- Use border for most cases: when you want standard lines, borders, and custom styles.
- Use height (with border: none) when you want a thick rectangle-style rule.

**Table - Styling**

- By default, HTML tables use ``` border-collapse: separate``` , which shows double borders between cells if borders are applied.
- The property ```border-collapse: collapse;``` merges adjacent borders into a single border, creating a cleaner look.

Border value should be mentioned specificaly for table

**Challenge - I faced- took long time to rectify it**

In the container, I have image and other elements consecutively , At mobile width -- 1st element of the container should not contain any padding or margin - occupying the entire width but other element should respect those padding for that challenge-
    To solve this I used NEGATIVE values for padding and margin and use calc - to add more width for the image adn apply accordingly, or just manually use additional width(not recommended)


```css
/* ! Default styling */
.container {
  
  margin: 0 auto;
  padding: 2.5em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
}

/* ! Media query */
@media (max-width: 599px) {
  .heading > img {
    margin-left: -2.5em; /* negative margin to offset container padding */
    margin-right: -2.5em;
    margin-top: -2.5em;
    flex: none;
    width: calc(100% + 5em);/* container padding left + right */
    
    /*• The image width is set wider than the container's inner content (100% + 5em) to compensate for container padding on left and right (2.5em + 2.5em).
    */
  }
}
```


**Key Learning:**

___```::marker``` pseudo-element allows to style the bullet/numbering independently from the list item text.___


## Author

- Twitter - [SR-theDev](https://www.twitter.com/SRtheDev)
- Frontend Mentor - [Sibi-Ram](https://www.frontendmentor.io/profile/Sibi-Ram)



## Acknowledgments

This is my solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm).

