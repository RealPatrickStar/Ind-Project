        document.getElementById('read').onclick = display;
        document.getElementById('addQuote').onclick = add;
        document.getElementById('change').onclick = update;
        document.getElementById('remove').onclick = nuke;
        document.getElementById('hide').onclick = clear;
       

        function display(){
            
            const xhttp = new XMLHttpRequest();
            let result;
            xhttp.open("GET","https://gunpreet-dhillon.com/quotes", true);
            xhttp.send();
            xhttp.onreadystatechange = function(){
               
                if (this.readyState == 4 && this.status == 200){
                    let dataArr = JSON.parse(this.responseText);   
                    for (let i=0; i<dataArr.length;i++){
                        document.getElementById("scoresData").innerHTML += "<p> " +dataArr[i].num +' : " '+dataArr[i].quote + ' "'+" - " +  dataArr[i].author  + "</p>";
                    }
                    
                }
                
            }
           // document.getElementById("prompt").innerHTML = this.responseText;
            //document.getElementById("prompt").innerHTML=""+result[1].score;

        
        }
        

        function add(){
            if((input.quote.value=="") || (input.author.value=="")){
            document.getElementById("prompt2").innerHTML="ERROR! Please add both quote and author";
        }

            else{
                const xhttp = new XMLHttpRequest();
                let num = input.quote.value;
                let nam = input.author.value;
                let act = "add";

                xhttp.open("GET","https://gunpreet-dhillon.com/addQ/?quote="+num+"&author="+nam +"&action="+act, true);
                xhttp.send();

                xhttp.onreadystatechange = function(){
                    if (this.readyState == 4 && this.status == 200){
                    document.getElementById("prompt2").innerHTML = this.responseText;
                    }
                }
                clearQuestion();
                //document.getElementById("prompt").innerHTML="added successfully";
            }
        }

        function update(){
            if((updateForm.quote.value=="") || (updateForm.author.value=="")){
            document.getElementById("prompt3").innerHTML="ERROR! Please add both quote and author";
        }

            else{
                const xhttp = new XMLHttpRequest();
                let num = updateForm.quote.value;
                let nam = updateForm.author.value;
                let id = updateForm.num.value;
                let act = "update";

                xhttp.open("GET","https://gunpreet-dhillon.com/addQ/?quote="+num+"&author="+nam +"&number="+id +"&action="+act, true);
                xhttp.send();

                xhttp.onreadystatechange = function(){
                    if (this.readyState == 4 && this.status == 200){
                    document.getElementById("prompt3").innerHTML = this.responseText;
                    }
                }
                clearQuestion();
                //document.getElementById("prompt").innerHTML="added successfully";
            }
        }


        function nuke(){
                const xhttp = new XMLHttpRequest();
                let num = deleteForm.num.value;
                let act = "delete";

                xhttp.open("GET","https://gunpreet-dhillon.com/addQ/?number="+num +"&action="+act, true);
                xhttp.send();

                xhttp.onreadystatechange = function(){
                    if (this.readyState == 4 && this.status == 200){
                    document.getElementById("prompt4").innerHTML = this.responseText;
                    }
                }
                clearQuestion();
                //document.getElementById("prompt").innerHTML="added successfully";
            }
        

        function clear(){
        document.getElementById("scoresData").innerHTML="";
        }
        


        function clearQuestion(){
        document.getElementById("quote").value="";
        document.getElementById("author").value="";
        }