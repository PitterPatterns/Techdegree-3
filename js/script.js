const name = document.getElementById('name');
const other = document.querySelector('other');
const otherT = document.getElementById('other-title');
const colors = document.getElementById('color');



name.focus();
/** Name field is ready for user input */

otherT.hidden = 'true';
/** Hiding the text field initally */


other.addEventListener('click', () => {
  if (otherT.hidden == true) {
    otherT.style.display = 'block';
  } else 
    otherT.style.display = 'none';
});

/** Giving the 'other' option the clickEventLitener */

colors.innerHTML = "Please select a T-shirt theme";