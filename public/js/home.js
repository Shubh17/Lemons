$(document).ready(function () {



  $("#sendInstructions").click(function () {

      // https://us-central1-lemonade-690ad.cloudfunctions.net/helloWorld

    var urlToPing = "https://us-central1-lemonade-690ad.cloudfunctions.net/sendMeCustomerEmail?emailID="
                        
     $.ajax({
      url: urlToPing + $("#email").val(),
      type: 'GET',
      dataType: 'json', // added data type
      success: function (res) {
        console.log(res);
        alert(res);
      }
    });

    

    alert("If you entered a valid email address, you'll receive an email soon at "+ $("#email").val()+". Thank you!")
    
  });
})
