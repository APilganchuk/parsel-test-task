import { Tabs, InfiniteTrack } from './features';

document.addEventListener('DOMContentLoaded', () => {
  new Tabs('.js-tab', '.js-tab-item', 'header__nav-item--active');

  new InfiniteTrack('.animation__track');
  new InfiniteTrack('.animation__track--second');
});
