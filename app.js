
const submiteBtn = document.getElementById('submitebtn');
submiteBtn.addEventListener('click', displayUserData);

var row = 1;

function displayUserData() {
const userName = document.getElementById('username');
const userEmail = document.getElementById('useremail');
const userAge = document.getElementById('userage');

    if (!userName.value || !userEmail.value || !userAge.value) {
        alert("Please fill all the boxes")
        return;
    }


    var tableData = document.getElementById('tableData');

    var newRow = tableData.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1)
    var cell3 = newRow.insertCell(2)

    cell1.innerHTML = userName.value;
    cell2.innerHTML = userEmail.value;
    cell3.innerHTML = userAge.value;

    userName.value = "";
    userEmail.value = "";
    userAge.value = "";
    

    row++;
}