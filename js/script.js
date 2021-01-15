const name = document.getElementById('name');
const title = document.getElementById('title');
const otherT = document.getElementById('other-title');
const colors = document.querySelector('#color');
const design = document.getElementById('design');
const colorop = document.querySelectorAll('#color option');
const desiop = document.querySelectorAll('#design option');
const sizes = document.getElementById('size');


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
oppie.appendChild(Tnode);
colors.appendChild(oppie);


/** Puttung focus on "Please select a T-shirt theme" & hiding everything else */
if (desiop[0].textContent == 'Select Theme') {
  colors.hidden = true;
  colors[6].selected = true;
}
/*console.log(colors);*/


/** Changing the sizes to start at "Small" */
sizes[0].selected = true;




console.log(colorop);
console.log(desiop[0].textContent);
console.log(colors);



/*design.addEventListener('change', (e) => {
  if (e.target.value == 'js puns') {
    otherT.style.display = 'block';
  } else {
    otherT.style.display = 'none';
  }
});*/







