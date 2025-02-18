import React from "react";
import { Meta, StoryFn } from "@storybook/react";  
import RegistrationListCard from "../components/RegistrationListCard";
import { Registration } from "../types/datatypes";

type RegistrationListCardProps = Registration;

export default {
  title: "Components/RegistrationListCard",
  component: RegistrationListCard,
  argTypes: {
    driver_type: { control: 'text', description: 'The type of the driver' },
    first_name: { control: 'text', description: 'Driver\'s first name' },
    last_name: { control: 'text', description: 'Driver\'s last name' },
  },
} as Meta;

const Template: StoryFn<RegistrationListCardProps> = (args: RegistrationListCardProps) => (
  <RegistrationListCard {...args} />
);

export const StudentDriver = Template.bind({});
StudentDriver.args = {
  driver_type: "Student",
  first_name: "Carlos",
  last_name: "Magsen",
};

export const FacultyDriver = Template.bind({});
FacultyDriver.args = {
  driver_type: "Faculty",
  first_name: "Hom",
  last_name: "Tanks",
};

export const StaffDriver = Template.bind({});
StaffDriver.args = {
  driver_type: "Staff",
  first_name: "Bussin",
  last_name: "Jeiber",
};
