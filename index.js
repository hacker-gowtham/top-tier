//emailjs
function sendmail(e){
   
    console.log("gowtham");
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("mail").value,
        phone_number: document.getElementById("number").value,
        type: document.getElementById("type").value,
        message: document.getElementById("message").value,
     }
     console.log(params);
     emailjs.send('service_tbzn7wd','template_qaurv6x',params).then(function(res){
         alert("Mail send successfully");
     });
}






  // // Function to add or remove the 'fixed-top' class based on screen width
  // function handleNavbarSticky() {
  //   var navbar = document.querySelector('.navbar');
  //   if (window.innerWidth < 750) {
  //     navbar.classList.add('fixed-top');
  //   } else {
  //     navbar.classList.remove('fixed-top');
  //   }
  // }

  // // Initial call to set the class based on the page load
  // handleNavbarSticky();

  // // Listen for window resize events and adjust the class
  // window.addEventListener('resize', handleNavbarSticky);
