var input = document.querySelectorAll('input')
input.forEach(item=>{
    item.addEventListener('click', ()=>{
       item.nextElementSibling.style.width = "95%"
        item.nextElementSibling.style.opacity = "1" 
    })
    item.addEventListener('blur', () => {
        item.nextElementSibling.style.width = "0%"
        item.nextElementSibling.style.opacity = "0"
    })
})