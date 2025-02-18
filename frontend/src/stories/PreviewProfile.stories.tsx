import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import PreviewProfile from "../components/PreviewProfile";
import { DriverWithVandC } from "../types/datatypes";
import { BrowserRouter } from 'react-router-dom';

export default {
  title: "Components/PreviewProfile",
  component: PreviewProfile,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: StoryFn<{ selectedEntry: DriverWithVandC }> = (args) => <PreviewProfile {...args} />;

export const Student = Template.bind({});
Student.args = {
  selectedEntry: {
    id: "8700",
    first_name: "Jolly",
    last_name: "Bee",
    sex: "Male",
    date_of_birth: "1999-09-09",
    driver_type: "Student",
    license_number: "1PCCHICKENWITHJOLLYSPAGHETTI",
    license_expiration_date: "2030-11-21",
  }
};

export const Faculty = Template.bind({});
Faculty.args = {
  selectedEntry: {
    id: "557000",
    first_name: "Kenny",
    last_name: "Roger",
    sex: "Male",
    date_of_birth: "1990-06-12",
    driver_type: "Faculty",
    license_number: "1WHOLEROASTEDCHICKEN",
    license_expiration_date: "2025-06-15",
  },
};

export const Staff = Template.bind({});
Staff.args = {
  selectedEntry: {
    id: "(02) 8888-6236",
    first_name: "Mc",
    last_name: "Donald",
    sex: "Male",
    date_of_birth: "1995-05-15",
    driver_type: "Staff",
    license_number: "1PCCHICKENMCDO",
    license_expiration_date: "2028-02-05",
  },
};
