let userSelected = null;

function Read() {
    let data = {};
    data["txtName"] = document.getElementById("txtName").value;
    data["txtAddress"] = document.getElementById("txtAddress").value;
    data["txtTel"] = document.getElementById("txtTel").value;
    return data;
}

function Create(data) {
    let table = document.getElementById("tblContact").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.txtName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.txtAddress;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.txtTel;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="Edit(this)"><img src="edit-icon.png" height="20 px"></th></a>`

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="Delete(this)"><img src="del.png" height="20px"></a>`

}

function Edit(td) {
    userSelected = td.parentElement.parentElement;
    document.getElementById("txtName").value = userSelected.cells[0].innerHTML;
    document.getElementById("txtAddress").value = userSelected.cells[1].innerHTML;
    document.getElementById("txtTel").value = userSelected.cells[2].innerHTML;
}

function Update(formData) {
    userSelected.cells[0].innerHTML = formData.txtName;
    userSelected.cells[1].innerHTML = formData.txtAddress;
    userSelected.cells[2].innerHTML = formData.txtTel;
}

function Delete(td) {
    if (confirm("คุณต้องการลบข้อมูล?")) {
        let row = td.parentElement.parentElement;
        document.getElementById("tblContact").deleteRow(row.rowIndex);
        ClearForm();
    }
}

function FormSubmit() {
    let formData = Read();

    if (userSelected == null) {
        Create(formData);
    } else {
        Update(formData)
        ClearForm();
    }
}

function ClearForm() {
    document.getElementById("txtName").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtTel").value = "";
    userSelected = null;
}


function FormSubmit() {
    let formData = Read();

    if (userSelected == null) {
        Create(formData);
    } else {
        Update(formData);
    }

    ClearForm(); // Clear the form after creating/updating
}
