function load () {
    var now = new Date()
    var hour = now.getHours()
    var txthour = document.getElementById('hour')
    var image = document.getElementById('image')
    var bgc = document.getElementById('bgc')
    txthour.innerHTML = `Agora são ${hour} horas.`


    // Abaixo estão as imagens e os backgrounds
    if (hour < 12) {
        //Bom dia!
        image.src="https://www.publicdomainpictures.net/pictures/330000/velka/sunny-morning.jpg"
        bgc.style.background = 'wheat'
    } else if (hour <= 18) {
        //Boa tarde!
        image.src="https://cdn.pixabay.com/photo/2018/06/04/16/32/landscape-3453604_960_720.jpg"
        bgc.style.background = 'sienna'
    } else {
        //Boa noite!
        image.src="https://www.publicdomainpictures.net/pictures/260000/velka/ilustracion-nocturna.jpg"
        bgc.style.background = '#414141'
    }
}