//obtener los botones de tipo submit

let submitButtons = $('button[type=submit]');

//agregar el listener para el submit

submitButtons.on('click,validateForm');
