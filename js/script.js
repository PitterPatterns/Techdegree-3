const name = document.getElementById('name');
const title = document.getElementById('title');
const otherT = document.getElementById('other-title');
const colors = document.getElementById('color');
const other = title.querySelectorAll('option')[5];


name.focus();
/** Name field is ready for user input */

otherT.hidden = 'true';
/** Hiding the text field initally */


/** Capturing the "other" option */

title.addEventListener('change', (e) => {
  if (e.target.value == 'other') {
    otherT.style.display = 'block';
  } else {
    otherT.style.display = 'none';
  }
});

/** Giving the 'other' option the clickEventLitener */

colors.innerHTML = "Please select a T-shirt theme";