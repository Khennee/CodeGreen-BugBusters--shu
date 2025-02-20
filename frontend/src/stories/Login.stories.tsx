import { expect } from "@storybook/test";
import { Meta } from "@storybook/react";
import LoginPage from "../pages/LoginPage";
import { BrowserRouter } from "react-router-dom";
import { userEvent, within } from '@storybook/testing-library';

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


// there will be a pop up of "Something went wrong, Please Try Again." because of the line 26-27
// on the LoginPage.tsx because it doesnt navigate to the homepage.
// for further explanation please see lines 21-29 in LoginPage.tsx
export const WithPassword = () => <LoginPage />;
WithPassword.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const emailInput = canvas.getByPlaceholderText("Email address");
  const passwordInput = canvas.getByPlaceholderText("Enter your password");

  await userEvent.type(emailInput, 'withpassword@gmail.com');
  await userEvent.type(passwordInput, 'valid');
  await userEvent.keyboard("{Enter}")
};

export const MissingPassword = () => <LoginPage />;
MissingPassword.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const emailInput = canvas.getByPlaceholderText("Email address");

  await userEvent.type(emailInput, 'nopassword@gmail.com');
  await userEvent.keyboard("{Enter}")
};