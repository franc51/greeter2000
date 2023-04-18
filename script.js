let button = document.getElementById("btn");

button.addEventListener("click", () => {
    let fname = document.getElementById("f-name").value;
    let lname = document.getElementById("l-name").value;
    let age = document.getElementById("age").value;

    console.log(fname);
    console.log(lname);
    console.log(age);
    let body = document.getElementsByTagName('body')[0];

    let newdiv = document.createElement("div");
    newdiv.classList.add("greeter");
    newdiv.style.display = "block";

    let container = document.getElementById("container");
    container.style.display = "none";
    body.appendChild(newdiv);
    let text = document.createTextNode("Hello " + fname + " " + lname + " how are you today? ");
    let secondtext = document.createTextNode("I know you are " + age + " years old :)");
    newdiv.appendChild(text);
    newdiv.appendChild(secondtext);
})