import { getCelebrities, getChildren } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let pickedCeleb = null

    for (const celebrity of celebrityArray) {
        if (celebrity.id === kidObject.id) {
            pickedCeleb = celebrity
            break
        }
    }

    return pickedCeleb
}

export const pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const celebrity = findCelebrityMatch(kid, celebrities)
        html += `<li>
                    ${kid.name} will be making memories with ${celebrity.name}, a ${celebrity.sport} star, by ${kid.wish}
                </li>
        `
    }

    html += "</ul>"

    return html
}

