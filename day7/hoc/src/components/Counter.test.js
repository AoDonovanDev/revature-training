import Counter from './Counter';
import { render, screen, fireEvent } from '@testing-library/react';

describe("Testing the counter component", () => {
    test('test increment', () => {
      render(<Counter />);
      const count = screen.getByTestId("count");
      const incrementBtn = screen.getByTestId("incBtn");
  
      fireEvent.click(incrementBtn);
      expect(count).toHaveTextContent("1");
    })
  
    test("test decrement", ()=> {
      render(<Counter/>);
      const count = screen.getByTestId("count");
      const decrementBtn = screen.getByTestId("decBtn");
  
      fireEvent.click(decrementBtn);
      expect(count).toHaveTextContent("-1");
    })
})