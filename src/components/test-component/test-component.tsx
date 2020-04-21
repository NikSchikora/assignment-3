import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "test-component",
  styleUrl: "test-component.css",
  shadow: true,
})
export class TestComponent implements ComponentInterface {
  render() {
    return (
      <div>
        <h1>Test-Card</h1>
        <img
          src="https://source.unsplash.com/random/300x200"
          alt="random image"
        />
        <p>This is a random Image</p>
      </div>
    );
  }
}
