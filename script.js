

  let arr = [],sel_index = -1, emailarray = [],temp;
  
  function fetchData(){
    document.getElementById("search2").innerHTML = "";
    if (localStorage.users) {
      arr = JSON.parse(localStorage.users);
  
      for (var i = 0; i < arr.length; i++) {
        createTable(i,arr[i].name,arr[i].country,arr[i].salary,arr[i].email );
      }
    }
  }
  
  function addUser() {
    let name = document.getElementById("name").value;
    let country = document.getElementById("country").value;
    let salary = document.getElementById("salary").value;
    let email = document.getElementById("email").value;
  
    for (i = 0; i < arr.length; i++) {
      if (email == arr[i]["email"]) {
        temp = 0;
        break;
      } else {
        temp = 1;
      }
    }
  
    if (temp == 0) {
      // alert("This email has been registerd by other user");
    } else {
      var userobj = {
        name: name,
        country: country,
        salary: salary,
        email: email,
      };
      if (sel_index === -1) {
        arr.push(userobj);
      } else {
        arr.splice(sel_index, 1, userobj);
      }
      localStorage.setItem("users", JSON.stringify(arr));
    }
    fetchData();
  }
  
  function createTable(index, name, country, salary, email) {
    var table = document.getElementById("search2");
    var row = table.insertRow();
    var namecell = row.insertCell(0);
    var countrycell = row.insertCell(1);
    var salarycell = row.insertCell(2);
    var emailcell = row.insertCell(3);
    var actioncell = row.insertCell(4);
  
  
    namecell.innerHTML = name;
    countrycell.innerHTML = country;
    salarycell.innerHTML = salary;
    emailcell.innerHTML = email;
    actioncell.innerHTML =
      '<button class="btn btn-primary editbtn" type="menu" onClick="onEdit(' +
      index +
      ')">Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-danger" id="123" onclick="modeldelete(' +
      index +
      ')" data-toggle="modal" data-target="#exampleModal">Delete</button>';
  
    $(document).ready(function () {
      $(".editbtn").click(function () {
        $("#hide").css("display", "block");
        $("#hide2").css("display", "none");
        $("#hide3").css("display", "block");
      });
    });
  
    var total = 0;
    for (j = 1; j <= index + 1; j++) {
      var x = document.getElementById("userlist").rows[j].cells[2].innerHTML;
      let m = parseFloat(x);
      total = total + m;
    }
    document.getElementById(
      "tfooter"
    ).innerHTML = `<tr> <td colspan="2">Total </td> <td id="footertotal" style="text-align: center"> </td> <td colspan="2"></td> </tr>`;
    document.getElementById("footertotal").innerHTML = total;
  }
  
  function modeldelete(index) {
    document.getElementById("delbtn").setAttribute("data-item", index);
  }
  
  function onDelete(index) {
    var a = document.getElementById("delbtn").getAttribute("data-item");
    // if (confirm('Are you sure to delete this record ?')) {
    arr.splice(a, 1);
    localStorage.users = JSON.stringify(arr);
    location.reload();
    fetchData();
    // }
  }
  
  function onEdit(index) {
    sel_index  = index;
    var userobj = arr[index];
    document.getElementById("name").value = userobj.name;
    document.getElementById("country").value = userobj.country;
    document.getElementById("salary").value = userobj.salary;
    document.getElementById("email").value = userobj.email;
    document.getElementById("sub").disabled = false;
  
    var userobj = { name: this.name,country: country,salary: salary,email: email};
    localStorage.setItem("users", JSON.stringify(arr));
  
    if (sel_index  === -1) {
      arr.push(userobj);
    } else {
      arr.splice(sel_index , 1, userobj);
    }
  }
  
  function searchUser(index) {
    var input, filter, table, tbody, td, i, txtValue, tr;
    input = document.getElementById("search1");
    filter = input.value.toUpperCase();
    table = document.getElementById("search2");
    tr = table.getElementsByTagName("tr");
  
    var salary = [];
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
  
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          var salary1 = tr[i].cells[2].innerText;
          salary.push(salary1);
        } else {
          tr[i].style.display = "none";
        }
      }
    }
    var count = 0;
    for (var j = 0; j < salary.length; j++) {
      count = count + parseInt(salary[j]);
    }
    document.getElementById("footertotal").innerHTML = count;
  }
  
 
  function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("country").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("email").value = "";
  }
  
  function enabledisable() {
    $(document).ready(function () {
      $(':input[type="submit"]').prop("disabled", true);
      $('input[type="text"]').keyup(function () {
        if ($(this).val() != "") {
          $('input[type="number"]').keyup(function () {
            if ($(this).val() != "") {
              $('input[type="email"]').keyup(function () {
                if ($(this).val() != "") {
                  $(':input[type="submit"]').prop("disabled", false);
                }
              });
            }
          });
        }
      });
    });
  }
  
  function checkName() {
    var data = document.getElementById("name").value;
    if (data == "") {
      document.getElementById("divi1").style.display = "block";
      document.getElementById("divi1").innerHTML = "Enter User Name !!...";
    } else {
      document.getElementById("divi1").style.display = "none";
    }
  }
  
  function checkCountry() {
    var data = document.getElementById("country").value;
    if (data.length == 0) {
      document.getElementById("divi2").style.display = "block";
      document.getElementById("divi2").innerHTML = "Enter User Country !!...";
    } else {
      document.getElementById("divi2").style.display = "none";
    }
  }
  
  function checkSalary() {
    var data = document.getElementById("salary").value;
    if (data == "") {
      document.getElementById("divi3").style.display = "block";
      document.getElementById("divi3").innerHTML = "Enter User Salary !!...";
    } else {
      document.getElementById("divi3").style.display = "none";
    }
  }
  
  function checkEmail() {
    var email = document.getElementById("email").value;
    for (i = 0; i < arr.length; i++) {
      if (email == arr[i]["email"]) {
        temp = 0;
        break;
      } else {
        temp = 1;
      }
    }
  
    var data = document.getElementById("email").value;
    if (data == "") {
      document.getElementById("divi4").style.display = "block";
      document.getElementById("divi4").innerHTML = "Enter User Email Id";
    } else if (data.charAt(data.length - 4) != ".") {
      document.getElementById("divi4").style.display = "block";
      document.getElementById("divi4").innerHTML = "Please enter valid email";
    } else if (temp == 0) {
      // alert("This email has been registerd by other user");
      document.getElementById("divi4").style.display = "block";
      document.getElementById("divi4").innerHTML =
        "This email has been registerd by other user ";
    } else {
      document.getElementById("divi4").style.display = "none";
    }
  }
  

  $(document).ready(function () {
    $("#adduser").click(function () {
      fetchData();
      $("#hide").css("display", "block");
      $("#hide2").css("display", "block");
      $("#hide3").css("display", "none");
      enabledisable();
      clearForm();
    });
  });
  
  $(document).ready(function () {
    $("#sub").click(function () {
      $("#hide2").css("display", "none");
      $("#hide3").css("display", "none");
    });
  });
  
  $(document).ready(function () {
    $("#sub1").click(function () {
      $("#hide").css("display", "none");
      $("#hide2").css("display", "none");
      $("#hide3").css("display", "none");
      window.location.reload();
    });
  });
  