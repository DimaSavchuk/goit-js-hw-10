import { fetchCountries } from "./fetchCountries";
import { renderCards } from "./renderCard";
import refs from "./refs";
import { Notify } from "notiflix";

export function onSeatch(event) {

    const imput = event.target.value;
    const searchQuery = imput.trim();
    const list = refs.ul;

    if (!searchQuery) {
        list.innerHTML = '';
        return;
    }
    fetchCountries(searchQuery).then(data => {
        if (data.length > 10) {
            Notify.failure('Too many matches found. Please enter a more specific name.');
            list.innerHTML = '';
            return;
        }
        (list.innerHTML = renderCards(data))
    }).catch(error => {
        if (error.message === '404') {
            Notify.failure('Oops, there is no country with that name');
            list.innerHTML = '';
        }
    });
}