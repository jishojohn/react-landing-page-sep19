import React from 'react';
import ColorButton from './ColorButton';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('ColorButton', ()=>{

    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(
            <ColorButton />
        )
    });

    it('renders without crashing', ()=> {
        expect(wrapper).toMatchSnapshot();
    });

    it('has btn-success class when clicked', () => {
        const btn = wrapper.find('.btn');
        btn.simulate('click');
        expect(wrapper.find('.btn-success')).toHaveLength(1)
    });

    it('will turn red when hovered')
})