function updatePercentage()
{
    let count = 0
    let loader = document.querySelector("#loader")
    let percentage = document.querySelector("#percentage")

    let percentageUpdater = setInterval(() =>
    {
        count++
        percentage.textContent = `${count}%`

        if (count == 100)
        {
            clearInterval(percentageUpdater)
            loader.classList.add("fadeout")
        }
    }, 25)

}

updatePercentage()