const name = document.getElementById('name');
const title = document.getElementById('title');
const otherT = document.getElementById('other-title');
const colors = document.getElementById('color');
const other = title.querySelectorAll('option')[5];

/** Name field is ready for user input */
name.focus();

/** Hiding the text field initally */
otherT.hidden = 'true';




/** The "Job role" select menu is now looking for a change */
title.addEventListener('change', (e) => {
  if (e.target.value == 'other') {
    otherT.style.display = 'block';
  } else {
    otherT.style.display = 'none';
  }
});


/** Adding the "Please select a T-shirt theme" option & text */
const oppie = document.createElement('option');
const Tnode = document.createTextNode('Please select a T-shirt theme');
oppie.value = 'Select Theme';
oppie.appendChild(Tnode);

console.log(oppie);
/** Add option to specific Index */
colors.add(oppie, 0);


console.log(colors);