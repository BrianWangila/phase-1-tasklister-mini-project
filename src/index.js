document.addEventListener("DOMContentLoaded", () => {

  // your code here
  const form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    doToList(e.target.new_task_description.value)
  })


  function doToList (todo){
    let li = document.createElement("li")
    li.textContent = todo
    document.querySelector("#tasks").appendChild(li)
  }







  
});