//create map
const map = L.map('mapid').setView([-22.9008973,-43.3552445], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
})

let marker;

// create and add marker
map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;


    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    
    // remover icon
    marker && map.removeLayer(marker)
     
    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//ADd photo field
function addPhotoField() {
    //get photo container from #images
    const container = document.querySelector('#images')
    //egt container to duplicate .new-image
    const fieldContainer = document.querySelectorAll('.new-upload')
    //duplicate last image added 
    const newFieldContainer = fieldContainer[fieldContainer.length -1].cloneNode(true)
   
    //verify if field is empty. If true = don't add to the img container
    const input = newFieldContainer.children[0]

    if(input.value =="") {
        return
    }

    //clean field before adding to the img container
    input.value = ""
    //add clone to #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget 
    const fieldContainer = document.querySelectorAll('.new-upload')
    if (fieldContainer.length < 2) {
        //clean field
       span.parentNode.children[0].value = "" 
        return
    }
    
    //delete field
    span.parentNode.remove();
}

//select yes or no

function toggleSelect(event) {
    //remove class="active" (all buttons)
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active');
    })
    //give class="active"   (selected button)
    const button = event.currentTarget
    button.classList.add('active');

    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}

function validate(event) {
    // event.preventDefault()
}