 const btn =  document.getElementById('submitBtn');
       btn.addEventListener('click', function() {
            const otpInput = document.getElementById('otpInput').value;
            const messageDiv = document.getElementById('message');
            
            messageDiv.textContent = '';
            
            
            const otpPromise = new Promise((resolve, reject) => {
                if (otpInput === "1234") {
                    resolve("OTP verified successfully!");
                } else {
                    reject("Invalid OTP. Please try again.");
                }
            });
            
            otpPromise
                .then((successMessage) => {
                    messageDiv.textContent = successMessage;
                    messageDiv.classList.add('success');
                })
                .catch((errorMessage) => {
                    messageDiv.textContent = errorMessage;
                    messageDiv.classList.add('error');
                });
        });