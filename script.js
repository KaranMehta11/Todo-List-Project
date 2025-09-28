let ctr = 1;

function deletetask(index) {
  const element = document.getElementById(index);
  element.parentNode.removeChild(element);
}

function addtask() {

  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const delbutton = document.createElement("button");

  h3.innerHTML = document.querySelector("input").value;
  delbutton.innerHTML = "X";

  div.setAttribute("id", ctr);
  delbutton.setAttribute("onclick", "deletetask("+ ctr + ")");
  
  div.append(h3);
  div.append(delbutton);
  document.getElementById("random").appendChild(div);

  ctr = ctr + 1;

  document.querySelector("input") = "";
}
