const names = ['John', 
                'Paul', 
                'George', 
                'Ringo'];
const desc = ['John is a singer', 
                'Paul is a guitarist', 
                'George is a bassist', 
                'Ringo is a drummer'];

const images = ['https://designimages.appypie.com/profilepicture/profilepicture-1-head-person.jpg',
                'https://i.pinimg.com/474x/e0/88/14/e08814e03cb83940ed92eacd63640781.jpg',
                'https://ath2.unileverservices.com/wp-content/uploads/sites/4/2019/10/best-hairstyles-for-men-2020-300x300.jpg',
                'https://cdn.justjared.com/wp-content/uploads/headlines/2023/02/rege-jean-page-vanity-fair.jpg']

const button = document.getElementById('generate');

button.addEventListener('click', () => {
  const random = Math.floor(Math.random() * 4);
  document.getElementById('name').innerHTML = names[random];
  document.getElementById('desc').innerHTML = desc[random];
    document.getElementById('image').src = images[random];
});