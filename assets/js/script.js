const date = new Date();
const display = date.getDate() + "/"+ date.getMonth() + "/" + date.getFullYear();
    if(date.getMonth > 1){
        date.getDate() + "/0"+ date.getMonth() + "/" + date.getFullYear()
    }
document.querySelector('.date').innerHTML = display;
console.log(date.getMonth.value)
