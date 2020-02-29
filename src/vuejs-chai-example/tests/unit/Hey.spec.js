import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import Hey from '@/components/Hey.vue'

describe('Hey.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(Hey, {
            propsData: {msg}
        })
        expect(wrapper.text()).to.include(msg)
    })
})
