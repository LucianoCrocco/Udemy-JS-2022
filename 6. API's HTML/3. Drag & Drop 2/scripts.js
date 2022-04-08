const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')
//dataTransfer
//setData: Establece la información que queremos compartir
//getData: Establece la información que queremos obtener
pendingTasks.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
    //console.log(e.dataTransfer.getData("text"));
})

pendingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

pendingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

//OBLIGATORIO, SI NO, NO FUNCIONA
finishedTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})

finishedTasks.addEventListener('drop', (e) => {
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    finishedTasks.appendChild(pendingTasks.removeChild(element))
})