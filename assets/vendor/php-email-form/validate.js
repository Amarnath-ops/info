


          document.getElementById("myForm").addEventListener("submit", function (event) {
            

            let name = document.getElementById("name-field").value;
            let email = document.getElementById("email-field").value;
            let errorMessage=document.getElementById("error-message");
          

            // Regular Expressions for validation
            let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            let nameRegex = /^[a-z ,.'-]+$/i
          
           
                if(!nameRegex.test(name)){
                errorMessage.innerText='Invalid Name'
                errorMessage.style.display="block"
                setTimeout(()=>{
                    errorMessage.style.display="none"
                },2000)

                event.preventDefault();
                return 0;
            }
            else if (!emailRegex.test(email)) {
            
                errorMessage.innerText="Invalid Email"
                errorMessage.style.display="block"
                setTimeout(() => {
                    errorMessage.style.display="none"
                },2000);
                event.preventDefault();
                return 0;
            }
        

          
            alert("Form submitted successfully!");

        
        });
