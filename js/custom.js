const mail = document.getElementById("btn");

$("#btn").click(function (e) {
  Swal.fire(
    "Good job!",
    "Check your inbox for your login credentials",
    "success"
  );
});