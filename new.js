function clearerror(){
	$ (".danger").hide();
	
}
		function registration() {

			var name = document.getElementById("t1").value;
			var email = document.getElementById("t2").value;
			var gen = document.getElementById("t3").value;
			var ph = document.getElementById("t4").value;
			var aadhr = document.getElementById("t5").value;
			var dob = document.getElementById("t6").value;
			var male= document.getElementById("t3");
			var female= document.getElementById("t7");
			var other= document.getElementById("t8");
			var captcha = document.getElementById("my_captcha_form").value;

			var uidai = /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
			var letters = /^[a-zA-Z]+ [a-zA-Z]+$/;
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			var year = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
			if (name == '') {
				
				$("#name_error").show();
			}
			else if (!letters.test(name)) {
				alert('Enter your name correctly');
			}
			else if (email == '') {
				
				$("#email_error").show();
			}
			else if (!filter.test(email)) {
				alert('Invalid email ID ');
			}
			else if (dob == '') {
				
				$("#dob_error").show();
			}
			else if (!year.test(dob)) {
				alert('you are not Eligible.');
			}
			else if (ph == '') {
				
				$("#phone_error").show();
			}
			else if (!phone.test(ph)) {
				alert('Enter Phone Number Correctly');
			}
			else if (aadhr == '') {
				
				$("#aadhar_error").show();
			}
			else if (!uidai.test(aadhr)) {
				alert('Recheck  Aadhar No. again');
			}
			
			
			else {
				alert('This project couldn’t have been as successful with your involvement. Thank you so much for volunteering. We will contact you Soon');


				window.location = src = "https://images.livemint.com/img/2020/04/06/600x338/PTI05-04-2020_000236B_1586158130448_1586158148409.jpg";

				setTimeout(registration, 5000);
			}
		}




		$("#btn").click(function () {
			$("#pannel").toggle();
		})

		$("#pannel").accordion({
			collapsible: true,
			event: "click",
			heightStyle: true,

		});