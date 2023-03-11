const pvalue = document.getElementById('count');
let count = parseInt(localStorage.getItem("count"));
pvalue.innerText = count;
document.getElementById('click-btn').addEventListener('click', () => {
    count++;
    pvalue.innerText = count;
    localStorage.setItem("count", count.toString());
})
