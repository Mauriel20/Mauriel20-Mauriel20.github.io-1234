 function myFunction1() {
            let element = document.getElementById("texto1");
            element.classList.toggle("dark-mode");

            let element2 = document.querySelectorAll('div.card');
            for (let index = 0; index < element2.length; index++) {
                element2[index]["style"].color = "black";
            }
           
            const switchButton = document.getElementById('switch');
            switchButton.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active'

        }

           function outputbox01(vol) {
            document.querySelector('#fontsize').value = vol;
        }

        $("#fader").on("input change", function () {
            $('#texto1').css("font-size", $(this).val() + "px");
        });


        
     