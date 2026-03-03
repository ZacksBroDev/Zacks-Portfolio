import React from "react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect, vi } from "vitest";

expect.extend(matchers);

Object.defineProperty(window, "scrollTo", {
  value: vi.fn(),
  writable: true,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

vi.mock("react-lottie", () => {
  return {
    default: function MockLottie(props) {
      return React.createElement("div", {
        "data-testid": "mock-lottie",
        ...props,
      });
    },
  };
});

vi.mock("react-slick", () => {
  return {
    default: function MockSlider({ children }) {
      return React.createElement(
        "div",
        { "data-testid": "mock-slider" },
        children
      );
    },
  };
});

vi.mock("react-modern-drawer", () => {
  return {
    default: function MockDrawer({ open, children }) {
      if (!open) {
        return null;
      }

      return React.createElement(
        "div",
        { "data-testid": "mock-drawer" },
        children
      );
    },
  };
});

vi.mock("react-lazy-load-image-component", () => {
  return {
    LazyLoadImage: ({ placeholderSrc, ...props }) =>
      React.createElement("img", props),
  };
});
