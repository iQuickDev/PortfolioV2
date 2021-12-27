function shuffleLangs()
{
    let langs = document.querySelectorAll(".lang")
    const totalX = window.innerWidth - 50
    const totalY = window.innerHeight - 50
    const oneThirdX = window.innerWidth / 3
    const oneThirdY = window.innerHeight / 3
    let screenAreas =
    [
        [0, 0, oneThirdX, oneThirdY], // top left
        [oneThirdX, 0, oneThirdX * 2, oneThirdY], // top mid
        [oneThirdX * 2, 0, totalX, oneThirdY], // top right
        [0, oneThirdY, oneThirdX, oneThirdY * 2], // mid left
        [oneThirdX * 2, oneThirdY, totalX, oneThirdY * 2], // mid right
        [0, oneThirdY * 2, oneThirdX, totalY], // bottom left
        [oneThirdX, oneThirdY * 2, oneThirdX * 2, totalY], // bottom mid
        [oneThirdX * 2, oneThirdY * 2, totalX, totalY] // bottom right
    ]

    for (const lang of langs)
    {
        if (randomBool())
            lang.classList.add("clockwise")
        else
            lang.classList.add("counterclockwise")
    }

    for (let i = 0; i < langs.length; i++)
    {
        const index = Math.floor(i / 2)
        langs[i].style.left = getRandomPoint(screenAreas[index][0], screenAreas[index][1], screenAreas[index][2], screenAreas[index][3])[0] + "px"
        langs[i].style.top = getRandomPoint(screenAreas[index][0], screenAreas[index][1], screenAreas[index][2], screenAreas[index][3])[1] + "px"
    }
}

function randomBool()
{
    return Math.random() >= 0.5
}

function getRandomPoint(xStart, yStart, xEnd, yEnd)
{
    return [randomNumber(xStart, xEnd), randomNumber(yStart, yEnd)]
}

function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min
}

shuffleLangs()