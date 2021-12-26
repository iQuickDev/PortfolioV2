function ShuffleLangs()
{
    let langs = document.querySelectorAll(".lang")

    for (const lang of langs)
    {
        if (RandomBool())
        lang.classList.add("clockwise")
        else
        lang.classList.add("counterclockwise")
        
        lang.style.top = Math.floor(Math.random() * window.innerHeight) + "px"
        lang.style.left = Math.floor(Math.random() * window.innerWidth) + "px"
    }
}

ShuffleLangs()

function RandomBool()
{
    return Math.random() >= 0.5
}