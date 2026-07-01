import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

const renderApp = (initialEntries = ["/"]) =>
  render(
    <MemoryRouter
      initialEntries={initialEntries}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>
  );

test("renders the home route", async () => {
  renderApp();

  expect(await screen.findByText(/Hello, I'm/i)).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /Frontend engineer building fast, clean product interfaces/i,
    })
  ).toBeInTheDocument();
});

test("renders the contact route with the form", async () => {
  renderApp(["/contact"]);

  expect(
    await screen.findByRole("heading", { name: /Contact Me/i })
  ).toBeInTheDocument();
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument();
});

test("renders project details from route params", async () => {
  renderApp(["/project/1"]);

  expect(
    await screen.findByRole("heading", { name: /JustMalikBeats/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Source Code/i })).toHaveAttribute(
    "href",
    expect.stringContaining("JustMalikBeats")
  );
});

test("redirects unknown routes to the not found page", async () => {
  renderApp(["/does-not-exist"]);

  expect(
    await screen.findByText(/Sorry, This page isn't available/i)
  ).toBeInTheDocument();
});
