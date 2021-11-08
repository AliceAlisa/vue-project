import { mount } from "@vue/test-utils"
import Calc from "../components/Calc.vue"


describe('Test Calc. Operands enter. Buttons.', () => {

    it('Test first operand input', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue("1")
        expect(wrapper.vm.operand1).toBe(1)
    }),

        it('Test second operand input', () => {
            const wrapper = mount(Calc)
            const operand2 = wrapper.find('input[name=operand2]')
            operand2.element.value = "1"
            operand2.trigger('input')
            expect(wrapper.vm.operand2).toBe(1)
        }),

        it('Test desabled button /', () => {
            const wrapper = mount(Calc)
            const operand2 = wrapper.find('input[name=operand2]')

            operand2.element.value = 0
            operand2.trigger('keyup')
            expect(wrapper.vm.isDisabled).toBe(true)
        }),

        it('Test Keyboard opend', async () => {
            const wrapper = mount(Calc)
            const checkbox = wrapper.find('input[type="checkbox"]')
            await checkbox.setChecked()

            const Keyboard = wrapper.find('div[class="keyBoard"]')
            expect(Keyboard.exists()).toBe(true)
        }),

        it('Test Operands with keyboard enter', async () => {
            const wrapper = mount(Calc)
            const checkbox = wrapper.find('input[type="checkbox"]')
            await checkbox.setChecked()

            const operandRadio1 = wrapper.find('input[name="radioOperand1"]')
            await operandRadio1.setChecked()

            const keyboardItem5 = wrapper.find('button[name="5"]')
            keyboardItem5.trigger('click')

            expect(wrapper.vm.operand1).toBe("5")

            const operandRadio2 = wrapper.find('input[name="radioOperand2"]')
            await operandRadio2.setChecked()

            const keyboardItem9 = wrapper.find('button[name="9"]')
            keyboardItem9.trigger('click')

            expect(wrapper.vm.operand2).toBe("9")
        }),

        it('Test clear operand', async () => {
            const wrapper = mount(Calc)
            const checkbox = wrapper.find('input[type="checkbox"]')
            await checkbox.setChecked()

            const operandRadio2 = wrapper.find('input[name="radioOperand2"]')
            await operandRadio2.setChecked()

            wrapper.vm.operand2 = "555"

            const keyboardItemClear = wrapper.find('button[name="<<"]')
            keyboardItemClear.trigger('click')

            expect(wrapper.vm.operand2).toBe("55")

            const operandRadio1 = wrapper.find('input[name="radioOperand1"]')
            await operandRadio1.setChecked()

            wrapper.vm.operand1 = "812"

            keyboardItemClear.trigger('click')

            expect(wrapper.vm.operand1).toBe("81")
        })
}),

    describe('Test Calc. Operations', () => {

        it('Test method sum', () => {
            const wrapper = mount(Calc)

            const operand1 = wrapper.find('input[name=operand1]')
            operand1.setValue("5")

            const operand2 = wrapper.find('input[name=operand2]')
            operand2.element.value = "10"
            operand2.trigger('input')

            const btn = wrapper.find("button[name='+']");
            btn.trigger('click')

            expect(wrapper.vm.result).toBe(15)
        }),

            it('Test method sub', () => {
                const wrapper = mount(Calc)

                const operand1 = wrapper.find('input[name=operand1]')
                operand1.setValue("10")

                const operand2 = wrapper.find('input[name=operand2]')
                operand2.element.value = "5"
                operand2.trigger('input')

                const btn = wrapper.find("button[name='-']");
                btn.trigger('click')

                expect(wrapper.vm.result).toBe(5)
            }),

            it('Test method mult', () => {
                const wrapper = mount(Calc)

                const operand1 = wrapper.find('input[name=operand1]')
                operand1.setValue("5")

                const operand2 = wrapper.find('input[name=operand2]')
                operand2.element.value = "10"
                operand2.trigger('input')

                const btn = wrapper.find("button[name='*']");
                btn.trigger('click')

                expect(wrapper.vm.result).toBe(50)
            }),

            it('Test method div', () => {
                const wrapper = mount(Calc)

                const operand1 = wrapper.find('input[name=operand1]')
                operand1.setValue("50")

                const operand2 = wrapper.find('input[name=operand2]')
                operand2.element.value = "5"
                operand2.trigger('input')

                const btn = wrapper.find("button[name='/']");
                btn.trigger('click')

                expect(wrapper.vm.result).toBe(10)
            }),

            it('Test method exp', () => {
                const wrapper = mount(Calc)

                const operand1 = wrapper.find('input[name=operand1]')
                operand1.setValue("10")

                const operand2 = wrapper.find('input[name=operand2]')
                operand2.element.value = "2"
                operand2.trigger('input')

                const btn = wrapper.find("button[name='**']");
                btn.trigger('click')

                expect(wrapper.vm.result).toBe(100)
            }),

            it('Test method intDiv', () => {
                const wrapper = mount(Calc)

                const operand1 = wrapper.find('input[name=operand1]')
                operand1.setValue("100")

                const operand2 = wrapper.find('input[name=operand2]')
                operand2.element.value = "3"
                operand2.trigger('input')

                const btn = wrapper.find("button[name='int /']");
                btn.trigger('click')

                expect(wrapper.vm.result).toBe(33)
            })

    }),
    describe('Test Calc. Errors', () => {
        it('Test Operand error', async () => {
            const wrapper = mount(Calc)
            const checkbox = wrapper.find('input[type="checkbox"]')
            await checkbox.setChecked()

            const keyboardItem5 = wrapper.find('button[name="5"]')
            keyboardItem5.trigger('click')

            expect(wrapper.vm.error).toBe("Выберите операнд!")
        }),
            it('Test Clear error', async () => {
                const wrapper = mount(Calc)
                const checkbox = wrapper.find('input[type="checkbox"]')
                await checkbox.setChecked()

                const keyboardItemClear = wrapper.find('button[name="<<"]')
                keyboardItemClear.trigger('click')

                expect(wrapper.vm.error).toBe("Выберите операнд!")
            })
    })