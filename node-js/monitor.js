import chalk from "chalk"
import os from "node:os"

function monitor(){
    const oldCpus = os.cpus()

    setTimeout(() => {
        const newCpus = os.cpus()

        const usage = newCpus.map((cpu, index) => {
            return{
                core: index,
                usage: calculateUsage(oldCpus[index], cpu) + "%"
            }
        })

        console.clear()
        console.log(chalk.bgMagenta("----- System Monitor -----"))
        console.table(usage)

        const usedMemory = ((os.totalmem() - os.freemem())/1024/1024/1024).toFixed(2)

        console.log(` Memory used : ${usedMemory > 5.4 ? chalk.redBright(usedMemory) : chalk.greenBright(usedMemory)} GB`)
    },1000)
}

const calculateUsage = (oldCpu, newCpu) => {
    const oldTotal = Object.values(oldCpu.times).reduce((acc, time)=> acc + time, 0)
    const newTotal = Object.values(newCpu.times).reduce((acc, time)=> acc + time, 0)

    const idle = newCpu.times.idle - oldCpu.times.idle
    const total = newTotal - oldTotal
    const used = total - idle

    return ((100 * used) / total).toFixed(1)
}

setInterval(monitor, 1000)