import extractColors from "extract-colors"

export default function extractColor(src) {
    extractColors(src).then(console.log).error(console.error)
}

