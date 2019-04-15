# Brastlewark

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install

Clone the repo

npm install

npm run start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Routes

Home (/): Show the cards of the gnomes and show a brief detail of them. You can also search using the searchbar.

Detail /gnome/:id): Show all the information of the specific gnome. You can also go directly to the details of her friends!

404 (/NoMatch): If something goes wrong, you will be redirected here.

#### Behing the scenes

In the Home there are 1337 cards, when scrolling everything is very fluid (specially at smartphone) because DOM only load ~14 cards.

Thats because the DOM virtualization:

![Virtualized](https://github.com/franlol/brastlewark-gnomes/blob/master/virtualized.gif)


When clicking friend links in any gnome detail, there is a Higher Order Component that inject getByName method.

getByName() method search the link name in the gnomes array and return that gnome object.
