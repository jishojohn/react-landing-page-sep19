import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Main', () => {
    beforeEach(()=>{
      wrapper = mount(
          <Main />
      );
    });
    it('renders without crashing', () => {
      // const div = document.createElement('div');
      // ReactDOM.render(<Main />, div);
      // ReactDOM.unmountComponentAtNode(div);
      expect(wrapper).toMatchSnapshot();
    });    
})