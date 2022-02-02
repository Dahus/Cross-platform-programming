export class Component {
  constructor(props) {
    this.props = props;
    this.state = this.state || {};
    this._internalInstance = null;
  }

  updateInstance() {}

  setState(partialState) {}
}
