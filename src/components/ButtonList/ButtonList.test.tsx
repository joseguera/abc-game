import { render, screen } from "@testing-library/react";
import ButtonList from "./ButtonList";
import { scienceArray } from "../../zebrAPI.js";

test("Shows 26 buttons by default", async () => {
  render(<ButtonList category="science" list={scienceArray} />);

  const buttons = await screen.findAllByRole("heading");
  expect(buttons).toHaveLength(26);
  // expect(wrapper.children().find(<Button />).length).toBeLessThanOrEqual(26);
});
