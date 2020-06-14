//sticky navbar
            window.onscroll = function() {myFunction()};

            // Get the navbar
            var navbar = document.getElementById("navbar");

            // Get the offset position of the navbar
            var sticky = navbar.offsetTop;

            // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
            function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
            }

            //floating input controller
            
            const FloatLabel = (() => {
  
                // add active class
                const handleFocus = (e) => {
                const target = e.target;
                target.parentNode.classList.add('active');
                target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
                };

                // remove active class
                const handleBlur = (e) => {
                const target = e.target;
                if(!target.value) {
                target.parentNode.classList.remove('active');
                }
                target.removeAttribute('placeholder');
                };

                // register events
                const bindEvents = (element) => {
                const floatField = element.querySelector('input');
                floatField.addEventListener('focus', handleFocus);
                floatField.addEventListener('blur', handleBlur);    
                };

                // get DOM elements
                const init = () => {
                const floatContainers = document.querySelectorAll('.float-container');

                floatContainers.forEach((element) => {

                if (element.querySelector('input').value) {
                element.classList.add('active');
                }

                bindEvents(element);
                });
                };

                return {
                init: init
                };
                })();

                FloatLabel.init();

            //password match check

                    function pwcheck(){
                        var password = document.getElementById("pw").value;
                        var passwordconfirm = document.getElementById("pwconfirm").value;
                        
                        if (password == passwordconfirm)
                            {
                                document.getElementsByClassName("password-match").style.opacity = "0";
                            }
                            else{
                                document.getElementsByClassName("password-match").style.opacity = "1";
                            }
                    }
                    document.addEventListener("DOMContentLoaded",(event) => {
                        document.querySelectorAll('#pw, #pwconfirm').keyup(pwcheck());
                    })

                    //password visibility toggle

                    document.addEventListener("DOMContentLoaded",(event) => {
                        
                        document.getElementsByClassName(".password-toggle-button").onclick(function(){
                            if(document.getElementsByClassName(".password").getAttribute("type") == 'password')
                            {
                                document.getElementsByClassName(".password").style.setAttribute("type", "text");
                            }
                            else{
                                document.getElementsByClassName(".password").style.setAttribute("type", "password");
                            }
                        })
                    })

                    //password length check
                    
                    function passwordlength() {
                        var password = document.getElementById('pw').value;
                        var passwordconfirm = document.getElementById("pwconfirm").value;
                        if(password.length < 8 && password != "default text")
                        {
                            document.getElementsByClassName("warn-text").style.opacity = "1";
                        }
                        else{
                            document.getElementsByClassName("warn-text").style.opacity = "1";
                        }}
                    document.addEventListener("DOMContentLoaded",(event) => {
                        document.getElementById('pw').addEventListener("keyup", passwordlength());
                    })