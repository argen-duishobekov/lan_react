
import './App.css';
import {Card} from './com/Card';
import { MainPage } from './components/Main';

export const App = () => {
  return (
    <div className="App">
      {/* <MainPage /> */}
      <Card name="a" col="red"/>
      <Card name="b"/>
      <Card name="c"/>
      <Card name="d"/>
    </div>
  );
}


