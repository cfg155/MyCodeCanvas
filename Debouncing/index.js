let count= 0

const debounce = (fn,delay) => {
    let timer
    
    return () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay);
    }
}

let incrementCount = () => {
    count++
    console.log(count)
}

incrementCount = debounce(incrementCount,1000)

window.addEventListener('scroll', incrementCount)