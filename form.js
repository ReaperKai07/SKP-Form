const forms = document.getElementById('form');
const studName = document.getElementById('studName');
const studBirth = document.getElementById('studBirth');
const studHomeAdd = document.getElementById('studHomeAdd');
const studId = document.getElementById('studId');
const studPhone = document.getElementById('studPhone');
const studHomeAddCurrent = document.getElementById('studHomeAdd');
const fName = document.getElementById('fName');
const fJob = document.getElementById('fJob');
const fEmployer = document.getElementById('fEmployer');
const fIncome = document.getElementById('fIncome');
const mJob = document.getElementById('mJob');
const mIncome = document.getElementById('mIncome');
const childSchool = document.getElementById('childSchool');
const childWork = document.getElementById('childWork');


forms.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

// alert(is_valid);

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error')
}

const validateInputs = () => {
  let counter = 0;
  const studNameValue = studName.value.trim();
  const studBirthValue = studBirth.value.trim();
  const studHomeAddValue = studHomeAdd.value.trim();
  const studIdValue = studId.value.trim();
  const studFacValue = studFac.value.trim();
  const studPhoneValue = studPhone.value.trim();
  const studHomeAddCurrentValue = studHomeAdd.value.trim();
  const fNameValue = fName.value.trim();
  const fJobValue = fJob.value.trim();
  const fEmployerValue = fEmployer.value.trim();
  const fIncomeValue = fIncome.value.trim();
  const mJobValue = mJob.value.trim();
  const mIncomeValue = mIncome.value.trim();
  const childSchoolValue = childSchool.value.trim();
  const childWorkValue = childWork.value.trim();


  if (studNameValue === '') {
    setError(studName, "Name is required.");
  } else {
    setSuccess(studName);
    console.log(studNameValue)
    counter++;
  }

  if (studBirthValue === '') {
    setError(studBirth, "Date of birth is required.");
  } else {
    setSuccess(studBirth);
    counter++;
  }

  if (studHomeAddValue === '') {
    setError(studHomeAdd, "Address is required.");
  } else {
    setSuccess(studHomeAdd);
    counter++;
  }

  if (studIdValue === '') {
    setError(studId, "Student ID is required.");
  } else {
    setSuccess(studId);
    counter++;
  }

  if (studFacValue === '') {
    setError(studFac, "Student Faculty is required.");
  } else {
    setSuccess(studFac);
    counter++;
  }

  if (studPhoneValue === '') {
    setError(studPhone, "Phone number is required.");
  } else {
    setSuccess(studPhone);
    counter++;
  }

  if (studHomeAddCurrentValue === '') {
    setError(studHomeAddCurrent, "Student home address is required.");
  } else {
    setSuccess(studHomeAddCurrent);
    counter++;
  }

  if (fNameValue === '') {
    setError(fName, "Father name is required.");
  } else {
    setSuccess(fName);
    counter++;
  }

  if (fJobValue === '') {
    setError(fJob, "Father job is required.");
  } else {
    setSuccess(fJob);
    counter++;
  }

  if (fEmployerValue === '') {
    setError(fEmployer, "Father employer is required.");
  } else {
    setSuccess(fEmployer);
    counter++;
  }

  if (fIncomeValue === '') {
    setError(fIncome, "Father income is required.");
  } else {
    setSuccess(fIncome);
    counter++;
  }

  if (mJobValue === '') {
    setError(mJob, "Mother job is required.");
  } else {
    setSuccess(mJob);
    counter++;
  }

  if (mIncomeValue === '') {
    setError(mIncome, "Mother income is required.");
  } else {
    setSuccess(mIncome);
    counter++;
  }

  if (childSchoolValue === '') {
    setError(childSchool, "Siblings currently studying is required.");
  } else {
    setSuccess(childSchool);
    counter++;
  }

  if (childWorkValue === '') {
    setError(childWork, "Siblings currently working is required.");
  } else {
    setSuccess(childWork);
    counter++;
  }

  console.log(counter)

  if (counter === 15) {
    window.location.href = "result.html";
    // const user_data = [full_nameValue, matrix_idValue, dobValue, addressValue, cityValue, stateValue, postcodeValue, phoneValue];
    // console.log(user_data);
    // return user_data;

    localStorage.setItem('studName', studNameValue);
    localStorage.setItem('studBirth', studBirthValue);
    localStorage.setItem('studHomeAdd', studHomeAddValue);
    localStorage.setItem('studId', studIdValue);
    localStorage.setItem('studFac', studFacValue);
    localStorage.setItem('studPhone', studPhoneValue);
    localStorage.setItem('studHomeAddCurrent', studHomeAddCurrentValue);
    localStorage.setItem('fName', fNameValue);
    localStorage.setItem('fJobName', fJobValue);
    localStorage.setItem('fEmployer', fEmployerValue);
    localStorage.setItem('fIncome', fIncomeValue);
    localStorage.setItem('mJob', mJobValue);
    localStorage.setItem('mIncome', mIncomeValue);
    localStorage.setItem('childSchool', childSchoolValue);
    localStorage.setItem('childWork', childWorkValue);

    window.location.href = "result.html";

  } else {
    alert("Please fill in the form correctly !");
  }

};