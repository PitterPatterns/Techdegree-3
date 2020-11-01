const name = document.getElementById('name');
const title = document.getElementById('title');
const otherT = document.getElementById('other-title');
const colors = document.getElementById('color');



name.focus();
/** Name field is ready for user input */

otherT.hidden = 'true';
/** Hiding the text field initally */

const other = title.querySelector('option')[5];
/** Capturing the "other" option */

/*other.addEventListener('click', () => {
  otherT.style.display = 'block';
  
});

/** Giving the 'other' option the clickEventLitener */

colors.innerHTML = "Please select a T-shirt theme";