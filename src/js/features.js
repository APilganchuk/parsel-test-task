export class Tabs {
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

    const allTitles = document.querySelectorAll('.js-title');
    allTitles.forEach(title => {
      if (title.dataset.tabName === tabName) {
        title.classList.add('active');
      } else {
        title.classList.remove('active');
      }
    });
  }
}

export class InfiniteTrack {
  constructor(selector, minViewportMultiplier = 4) {
    this.track = document.querySelector(selector);
    this.minWidth = window.innerWidth * minViewportMultiplier;

    if (this.track) {
      this.innerHTML = this.track.innerHTML;
      this.duplicateUntilFull();
    }
  }

  duplicateUntilFull() {
    while (this.track.offsetWidth < this.minWidth) {
      this.track.innerHTML += this.innerHTML;
    }
  }
}
