document.addEventListener("DOMContentLoaded", () => {

  // your code here
  const form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    doToList(e.target.new_task_description.value)
    form.reset()
  })


  function doToList (todo){
    let li = document.createElement("li")
    let btn = document.createElement("button")
    btn.addEventListener("click", deleteList)

    btn.textContent = "x"
    li.textContent = `${todo} `
    li.appendChild(btn)
    document.querySelector("#tasks").appendChild(li)

    //styling the li
    li.style.paddingBottom = "5px"
    li.style.marginLeft = "-20px"
    li.style.color = "brown"

    btn.style.backgroundColor = "brown"
    btn.style.fontWeight = "600"
    btn.style.fontSize = "10px"
    btn.style.height = "20px"
  }

  function deleteList(e){
    e.target.parentNode.remove()
  }



  
});