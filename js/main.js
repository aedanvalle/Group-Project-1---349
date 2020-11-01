window.onload = (window) => 
{
      
    const URL = 'https://us-central1-buisness-card-generator.cloudfunctions.net/connect';
    let selectedTemplate;
    let selectedTheme;
    
    /**********************************************
     * The following code are all event handlers
     * that listen for a click event. Once a 
     * click occurs, I change CSS classes.
     **********************************************/

    // Event listender for layout one (template menu) selection.
    document.getElementById('template-one').addEventListener('click', () => 
    {
        selectedTemplate = 1;
        // Change css classes of following HTML elements.
        document.getElementById("template-one").className = "selected";
        document.getElementById("template-two").className = "not-selected";
        document.getElementById("left-column").className = "left-column";
        document.getElementById("right-column").className = "right-column";
        document.getElementById("business-card-preview").className = "business-card";
    })

    // Event listender for layout two (template menu).
    document.getElementById('template-two').addEventListener('click', () => 
    {
        selectedTemplate = 2;
        // Change css classes of following HTML elements.
        document.getElementById("template-one").className = "not-selected";
        document.getElementById("template-two").className = "selected";
        document.getElementById("left-column").className = "top-row";
        document.getElementById("right-column").className = "bottom-row";
        document.getElementById("business-card-preview").className = " template-two";
    })

    // Event listeners for color one (color menu).
    document.getElementById('theme-1').addEventListener('click', () => 
    {
        selectedTheme = 1;
        // Change css classes of following HTML elements.
        document.getElementById("theme-1").className = "selected";
        document.getElementById("theme-2").className = "not-selected";
        document.getElementById("theme-3").className = "not-selected";
        document.getElementById("theme-4").className = "not-selected";
        document.getElementById("theme-5").className = "not-selected";
        document.getElementById("business-card-preview").className += " theme-one";
        document.getElementById("business-card-preview").classList.remove("theme-two");
        document.getElementById("business-card-preview").classList.remove("theme-three");
        document.getElementById("business-card-preview").classList.remove("theme-four");
        document.getElementById("business-card-preview").classList.remove("theme-five");
    })

    // Event listener for color two (color menu).
    document.getElementById('theme-2').addEventListener('click', () => 
    {   
        selectedTheme = 2;
        // Change css classes of following HTML elements.
        document.getElementById("theme-1").className = "not-selected";
        document.getElementById("theme-2").className = "selected";
        document.getElementById("theme-3").className = "not-selected";
        document.getElementById("theme-4").className = "not-selected";
        document.getElementById("theme-5").className = "not-selected";
        document.getElementById("business-card-preview").className += " theme-two";
        document.getElementById("business-card-preview").classList.remove("theme-one");
        document.getElementById("business-card-preview").classList.remove("theme-three");
        document.getElementById("business-card-preview").classList.remove("theme-four");
        document.getElementById("business-card-preview").classList.remove("theme-five");
    })

    // Event listener for color three (color menu).
    document.getElementById('theme-3').addEventListener('click', () => 
    {   
        selectedTheme = 3;
        // Change css classes of following HTML elements.
        document.getElementById("theme-1").className = "not-selected";
        document.getElementById("theme-2").className = "not-selected";
        document.getElementById("theme-3").className = "selected";
        document.getElementById("theme-4").className = "not-selected";
        document.getElementById("theme-5").className = "not-selected";
        document.getElementById("business-card-preview").className += " theme-three";
        document.getElementById("business-card-preview").classList.remove("theme-two");
        document.getElementById("business-card-preview").classList.remove("theme-one");
        document.getElementById("business-card-preview").classList.remove("theme-four");
        document.getElementById("business-card-preview").classList.remove("theme-five");
    })

    // Event listener for color four (color menu).
    document.getElementById('theme-4').addEventListener('click', () => 
    {   
        selectedTheme = 4;
        // Change css classes of following HTML elements.
        document.getElementById("theme-1").className = "not-selected";
        document.getElementById("theme-2").className = "not-selected";
        document.getElementById("theme-3").className = "not-selected";
        document.getElementById("theme-4").className = "selected";
        document.getElementById("theme-5").className = "not-selected";
        document.getElementById("business-card-preview").className += " theme-four";
        document.getElementById("business-card-preview").classList.remove("theme-two");
        document.getElementById("business-card-preview").classList.remove("theme-three");
        document.getElementById("business-card-preview").classList.remove("theme-one");
        document.getElementById("business-card-preview").classList.remove("theme-five");
    })

    // Event listener for color five (color menu).
    document.getElementById('theme-5').addEventListener('click', () => 
    {   
        selectedTheme = 5;
        // Change css classes of following HTML elements.
        document.getElementById("theme-1").className = "not-selected";
        document.getElementById("theme-2").className = "not-selected";
        document.getElementById("theme-3").className = "not-selected";
        document.getElementById("theme-4").className = "not-selected";
        document.getElementById("theme-5").className = "selected";
        document.getElementById("business-card-preview").className += " theme-five";
        document.getElementById("business-card-preview").classList.remove("theme-two");
        document.getElementById("business-card-preview").classList.remove("theme-three");
        document.getElementById("business-card-preview").classList.remove("theme-one");
        document.getElementById("business-card-preview").classList.remove("theme-four");
    })

    // Event listener for preview button (work in progress).
    document.getElementById('btnPreview').addEventListener('click', () => 
    {   
        // Get the value of the input boxes.
        let companyName = document.getElementById('input-company-name').value;
        let jobTitle = document.getElementById('input-job-title').value;
        let fullName = document.getElementById('input-full-name').value;
        let street = document.getElementById('input-street').value;
        let city = document.getElementById('input-city').value;
        let state = document.getElementById('input-state').value;
        let zip = document.getElementById('input-zip').value;
        let email = document.getElementById('input-email').value;
        let phone = document.getElementById('input-phone').value;
        let fax = document.getElementById('input-fax').value;
        // Use the input value to change inner HTML (for the business card preview).
        document.getElementById('label-company-name').innerHTML = companyName;
        document.getElementById('label-job-title').innerHTML = jobTitle;
        document.getElementById('label-full-name').innerHTML = fullName;
        document.getElementById('label-street').innerHTML = street;
        document.getElementById('label-city').innerHTML = city;
        document.getElementById('label-state').innerHTML = state;
        document.getElementById('label-zip').innerHTML = zip;
        document.getElementById('label-email').innerHTML = email;
        document.getElementById('label-phone').innerHTML = phone;
        document.getElementById('label-fax').innerHTML = fax;
    })

    // Event handler for upload button.
    document.getElementById('btnSave').addEventListener('click', () => 
    {   
        // This button was requested by Matt, put code here?
        console.log('hello')
        let companyName = document.getElementById('input-company-name').value;
        let jobTitle = document.getElementById('input-job-title').value;
        let fullName = document.getElementById('input-full-name').value;
        let street = document.getElementById('input-street').value;
        let city = document.getElementById('input-city').value;
        let state = document.getElementById('input-state').value;
        let zip = document.getElementById('input-zip').value;
        let emailAddress = document.getElementById('input-email').value;
        let phoneNumber = document.getElementById('input-phone').value;
        let faxNumber = document.getElementById('input-fax').value;


        //was used for testing on local firestore emulator
        //const url = 'http://localhost:5001/buisness-card-generator/us-central1/connect'

        fetchConfig = {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "name": fullName,
                "jobTitle" : jobTitle,
                "companyName" : companyName,
                "emailAddress" : emailAddress,
                "phone":phoneNumber,
                "faxNumber":faxNumber,
                "address":{
                    "streetAddress":street,
                    "city": city,
                    "state":state,
                    "zip":zip
                }
            })
        }

        let modal = document.getElementById("saveModal");
        modal.style.display = "block";
        let modalText = document.getElementById("save-modal-text")
        modalText.innerHTML = "Saving to database....";


       fetch(URL, fetchConfig)
        .then(response => 
            response.json()
        )
        .then(response =>{
            docID = response.id
            console.log(docID)
            modalText.innerHTML = `Use this key to retrieve your document: ${docID}`
        }
        )
        .catch(error => {
            console.log(error)
        })
    })          
    
    document.getElementById('btnLoad').addEventListener('click', ()=>{

        let modal = document.getElementById("loadModal");
        modal.style.display = "block"; 
        
    })


    document.getElementById("modalButton").addEventListener('click', async() =>{
        console.log('clicked')
        let modal = document.getElementById("loadModal");
        let modalText = document.getElementById("modal-text")
        modalText.innerHTML = "Loading data...."
        let docRef = document.getElementById('input-search-key').value;


        let data = await fetch(URL + '/' + docRef)
        .then(response => {
            return response.json()
        })
        .then(response =>{
            console.log(response)
             
            document.getElementById('input-company-name').value = response.companyName;
            document.getElementById('input-full-name').value = response.name;
            document.getElementById('input-job-title').value = response.jobTitle;
            document.getElementById('input-street').value = response.address.streetAddress;
            document.getElementById('input-city').value = response.address.city;
            document.getElementById('input-state').value = response.address.state;
            document.getElementById('input-zip').value = response.address.zip;
            document.getElementById('input-email').value = response.emailAddress;
            document.getElementById('input-phone').value = response.phone;
            document.getElementById('input-fax').value = response.faxNumber;

            //updating the business card values
            document.getElementById('label-company-name').innerHTML = response.companyName;
            document.getElementById('label-job-title').innerHTML = response.jobTitle;
            document.getElementById('label-full-name').innerHTML = response.name;
            document.getElementById('label-street').innerHTML = response.address.streetAddress;
            document.getElementById('label-city').innerHTML = response.address.city;
            document.getElementById('label-state').innerHTML = response.address.state;
            document.getElementById('label-zip').innerHTML = response.address.zip;
            document.getElementById('label-email').innerHTML = response.emailAddress;
            document.getElementById('label-phone').innerHTML = response.phone;
            document.getElementById('label-fax').innerHTML = response.fax;
            modal.style.display = "none";
            modalText.innerHTML = "";
            return
        }
        )
        .catch(error => {
            modalText.innerHTML = "Could not load find save data.";
            console.log(error)
            return 
        })
        
    })

    document.getElementsByClassName("close-btn")[0].addEventListener('click', ()=>{
        let modal = document.getElementById("loadModal");
        modal.style.display = "none";
        let modalText = document.getElementById("modal-text");
        modalText.innerHTML = "Reference Number:";
    })

    document.getElementsByClassName("close-btn")[1].addEventListener('click', ()=>{
        let modal = document.getElementById("saveModal");
        modal.style.display = "none";
        let modalText = document.getElementById("save-modal-output");
        modalText.innerHTML = "";
    })

    document.getElementById('btnDownload').addEventListener('click', () => {
        //var card = getElementById('business-card-preview')
        scrollTo(0,0)
        html2canvas(document.querySelector("#business-card-preview"), {
            onrendered: function(canvas) {         
                var imgData = canvas.toDataURL(
                    'image/png');              
                var doc = new jsPDF({
                    orientation: "landscape",
                    unit: "in",
                    format: [4, 2]
                  });
                doc.addImage(imgData, 'PNG', 0, 0, 4, 2);
                doc.save(`business-card.pdf`);
            }
         })

    })
}

