const a = document.getElementById("center_form");
const aa = document.getElementById("center_input");
const outer_div = document.getElementById("center");

a.addEventListener("submit", function(event){
    let check = true;
    event.preventDefault();
    console.log(aa.value);

    const new_task = document.createElement("div");
    new_task.style.height = "35px";
    new_task.style.paddingTop = "15px";
    new_task.style.border = "1px solid rgba(0,0,0,0.3)"

    const task_checkbox = document.createElement("input");
    task_checkbox.type="checkbox";

    const task_text = document.createElement("span");
    task_text.textContent = aa.value;
    task_text.style.fontSize = "20px";
    task_text.style.marginLeft = "30px";

    const task_delete = document.createElement("div");
    task_delete.style.float = "right";
    task_delete.style.marginRight = "15px";
    task_delete.style.height = "15px";
    task_delete.style.width = "15px";
    task_delete.style.backgroundColor = "red";


    new_task.append(task_checkbox);
    new_task.append(task_text);
    new_task.append(task_delete);

    outer_div.append(new_task);

    outer_div.style.height = (outer_div.offsetHeight + 50) + "px";

    task_checkbox.addEventListener("change", () => {
        const strike = task_text;

        if (check){
            strike.innerHTML = "<s>" + strike.textContent + "</s>";
            check=false;
        }
        else{
            strike.innerHTML = strike.textContent;
            check=true;
        }
        
    });

    task_delete.addEventListener("click", () => {
        new_task.remove();
    })



});