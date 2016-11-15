import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import './stories.css';
import Button from './Button';
import Input from './Input';
import Checkbox from './Checkbox';
import RadioGroup from './RadioGroup';
import ToggleSwitch from './ToggleSwitch';
import Modal from './Modal';

storiesOf('Components', module)
  .add('Button', () => (
    <Button />
  ))
  .add('Input', () => (
      <Input />
  ))
  .add('Checkbox', () => (
      <Checkbox />
  ))
  .add('RadioGroup', () => (
      <RadioGroup />
  ))
  .add('ToggleSwitch', () => (
      <ToggleSwitch />
  ))
  .add('Modal', () => (
      <Modal />
  ));
