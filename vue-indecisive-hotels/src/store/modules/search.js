const API_KEY = 'AIzaSyBpTKjVXmHXDFoZaoVvACQsWOzIyTJZBeE'
const API_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`
console.log(API_URL)
new google.maps.places.Autocomplete(document.getElementById('autocomplete'))