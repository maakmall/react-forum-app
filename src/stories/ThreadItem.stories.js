import React from 'react';
import LoginInput from '../components/LoginInput';

const TemplateStory = (args) => <LoginInput {...args} />;
export const Standard = TemplateStory.bind({});
Standard.args = {
  login: () => {},
};

export default {
  title: 'LoginInput',
  component: LoginInput,
  tags: ['autodocs'],
};
