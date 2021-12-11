const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgP: getStyle(html, "--bg-p"),
    colorHeader: getStyle(html, "--color-header"),
    colorText: getStyle(html, "--color-text"),
}

const lightMode = {
    bg: "#fcfcfc",
    bgP: "#ebebeb",
    colorHeader: "#b94aa1",
    colorText: "#303030",
}

const transformKey = key => "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]))
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors)
})