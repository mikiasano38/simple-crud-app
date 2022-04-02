'use strict';
const tableBody = document.getElementById("tableBody");


function manageData() {
    //new data
    let inputName = document.getElementById("name").value;

    //if there is nothing saved at first then save an empty array
    if(localStorage.getItem("data") === null) {
        localStorage.setItem("data", "[]")
    }

    //get old data from local storage
    let previousInputName = JSON.parse(localStorage.getItem("data"));
    previousInputName.push(inputName);

    //save previousInputName + inputName to local storage
    localStorage.setItem("data", JSON.stringify(previousInputName));
}

function selectData() {
    let previousInputName = JSON.parse(localStorage.getItem("data"));
    if(previousInputName !== null) {
        previousInputName.forEach((value, index) => {
            console.log(value, index);
            tableBody.innerHTMl += `
                <tr>
                    <td>${index}</td>
                    <td>${value}</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            `;
        })
    }

}

selectData();

