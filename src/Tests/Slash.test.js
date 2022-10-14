import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Slash from '../components/Splash'
import store from '../redux/configureStore';

describe('Reserve page tests', () => {
    it('renders correctly', () => {
        const tree = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Slash />
                </BrowserRouter>
            </Provider>,
        );
        expect(tree).toMatchSnapshot();
    });
});