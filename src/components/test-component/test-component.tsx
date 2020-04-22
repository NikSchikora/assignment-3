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
        <h1>
          <slot name="title" />
        </h1>
        <img
          src="https://source.unsplash.com/random/300x200"
          alt="random image"
        />
        <p>
          Hier könnte dann der Text / Die Beschreibung des Produktes stehen, das
          kann auch noch über einen Slot geregelt werden
        </p>
        <span>
          <slot name="price" />
        </span>
      </div>
    );
  }
}
