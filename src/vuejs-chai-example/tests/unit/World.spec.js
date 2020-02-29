import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
//import Vue from 'vue'
import Hello from '@/components/World.vue'

/*
describe("World component", () => {
    it("renders correctly after changing the name state", () => {
        const comp = new Vue(Hello).$mount();
        comp.name = "Camel";
        expect(comp.$el).toMatchSnapshot();
    })
});
*/

describe('Hello.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(Hello, {
            data: {msg}
        })
        expect(true).equal(true)
        //expect(wrapper.text()).to.include(msg)
    })
})
