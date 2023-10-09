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