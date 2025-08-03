import Tabs from './features';

document.addEventListener('DOMContentLoaded', () => {
  new Tabs('.js-tab', '.js-tab-item', 'header__nav-item--active');
});
