/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const baseUrl = 'https://platzi-avo.vercel.app';
// const url = 'https://platzi-avo.vercel.app/api/avo';
const appNode = document.querySelector('#app');

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'GBP',
  }).format(price)
  return newPrice;
}

//BASIC FETCH API
// window
//   .fetch(url)
//   .then((response) => response.json())
//   .then(response => {
//     response.data.forEach(item => {
//       console.log(item.name)
//     })
// })

window
  .fetch(`${baseUrl}/api/avo`)
  .then((response) => response.json())
  .then(response => {
    const items = [];
    response.data.forEach(item => {
      const img = document.createElement('img');
      img.src = `${baseUrl}${item.image}`

      const name = document.createElement('h2');
      name.textContent= item.name;

      const price = document.createElement('div');
      price.textContent = formatPrice(item.price);

      const container = document.createElement('div');
      container.append(img, name, price);

      items.push(container);
    });
    appNode.append(...items)
})