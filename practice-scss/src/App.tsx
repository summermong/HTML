import '../css/App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button
          title={'BUTTON'}
          size="large"
          color="pink"
          onClick={() => console.log('클릭됨')}
        />
        <Button title={'BUTTON'} size="medium" color="pink" />
        <Button title={'BUTTON'} size="small" color="pink" />
      </div>
      <div className="buttons">
        <Button title={'BUTTON'} size="large" color="gray" />
        <Button title={'BUTTON'} size="medium" color="gray" />
        <Button title={'BUTTON'} size="small" color="gray" />
      </div>
      <div className="buttons">
        <Button title={'BUTTON'} size="large" color="blue" />
        <Button title={'BUTTON'} size="medium" color="blue" />
        <Button title={'BUTTON'} size="small" color="blue" />
      </div>
      <div className="buttons">
        <Button title={'BUTTON'} size="large" color="pink" outline="outline" />
        <Button title={'BUTTON'} size="large" color="gray" outline="outline" />
        <Button title={'BUTTON'} size="large" color="blue" outline="outline" />
      </div>
      <div className="buttons">
        <Button
          title={'BUTTON'}
          size="large"
          color="pink"
          fullWidth="fullWidth"
        />
        <Button
          title={'BUTTON'}
          size="large"
          color="gray"
          fullWidth="fullWidth"
        />
        <Button
          title={'BUTTON'}
          size="large"
          color="blue"
          fullWidth="fullWidth"
        />
      </div>
    </div>
  );
}

export default App;
