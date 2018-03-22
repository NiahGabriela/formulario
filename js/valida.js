let validateForm = funtion validateForm(e)
{
  let button =$(this);
  let pristine = true;
  //obtain form
  let form = button.parent('form');
  // obtener todos los elementos required
  let required = form.find('*[required]');
  let pattern = form.find('*[pattern]');

  pristine = validateRequiredFields(required);
  pristine = validateRequiredFields(pattern);

  if(pristine)
  {
    e.preventDefault();
  }
}

let validateRequiredFields = funtion validateRequiredFields (fields)
{
  let pristine = true;
  $.each(fields, funtion()
  {
    let input = $(this);
    let regex = element.attr('pattern');

    if(element.is('input') && element.val() === '')
    {
      generateError(element, 'required');
      pristine = false;
    }
    if(element.is('select') && element.val() === 0)
    {
      generateError(element, 'required');
      pristine = false;
    }

    // para cuando pongas un elemento de tipo select va esto,
    // y procurar que cuando no se haya selecionado nada ponerle un value de 0
  });
      return pristine;
}

let generateError = funtion generateError(element,typeError)
{
  alert('This' + element + 'field is required');
  element.addClass('error');
  $('<span> This field is required </span>').insertAfter(element);

}
