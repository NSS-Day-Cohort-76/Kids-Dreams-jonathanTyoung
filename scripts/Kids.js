import { getChildren } from "./database.js"

const children = getChildren()

export const kids = () => {
    let kidsHTML = "<ol>"

    for (const child of children) {
        kidsHTML += `<li data-type="child" 
                        data-id="${child.id}"  
                        data-wish="${child.wish}"
                        data-name="${child.name}"
                        >${child.name}
                    </li>`
    }

    kidsHTML += "</ol>"
    return kidsHTML
}

document.addEventListener( "click", (clickEvent) => {
    const clickTarget = clickEvent.target;

    if (clickTarget.dataset.type === "child") {

    const kidName = clickTarget.dataset.name;
    const kidWish = clickTarget.dataset.wish;

        window.alert(`${kidName} wish is ${kidWish}`);
    };
},
);