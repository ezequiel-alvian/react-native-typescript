import CounterScreen from "../components/products/CounterScreen"
import { render } from '@testing-library/react-native'

describe('<CounterScreen/>', ()=>{
    const data = {
        count:0,
        setCount:jest.fn()
    }
    let component
    test('CounterScreen', ()=>{
        component=render(<CounterScreen count={data.count} setCount={data.setCount} />)
        expect(component.toJSON()).toMatchSnapshot()
    })
})