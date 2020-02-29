// Tests with jest
// jest --watch // to run the tests
// jest --coverage // to get the coverage
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe('Demo tests', function () {

  test.todo('Well this is not exactly how it should be tested');

  test('Jest', () => {
    expect(true).toBe(true);
    expect(true).toEqual(true);
  });

});
