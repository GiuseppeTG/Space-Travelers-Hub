import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import MissionList from '../components/MissionList/MissionList';
import Navbar from '../components/Navbar/Navbar';
import Profile from '../components/Profile/Profile';
import RocketList from '../components/RocketList/RocketList';
import Rockets from '../Pages/Rockets';
import store from '../redux/configureStore';

describe('Testing component rednering propperly', () => {
  test('renders App component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('renders Rockets component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('renders Rockets component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <MissionList />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('renders Profile component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('renders navbar component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('renders RocketList component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <RocketList />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
