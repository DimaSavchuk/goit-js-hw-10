import './css/styles.css';
import { onSeatch } from './js/onSeatch';
import refs from './js/refs';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onSeatch, DEBOUNCE_DELAY));