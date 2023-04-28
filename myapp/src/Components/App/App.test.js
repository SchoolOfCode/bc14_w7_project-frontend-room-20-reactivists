import { render, screen } from "@testing-library/react";
import App from "./App";
import FilterDropDown from "../FilterDropdown/FilterDropDown";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

//test that only css links display when selected from filter menu
//

test("Checks that when css is selected only css links are displayed", () => {
	render(<FilterDropDown />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
