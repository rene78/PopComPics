import RootElement from '../helpers/app-rootelement.js';
import PubSub from '../data/pubsub.js';

export default class appStats extends RootElement {
  constructor() {
    super();
    this.pubsub = PubSub;
    // this.renderData();//initial render

    // subscribe to any of these events, get metadata, pass data to renderData
    this.pubsub.subscribe('PicsDownload', 'getMeta', this.renderData);
  }

  renderData(meta) {
    this.innerHTML = `
      <p id="app-stats-text">User <b>${meta.userName}</b> uploaded <b>${meta.nPics}</b> pictures which are used on <b>${meta.nUsages}</b> Wikimedia pages</p>
    `;
  }
}

customElements.define('app-stats', appStats);