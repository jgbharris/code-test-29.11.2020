import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-15';
import App from './App';
import Transaction from './Transaction';
import { shallow, mount, render } from 'enzyme';

describe('<App />', () => {
  it('renders transaction components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Transaction));
  });
});

describe('Button', () => {
  it('Render a button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('button')).to.have.length(2);
  });
});


