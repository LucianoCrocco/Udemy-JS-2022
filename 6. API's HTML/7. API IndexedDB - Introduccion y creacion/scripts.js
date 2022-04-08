const indexedDB = window.indexedDB

if (indexedDB) {
    let db
    const request = indexedDB.open('tasksList', 1)

    request.onupgradeneeded = () => {
        db = request.result
        console.log('Create', db)
        db.createObjectStore('tasks')
    }

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
    }

    request.onerror = (error) => {
        console.log('Error', error)
    }
}