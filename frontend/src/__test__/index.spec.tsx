import { shallow } from "enzyme"
import Home from "Pages/index"
import * as React from 'react';

describe('Index page', () => {
    it('Index page should be defined', () => {
        const wrap = shallow(<Home/>)
        expect(wrap.exists()).toBe(true)
    })
})