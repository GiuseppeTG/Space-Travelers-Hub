import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RocketList from '../components/RocketList/RocketList';
import Rockets from '../Pages/Rockets';
import store from '../redux/configureStore';

describe('Testing component rednering propperly', () => {
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
