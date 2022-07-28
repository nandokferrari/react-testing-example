import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from '.';

let title = 'vamo';
let options = ['Charmander'];
let callback = jest.fn();

describe('dropdown core functions, such as: render button, render list with items, close list and change title string', () => {
  it('should render button with title', () => {
    render(<Dropdown title={title} options={options} callback={callback} />);
    const elButton = screen.getByRole('button');

    expect(elButton).toBeInTheDocument();
  });

  it('should open list white list-items when button clicked', () => {
    render(<Dropdown title={title} options={options} callback={callback} />);

    const elButton = screen.getByRole('button');
    userEvent.click(elButton);

    const elList = screen.getByRole('list');

    options.map((item) => {
      if (item) {
        const elListItemByText = screen.getByText(item);
      }
    });
  });

  it('should close list when item clicked', () => {
    render(<Dropdown title={title} options={options} callback={callback} />);

    const elButton = screen.getByRole('button');
    userEvent.click(elButton);

    const elList = screen.getByRole('list');

    const elListItemByText = screen.getByText(options[0]);
    userEvent.click(elListItemByText);

    expect(elList).not.toBeInTheDocument();
  });

  it('should change title when item clicked', () => {
    render(<Dropdown title={title} options={options} callback={callback} />);

    const elButton = screen.getByRole('button');
    userEvent.click(elButton);

    const elList = screen.getByRole('list');

    const elListItemByText = screen.getByText(options[0]);
    userEvent.click(elListItemByText);

    expect(elButton).toHaveTextContent(options[0]);
    expect(callback).toHaveBeenCalled();
  });
});
