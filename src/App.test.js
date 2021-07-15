import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import Setup from './Setup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a form with 3 inputs', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('form').children().length).toBe(3)
})

it("renders an input with name='name'", () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find("input[name='name']").length).toBe(1)
})

it("renders an input with name='lastName'", () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find("input[name='lastName']").length).toBe(1)
})

it('renders a table with two th one for Nombre and the other for Apellido', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find("table tr th").length).toBe(2)
})

it('creates a new guest when submitting the form', () => {
  const wrapper = shallow(<App />)

  wrapper.find('input[name="name"]').simulate('change', { target: { name: 'name',  value: 'Juan' } });
  wrapper.find('input[name="lastName"]').simulate('change', { target: { name: 'lastName', value: 'Gomez' } });
  wrapper.find('form').simulate('submit', {preventDefault(){}, target:
    {
      'name': {value: 'Juan'},
      'lastName': {value: 'Gomez'},
      reset: () => {}
    }
  })
  expect(wrapper.find("table tr").length).toBe(2)
  expect(wrapper.find("td").first().text()).toBe('Juan')
  expect(wrapper.find("td").last().text()).toBe('Gomez')
})
