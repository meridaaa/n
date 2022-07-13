// (function () {
// 	'use strict'

// 	// Fetch all the forms we want to apply custom Bootstrap validation styles to
// 	var forms = document.querySelectorAll('.needs-validation')

// 	// Loop over them and prevent submission
// 	Array.prototype.slice.call(forms)
// 		.forEach(function (form) {
// 			form.addEventListener('submit', function (event) {
// 				if (!form.checkValidity()) {
// 					event.preventDefault()
// 					event.stopPropagation()
// 				}

// 				form.classList.add('was-validated')
// 			}, false)
// 		})
// })()

(function () {
	'use strict'
	
	var form = document.querySelector('.needs-validation')

	form.addEventListener("click",
	function(e) {
	e.preventDefault();
	const login = "http://37.32.29.134:3000/api/v1/auth/login-by-password";

	fetch(login, {
		method: "POST",
		headers: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": "application/json",
		},
		body: JSON.stringify({
		phoneNumber: form.phoneNumber.value,
		password: form.password.value,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
		console.log(data);
		// code here //
		console.log(data);
		if(serverError)
		console.log('++++++');
		if (data.success) {
			form.classList.add('was-validated')/*opens the target page while Id & password matches*/
			window.open(
			"index.html"
			);
			
		} else {
			alert("Error Password or Username"); /*displays error message*/
			e.preventDefault()
			e.stopPropagation()
		}
		})
		.catch((err) => {
		console.log(err);
		});
}, false)
		})
()

// (function () {
// 	'use strict'

// 	// Fetch all the forms we want to apply custom Bootstrap validation styles to
// 	var forms = document.querySelectorAll('.needs-validation')

// 	// Loop over them and prevent submission
// 	Array.prototype.slice.call(forms)
// 		.forEach(function (form) {
// 			form.addEventListener('submit', function (event) {
// 				if (!form.checkValidity()) {
// 					event.preventDefault()
// 					event.stopPropagation()
// 				}

// 				form.classList.add('was-validated')
// 			}, false)
// 		})
// })()


// var login = () => {
// 	const url= 'http://37.32.29.134:3000/api/v1/auth/login-by-password';
//     fetch(url).then(data => data.json())
//     .then(news => { 
// }

// let button = form.submit.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const login = "http://37.32.29.134:3000/api/v1/auth/login-by-password";

//   fetch(login, {
//     method: "POST",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       phoneNumber: form.phoneNumber.value,
//       password: form.password.value,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       // code here //
//       if (data.error) {
//         alert("Error Password or Username"); /*displays error message*/
//       } else {
//         window.open(
//           "index.html"
//         ); /*opens the target page while Id & password matches*/
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// (function () {
// 	'use strict'

// 	// Fetch all the forms we want to apply custom Bootstrap validation styles to
// 	var forms = document.querySelectorAll('.needs-validation')

// 	// Loop over them and prevent submission
// 	Array.prototype.slice.call(forms)
// 			.forEach(function (form) {'submit',
// 			clickLogin = (e) => {
// 			e.preventDefault();
// 			fetch ("http://37.32.29.134:3000/api/v1/auth/login-by-password", {
// 				method: "POST",
// 				body: JSON.stringify({
// 				email: this.state.idValue,
// 				password: this.state.pwValue
// 				}),
// 			})
// 			.then((response) => response.json())
// 			.then((result) => {
// 				if(result.message === "SUCCESS")
// 					form.classList.add('was-validated')
// 				if (!form.checkValidity()) {
// 								e.preventDefault()
// 								e.stopPropagation()
// 							} 
							
// 			});
// 		}
// 	}, false);
// })
