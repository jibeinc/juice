class PubSubHub {
  constructor() {
    this.listeners = {
      // namespace => [listener1, listener2, ... , listenN]
    };
  }

  push(namespace, payload) {
    if (!this.listeners[namespace]) {
      this.listeners[namespace] = [];
    }
    this.listeners[namespace].push(payload);
  }

  get(namespace) {
    if (!this.listeners[namespace]) {
      this.listeners[namespace] = [];
    }
    return this.listeners[namespace];
  }

  publish(namespace, payload) {
    this.get(namespace).forEach((listener) => {
      listener(payload);
    });
  }

  subscribe(namespace, listener) {
    this.push(namespace, listener);
  }
}

module.exports = new PubSubHub();