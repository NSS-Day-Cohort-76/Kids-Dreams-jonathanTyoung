import { pairings } from "./pairings.js"
import { celebrities } from "./celebrityList.js"
import { kids } from "./kids.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${celebrities()}
        </section>
    </article>

    <article class="assignments">
    <h2>Pairings</h2>
        <h2>${pairings()}</h2>
    </article>
`

mainContainer.innerHTML = applicationHTML

