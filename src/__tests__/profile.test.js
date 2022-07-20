import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Profile from '../components/Profile/Profile';
import store from '../redux/configureStore';

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
