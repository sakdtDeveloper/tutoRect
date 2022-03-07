let n = 0;
function render() {
  const items = ["Tache 1", "Tache 2", "Tache 3"];
  const lis = items.map((item, k) => <li key={k}>{item}</li>);
  const title = (
    <React.Fragment>
      <h1 className="title" id="title">
        Bonjour les gens <span>{n}</span>
      </h1>{" "}
      <ul>{lis}</ul>
    </React.Fragment>
  );
  ReactDOM.render(title, document.querySelector("#app"));
}

render();
window.setInterval(() => {
  n++;
  render();
}, 1000);
