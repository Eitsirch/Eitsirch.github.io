    // drag and drop scripts
            function allowDrop(ev) {
              ev.preventDefault();
            }
            
            function drag(ev) {
              ev.dataTransfer.setData("text", ev.target.id);
            }
            
            function drop(ev) {
              ev.preventDefault();
              var data = ev.dataTransfer.getData("text");
              ev.target.appendChild(document.getElementById(data));
            }
    // Tab scripts 
            function openCity(evt, cityName) {
           
               var i, tabcontent, tablinks;
              
            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tabcontentspring");
            for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";}
             
             tabcontent = document.getElementsByClassName("tabcontentsummer");
            for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";}
             
             tabcontent = document.getElementsByClassName("tabcontentautumn");
            for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";}
             
             tabcontent = document.getElementsByClassName("tabcontentwinter");
            for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
             }
  
             // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            
            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
            }
           