let ok = true

function customFetch (time, task) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (ok){
                resolve(task)
            } else {
                reject("falso")
            }
        }, time)
    })
}

export default customFetch