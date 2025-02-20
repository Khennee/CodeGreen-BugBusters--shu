import { expect } from "@storybook/test";
import { Meta } from "@storybook/react";
import LoginPage from "../pages/LoginPage";
import { BrowserRouter } from "react-router-dom";
import { userEvent, within, screen, waitFor } from '@storybook/testing-library';

export default {
  title: "Pages/LoginPage",
  component: LoginPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

export const DefaultState = () => <LoginPage />;

DefaultState.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const emailInput = canvas.getByPlaceholderText("Email address");
  const passwordInput = canvas.getByPlaceholderText("Enter your password");

  await expect(emailInput).toHaveValue('');
  await expect(passwordInput).toHaveValue('');
};

export const SuccessState = () => <LoginPage />;

SuccessState.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const emailInput = canvas.getByPlaceholderText("Email address");
  const passwordInput = canvas.getByPlaceholderText("Enter your password");
  const loginButton = canvas.getByTestId("login-button");

  await userEvent.type(emailInput, 'testforsuccess@gmail.com');
  await userEvent.type(passwordInput, 'success');
  await userEvent.click(loginButton);

  await waitFor(() => {
    expect(screen.getByText(/login successful/i)).toBeInTheDocument();
  });

  await expect(loginButton).toBeEnabled();
};

export const FailState = () => <LoginPage />;

FailState.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const emailInput = canvas.getByPlaceholderText("Email address");
  const passwordInput = canvas.getByPlaceholderText("Enter your password");
  const loginButton = canvas.getByTestId("login-button");

  await userEvent.type(emailInput, 'testforfailgmail.com');
  await userEvent.type(passwordInput, 'thereisno@sign');
  await userEvent.click(loginButton);
  await expect(
    await canvas.findByText("Something went wrong, Please Try Again."),
  ).toBeInTheDocument();

};
