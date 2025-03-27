import { getCelebrities } from "./database.js"

const allCelebrities = getCelebrities()

export const celebrities = () => {
    let html = "<ol>"

    for (const star of allCelebrities) {
        html += `<li data-type="celebrity"
                    data-id="${star.id}" 
                    data-sport="${star.sport}"
                    data-name="${star.name}"
                     > ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener( "click", (clickEvent) => {
    const clickTarget = clickEvent.target;

    if (clickTarget.dataset.type === "celebrity") {

    const celebName = clickTarget.dataset.name;
    const celebSport = clickTarget.dataset.sport;

        window.alert(`${celebName} is a ${celebSport} star`);
    };
},
);