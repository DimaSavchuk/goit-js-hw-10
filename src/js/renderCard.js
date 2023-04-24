function renderCards(arr) {
    return arr.map(({ name: { official }, capital, population, flags: { svg, alt }, languages }) => {
        if (arr.length === 1) {
            return `
                <li class="item-list-described">
                    <div class="container-described">
                        <img src="${svg}" alt="${alt}" class="img-described">
                        <p><span class="name-described">${official}</span></p>
                    </div>
                    <p><span class="text-described">Population: </span>${population}</p>
                    <p><span class="text-described">Capital: </span>${capital}</p>
                    <p><span class="text-described">Languages: </span>${Object.values(languages)}</p>
                </li>`
        } else {
            return `
                <li class="item-list">
                    <img src="${svg}" alt="${alt}" class="img">
                    <p><span class="text"></span>${official}</p>
                </li>`
        }
    }).join('')
}

export { renderCards }