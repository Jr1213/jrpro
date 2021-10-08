// getting yaer dynimcly in footer
const footer = document.querySelector('.year');
const data = new Date().getFullYear();
footer.innerHTML = JSON.stringify(data)