        document.getElementById('read').onclick = display;
        document.getElementById('readLast').onclick = displayLast;

        function display(){
            
            const xhttp = new XMLHttpRequest();
            let result;
            let act = "display";

            xhttp.open("GET","https://gunpreet-dhillon.com/quotes", true);
            xhttp.send();
            xhttp.onreadystatechange = function(){
               
                if (this.readyState == 4 && this.status == 200){
                    let dataArr = JSON.parse(this.responseText);   
                    for (let i=0; i<dataArr.length;i++){
                        document.getElementById("scoresData").innerHTML += "<p>"+'" '+dataArr[i].quote + ' "'+" - " +  dataArr[i].author  + "</p>";
                    }
                    
                }
                
            }
           // document.getElementById("prompt").innerHTML = this.responseText;
            //document.getElementById("prompt").innerHTML=""+result[1].score;

        
        }
        
        function displayLast(){
            
            const xhttp = new XMLHttpRequest();
            let result;
            let act = "display";

            xhttp.open("GET","https://gunpreet-dhillon.com/quotes", true);
            xhttp.send();
            xhttp.onreadystatechange = function(){
               
                if (this.readyState == 4 && this.status == 200){
                    let dataArr = JSON.parse(this.responseText);   
                    
                    document.getElementById("scoresData").innerHTML = "<p>"+'" '+dataArr[(dataArr.length-1)].quote + ' "'+" - " +  dataArr[(dataArr.length-1)].author  + "</p>";
                    
                    
                }
                
            }
           // document.getElementById("prompt").innerHTML = this.responseText;
            //document.getElementById("prompt").innerHTML=""+result[1].score;

        
        }

