var socialsActive = false


function toggleSocialsDropdown () {
    document.getElementById ("socialsDropdown").style.height = (socialsActive) ? "0" : "clamp(60px, 6vw, 90px)"
    socialsActive = !socialsActive
}

function changeEnlargedScreenshot (obj) {
    document.getElementById("enlargedScreenshotImg").src = obj.src
}

