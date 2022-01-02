let time = 10

const timeRun = () => {
    const isRunning = setTimeout(() => {
        if(time<=0){
            clearTimeout(isRunning)
            return
        }
        
        console.log(time-=1)

        timeRun()
    }, 1000);
}

timeRun()