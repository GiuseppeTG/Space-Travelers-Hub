import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as reactRedux from 'react-redux';
import Rocket from '../components/Rocket/Rocket';
import RocketList from '../components/RocketList/RocketList';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Test Rockets component', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  const mockStore = {
    rockets: [
      {
        id: '1',
        name: 'Rocket Test',
        description: 'Testing rockets',
        img: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
        reserved: false,
      },
    ],
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });
  test('Create RocketsList component', () => {
    render(<RocketList />);
    expect(screen.getByTestId('rocket-list-test')).toBeInTheDocument();
  });
  test('Create a Rocket Component inside RocketsList', () => {
    const rocketData = useSelectorMock(
      (mockStore) => mockStore.rockets[0],
    );
    render(
      <Rocket
        id={rocketData.id}
        name={rocketData.name}
        description={rocketData.description}
        img={rocketData.img}
        reserved={rocketData.reserved}
      />,
    );
    expect(screen.getByTestId('rocket-item')).toBeInTheDocument();
  });
  test('Check if button show Cancel Reservation when reserved its true', () => {
    mockStore.rockets = [
      { ...mockStore.rockets[0], reserved: true },
    ];
    const rocketData = useSelectorMock(
      (mockStore) => mockStore.rockets[0],
    );
    render(
      <Rocket
        id={rocketData.id}
        name={rocketData.name}
        description={rocketData.description}
        img={rocketData.img}
        reserved={rocketData.reserved}
      />,
    );
    const reservedBtn = screen.getByText('RESERVE ROCKET');
    expect(reservedBtn).toBeInTheDocument();
  });
});
