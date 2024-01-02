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
const studTrans = document.getElementById('studTranscript');
const studImg = document.getElementById('studImg');


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
  const studImgValue = studImg.value;
  const studTransValue = studTrans.value;


  if (studNameValue === '') {
    setError(studName, "Nama yang sah diperlukan");
  } else {
    setSuccess(studName);
    console.log(studNameValue)
    counter++;
  }

  if (studBirthValue === '') {
    setError(studBirth, "Sila pilih tarikh lahir.");
  } else {
    setSuccess(studBirth);
    counter++;
  }

  if (studHomeAddValue === '') {
    setError(studHomeAdd, "Alamat diperlukan.");
  } else {
    setSuccess(studHomeAdd);
    counter++;
  }

  if (studIdValue === '') {
    setError(studId, "Nombor Pelajar yang sah diperlukan.");
  } else {
    setSuccess(studId);
    counter++;
  }

  if (studFacValue === '') {
    setError(studFac, "Fakulti yang sah diperlukan");
  } else {
    setSuccess(studFac);
    counter++;
  }

  if (studPhoneValue === '') {
    setError(studPhone, "Nombor telefon yang sah diperlukan");
  } else {
    setSuccess(studPhone);
    counter++;
  }

  if (studHomeAddCurrentValue === '') {
    setError(studHomeAddCurrent, "Alamat diperlukan.");
  } else {
    setSuccess(studHomeAddCurrent);
    counter++;
  }

  if (fNameValue === '') {
    setError(fName, "Nama yang sah diperlukan.");
  } else {
    setSuccess(fName);
    counter++;
  }

  if (fJobValue === '') {
    setError(fJob, "Nama pekerjaan diperlukan.");
  } else {
    setSuccess(fJob);
    counter++;
  }

  if (fEmployerValue === '') {
    setError(fEmployer, "Alamat diperlukan.");
  } else {
    setSuccess(fEmployer);
    counter++;
  }

  if (fIncomeValue === '') {
    setError(fIncome, "Jumlah pendapatan diperlukan.");
  } else {
    setSuccess(fIncome);
    counter++;
  }

  if (mJobValue === '') {
    setError(mJob, "Nama pekerjaan diperlukan.");
  } else {
    setSuccess(mJob);
    counter++;
  }

  if (mIncomeValue === '') {
    setError(mIncome, "Jumlah pendapatan diperlukan.");
  } else {
    setSuccess(mIncome);
    counter++;
  }

  if (childSchoolValue === '') {
    setError(childSchool, "Bilangan diperlukan. 0 Jika tiada.");
  } else {
    setSuccess(childSchool);
    counter++;
  }

  if (childWorkValue === '') {
    setError(childWork, "Bilangan diperlukan. 0 Jika tiada.");
  } else {
    setSuccess(childWork);
    counter++;
  }

  if (studImgValue === '') {
    setError(studImg, "Sila muat naik gambar.");
  } else {
    setSuccess(studImg);
    counter++;
  }

  if (studTransValue === '') {
    setError(studTrans, "Sila muat naik transkrip.");
  } else {
    setSuccess(studTrans);
    counter++;
  }

  console.log(counter)

  if (counter === 17) {
    // window.location.href = "result.html";

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

    const file = studImg.files[0];


    if (file) {
      const reader = new FileReader();

      reader.onload = function(event) {
        const base64String = event.target.result;
  
        // Store the Base64 string in local storage
        localStorage.setItem('uploadedImage', base64String);
      };
  
      reader.readAsDataURL(file);
    } else {
      alert("No image uploaded.")
    }

    window.location.href = "result.html";

  } else {
    alert("Please fill in the form correctly !");
  }

};