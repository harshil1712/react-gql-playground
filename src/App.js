import logo from './logo.svg';
import './App.css';
import Playground from './components/playground';
import AnotherPlayground from './components/AnotherPlayground';

function App() {
  const tabQueries = [
    {
        query: `
            query {
                # A default query
            }
        `
    },
    {
        query: `
        query {
          # Another default tab query
        }`
    }
]
const defaulQuery = [{
  query: `query {# add your query}`
}]
  return (
    <div className="App">
      <Playground queryProp={defaulQuery} />
      <p>The below playground should have only two tabs with the defaul queries</p>
      <Playground queryProp={tabQueries} />
    </div>
  );
}

export default App;
