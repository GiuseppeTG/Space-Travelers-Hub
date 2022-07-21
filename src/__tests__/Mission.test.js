import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MissionList from '../components/MissionList/MissionList';
import store from '../redux/configureStore';

describe('Testing component rednering propperly', () => {
  test('renders MissionsList component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <MissionList />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
