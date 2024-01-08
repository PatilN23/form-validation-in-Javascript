
var form = document.querySelector('#myForm');

form.addEventListener('submit', (e) => {

  e.preventDefault();
  var name = document.querySelector('#name').value;
  var email = document.querySelector('#email').value;
  var pan = document.querySelector('#pan').value;
  var loan = document.querySelector('#loan').value;

  var nameregex = /^[a-zA-Z ]{2,30}$/;
  var mailregex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  var panregex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  var loanregex = /(?:^\d{1,3}(?:\.?\d{3})*(?:,\d{2})?$)|(?:^\d{1,3}(?:,?\d{3})*(?:\.\d{2})?$)/gm;
  if (!name.match(nameregex)) {
    alert('Invalid name')
  }
  else if (!email.match(mailregex)) {
    alert('Invalid email')
  }
  else if (!pan.match(panregex)) {
    alert('Invalid pan no')
  }
  else if (!loan.match(loanregex)) {
    alert('Invalid Loan Amount')
  }
  else {
    alert('request approved')
  }
})
