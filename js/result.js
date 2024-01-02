const studName = localStorage.getItem('studName');

const localStorageKeys = [
  'studName',
  'studBirth',
  'studHomeAdd',
  'studId',
  'studFac',
  'studPhone',
  'studHomeAddCurrent',
  'fName',
  'fJobName',
  'fEmployer',
  'fIncome',
  'mJob',
  'mIncome',
  'childSchool',
  'childWork'
];

const p_values = [
  'student-name',
  'student-dob',
  'student-address',
  'student-id',
  'student-fac',
  'student-phone',
  'student-living',
  'father-name',
  'father-job',
  'emp-add',
  'father-income',
  'mother-job',
  'mother-income',
  'sibling-stud',
  'sibling-work'
]

const blankElements = document.querySelectorAll('.blank');

const uploadedImage = document.getElementById('uploadedImage');

const base64String = localStorage.getItem('uploadedImage');

const displayImage = document.getElementById('displayImage');

console.log(base64String)

if (base64String) {
  displayImage.src = base64String;
} else {
  // Handle the case when the Base64 string is not available
  displayImage.alt = "No image found";
}

localStorageKeys.forEach((key, index) => {
  const value = localStorage.getItem(key);

  if (value && p_values[index]) {
    let p = document.createElement('p');
    p.textContent = value;
    document.getElementById(p_values[index]).appendChild(p);
  }
});

if (studName.length !== 0) {
  blankElements.forEach(element => {
    element.style.display = 'none';
  });
  console.log(studName)
}