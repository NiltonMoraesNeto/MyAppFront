import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello World',
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    //background: 'blue',
    background: theme.colors.mainBg,
  });
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'blue');
});
