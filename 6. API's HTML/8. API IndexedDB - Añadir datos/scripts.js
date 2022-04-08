const indexedDB = window.indexedDB
const form = document.getElementById('form')

if (indexedDB && form) {
    let db
    const request = indexedDB.open('tasksList', 1)

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
    }
    request.onupgradeneeded = (e) => {
        db = e.target.result
        console.log('Create', db)
        db.createObjectStore('tasks', {
            autoIncrement: true
        })
    }
    request.onerror = (error) => {
        console.log('Error', error)
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        addData(data)
    })

    const addData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        objectStore.add(data)
    }

}