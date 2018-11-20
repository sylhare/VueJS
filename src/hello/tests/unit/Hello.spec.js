import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Foo from '@/components/Hello.vue'

const factory = (values = {}) => {
  return shallowMount(Foo, {
    data: { ...values  }
  })
}

describe("Foo", () => {
  it("renders a welcome message", () => {
    const wrapper = factory();

    expect(wrapper.find(".message").text()).equal(
      "Bienvenue sur le tutoriel VueJs"
    );
  });
    
  it("does not render an error when username is 7 characters or more", () => {
    const wrapper = factory();

    wrapper.setData({ username: 'usename' })
    expect(wrapper.find('.error').exists()).equal(false)
    console.log(wrapper.html())
  });

  it("renders an error when username is less than 7 characters", () => {
    const wrapper = factory({ username: "" });

    expect(wrapper.find(".error").exists()).equal(true);
  });

  it("renders an error when username is whitespace", () => {
    const wrapper = factory({ username: " ".repeat(7) });

    expect(wrapper.find(".error").exists()).equal(true);
  });
    
  it('restitue un message et répond correctement à la saisie de l\'utilisateur', () => {
    const wrapper2 = shallowMount(Foo, {
      data: {
        message: 'Hello World',
        username: ''
      }
    })
    expect(wrapper2.find('.error').exists()).equal(true)
    
  })
});