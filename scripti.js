function getLocal(){

    const date = new Date();

    const day = date.getDay();


    var text = JSON.parse(localStorage.getItem("TODO"));
    console.log(text);
    if (text){


        if(day != text[0].expiry){

            for (let i in text){
                let value = text[i].task;
    
                let checked = text[i].isChecked;
    
                const item = document.createElement("p");
    
                item.innerHTML = value;
    
                const element = document.getElementById("list");
    
                element.appendChild(item);
    
                const box = document.createElement("input");
    
                box.setAttribute("type","checkbox");
    
                box.addEventListener('click',check);
    
                box.setAttribute("id",value);
    
                box.setAttribute("class","checkbox");
    
                item.appendChild(box);
            
            
        }
        return;
    }

        else {
        
        for (let i in text){
            let value = text[i].task;

            let checked = text[i].isChecked;

            const item = document.createElement("p");

            item.innerHTML = value;

            const element = document.getElementById("list");

            element.appendChild(item);

            const box = document.createElement("input");

            box.setAttribute("type","checkbox");

            box.addEventListener('click',check);

            box.setAttribute("id",value);

            box.setAttribute("class","checkbox");

            item.appendChild(box);

            if(checked){
                box.setAttribute("checked",true);
            }

            TODO = text;



            }

 
        }

    }

}



var TODO;

var expiry;

function saveTask(){

    const date = new Date();

    const expiry = date.getDay();

    let task = document.getElementById("Task").value;
    
    const item = document.createElement("p");

    item.innerHTML = task;

    const box = document.createElement("input");

    box.setAttribute("type","checkbox");

    box.setAttribute("id",task);

    box.setAttribute("class","checkbox");

    box.addEventListener('click',check);

    item.appendChild(box);

    const element = document.getElementById("list");

    element.appendChild(item);
   
    const obj = { task, expiry, isChecked:false };

    console.log(obj);

    TODO.push(obj);

    console.log(TODO);

    document.getElementById("Task").value = "";

    localStorage.setItem("TODO", JSON.stringify(TODO));

    

}  



function check(){

    alert("working");

    const date = new Date();

    const expiry = date.getDay();

    const TODO =[];

    localStorage.clear();
    
    const elements = document.getElementsByClassName("checkbox");


    for (let element of elements){

        let task = element.id;

        console.log(task);

        const obj = {task, expiry, isChecked:false};

        if (element.checked){
            
            obj.isChecked = true;
        }
    

          TODO.push(obj); 

    }

          localStorage.setItem("TODO", JSON.stringify(TODO));



        
    }








