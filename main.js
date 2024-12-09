let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

function initMap() {
    const mapOptions = {
      center: { lat: -6.200000, lng: 106.816666 },
      zoom: 12, 
      mapTypeId: 'roadmap', 
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
  