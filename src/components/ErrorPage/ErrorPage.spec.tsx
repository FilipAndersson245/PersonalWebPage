import { ErrorPage } from ".";
import renderer from "react-test-renderer";
import React from "react";
describe("styling", () => {
  it("should match snapshot", () => {
    const component = renderer.create(<ErrorPage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
