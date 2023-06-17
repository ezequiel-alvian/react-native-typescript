import CounterScreen from "../components/products/CounterScreen"
import { fireEvent, render } from '@testing-library/react-native'

describe('<CounterScreen/>', () => {
    const data = {
        count:0,
        setCount:jest.fn()
    }
    let component
    let button
    test('CounterScreen', () => {
        component=render(<CounterScreen count={data.count} setCount={data.setCount} />)
        expect(component.toJSON()).toMatchSnapshot()
        button = component.getByText('+')
        expect(button.props.children).toEqual('+')
        fireEvent.press(button)
        button = component.getByText('-')
        expect(button.props.children).toEqual('-')
        fireEvent.press(button)
        expect(data.count).toBe(0)
        expect(component).toMatchSnapshot()
    })
})