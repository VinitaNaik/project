// get form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const dobInput = document.getElementById('dob');
const feesInput = document.getElementById('fees');
const bcInput = document.getElementById('bc');
const resultInput = document.getElementById('result');
const receiptInput = document.getElementById('receipt');
const idcardInput = document.getElementById('idcard');
const classInput = document.getElementById('class');

// add form submit event listener
form.addEventListener('submit', (event) => {
  // prevent form from submitting
  event.preventDefault();
  
  // validate name
  if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
    alert('Name should only contain letters');
    return;
  }

  // validate date of birth
  const today = new Date();
  const dob = new Date(dobInput.value);
  const age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  if (age < 18 || age > 24) {
    alert('Date of birth should be between 18 to 24 years old');
    return;
  }

  // validate fees paid
  if (feesInput.value === 'no') {
    alert('Please pay the fees');
    return;
  }

  // validate birth certificate, result, fees receipt, and identity card
  if (!bcInput.files[0] || !resultInput.files[0] || !receiptInput.files[0] || !idcardInput.files[0]) {
    alert('Please upload all required documents');
    return;
  }
  // validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  if (!allowedTypes.includes(bcInput.files[0].type) ||
      !allowedTypes.includes(resultInput.files[0].type) ||
      !allowedTypes.includes(receiptInput.files[0].type) ||
      !allowedTypes.includes(idcardInput.files[0].type)) {
    alert('Please upload valid document types: jpeg/png/pdf');
    return;
  }

  // validate result based on class
  if (classInput.value === '1' && !/12th/.test(resultInput.files[0].name)) {
    alert('For FYBCA class, result should be 12th marksheet');
    return;
  }
  if (classInput.value === '2' && !/(semester\s+i|semester\s+ii)/i.test(resultInput.files[0].name)) {
    alert('For SYBCA class, result should be anyone of semester I or II');
    return;
  }
  if (classInput.value === '3' && !/(semester\s+i|semester\s+ii|semester\s+iii|semester\s+iv)/i.test(resultInput.files[0].name)) {
    alert('For TYBCA class, result should be anyone of semester I, II, III or IV');
    return;
  }

  // if all validations pass, submit the form
  form.submit();
});
