function sayiUret(ustLimit = 49) {
    return Math.ceil(Math.random() * ustLimit)
}

for (var i = 0; i < 8; i++) {
    console.log((i+1)+'. kolon')
    for (var j = 0; j < 6; j++) {
        console.log(sayiUret())
    }
}