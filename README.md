# ![](public/favicon.ico) Sneaker Example Website

This repository hosts the source code for my example website made using the ReactJS framework. It features a system front end that has code ready to load products dynamically on the itemView page. It uses the product.json to allow for information to be stored. This can be updated (although not in this example) using backend services to populate the list of products when needed.

## UX

This website attempts to keep all content inside of the main window requiring little amount of scrolling - this is just an attempt to provide a native like appearence to the page. With components that help dynamically load conent onto the main window, CSS also has been used to define window size limits in both, width and height to scale elements accordingly. This means that users are able to view the content no matter what screen size their device of choice uses.

## Features

- ### **Dynamic Item loading**

	This is a page that will load all the relevant assets and information given on a single property - the item ID. This will be useful for those who may want to tie this system with their backend servers through any database platform. Just simply load the list of products and reference the ID of that product.
	
	Ultimately for the user end, it means seamless transition for item to item, and for developers it means only having to maintain one page.
- ### **Image Gallery Fullscreen**

	Within the page to view the item, there is a feature that allows users to fullscreen the image for better viewing of the product. This comes with a gallery and some controls to aid the user switching different images.

	This is perticularly helpful if images renders too small on a user's screen.


- ### **Cart System**
	This will allow the items to be added to a cart value located in "localStorage" system. Switching pages and adding items will add them to this variable and update the cart visually.

	There are also a remove button to remove the item from the cart in the cart menu as well.

- ### **Discount and Price Calculator**
	To help make the website as easy as possible to modify, the items all contain a price and discount value. The system will display the discounted price, the discount amount and the original amount on the main page.

	In the cart window, the item will also display how much the total cost of those items are by multiplying the amount that you wish to order.
## Pages

- [index.html](index.html) - The main view of the rendering system for the website. All pages are loaded on this page.
- [home.js](src/pages/home.js) -  The main homepage of the website that shows the branding of the company.
- [collections.js](src/pages/collections.js) - The page that will load a grid view of all items in the catalogue (not currently implemented).
- [itemView.js](src/pages/itemView.js.js) - The template page that loads the contents of the item the template.

## Technologies

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [Git](https://git-scm.com/)
- [Github](https://github.com)
- [NodeJS](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [gh-pages](https://www.npmjs.com/package/gh-pages)
- [json-loader](https://www.npmjs.com/package/json-loader)

## Deployment

Getting the files onto your system:
1. Load up your terminal on your machine.
2. Pull the website from github:
	> git clone https://github.com/WatermelonArray/SneakerExample
3. No need to build any files as everything should already be there ready to use!

Any changes made should be using the command interface:
1. Add any changed files using
	> git add .

	> "." being the prefix for all files.

2. Commit your staged files:
	> git commit -m "Commit message here"

3. Make sure you set your remote repository
	> git remote add origin https://github.com/WatermelonArray/SneakerExample

	> Or the remote to any other repository (preferably yours)

4. Push your commits **AND** set your push command's default remote using "-u"
	> git push -u origin master

	> "master" can be replaced by any branch you want on the remote repository

	> Once you do this, you can just run "git push" without setting upstream for faster workflows

5. Start deploying on your prefered deployment service like Github Pages.
	> Repository Settings > Github Pages > Select source to master branch. *(Or any other prefered branch)*

Using github’s page service I am able to deploy this website live to https://watermelonarray.github.io/SneakerExample

## Credit

Learning resources used heavily:

- https://www.w3schools.com/
- https://developer.mozilla.org/en-US/docs/Web/API
- https://reactjs.org/docs/getting-started.html
- https://stackoverflow.com/