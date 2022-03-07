function WelcomeFunc({ name, children }) {
  return (
    <div>
      <h1>Bonjour {name}</h1>
      <p>{children}</p>
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }
  componentwillUnmount() {
    window.clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleDateString()}{" "}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: props.start };
    this.timer = null;
  }
  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }
  componentwillUnmount() {
    window.clearInterval(this.timer);
  }

  tick() {
    this.setState(function (state, props) {
      return { counter: this.state.counter + 1 };
    });
  }
  render() {
    return <p>{this.state.counter}</p>;
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Bonjour {this.props.name}</h1>
        <p>{this.props.children}</p>
        <Clock></Clock>
        <Increment start={0}></Increment>
      </div>
    );
  }
}

ReactDOM.render(
  <Welcome name="Steve">Bonjour tout le monde</Welcome>,
  document.querySelector("#app")
);
