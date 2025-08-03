export default class Tabs {
  constructor(tabSelector, paneSelector, activeClass) {
    this.tabs = document.querySelectorAll(tabSelector);
    this.panes = document.querySelectorAll(paneSelector);
    this.activeClass = activeClass;

    this.init();
  }

  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => this.onTabClick(tab));
    });
  }

  onTabClick(activeTab) {
    const { tabName } = activeTab.dataset;

    this.tabs.forEach(tab => {
      tab.classList.remove(this.activeClass);
      tab.setAttribute('aria-selected', 'false');
    });

    activeTab.classList.add(this.activeClass);
    activeTab.setAttribute('aria-selected', 'true');

    this.panes.forEach(pane => {
      if (pane.dataset.tabName === tabName) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });
  }
}
