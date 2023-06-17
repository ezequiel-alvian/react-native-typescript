import SpecificProductScreen from '../components/products/SpecificProductScreen';
import products from './data/data.json'
import { fireEvent, render } from "@testing-library/react-native"
import * as redux from 'react-redux';
import useEffect from 'react';

jest.mock('react-redux',() => {
    const actualSelector = jest.requireActual('react-redux')
    return {
        ...actualSelector,
        useSelector:jest.fn()
    }
})

let mockedNavigation= jest.fn(()=> 'SpecificProduct')

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual(('@react-navigation/native' as any))
return {
    ...actualNav,
    useNavigation: () => ({
        navigate:mockedNavigation
    }),
}
})


describe('<SpecificProductScreen/>',() => {
    beforeEach(()=>{
        const products = {    
            "amount" : 40,
            "available": false,
            "city": "Roca",
            "location": "Roca",
            "name": "Cacho",
            "price": 600,
            "product": "Pera",
            "surname": "Trast",
            "id": "2342i43905493289021893203",
            "promotion": 25
        }
        jest
            .spyOn(redux, 'useSelector')
            .mockReturnValue({
                   products: products // your mock here
                });
    })

    const onPress = jest.fn()
    const setCount= jest.fn()
    const count = 0 
    test('SpecificProductScreen',() => {
        let component = render(<SpecificProductScreen/>)
        expect(component.toJSON()).toMatchSnapshot()
        let button = component.getByText('Agregar')
        fireEvent.press(button)
        let less = component.getByText('-')
        fireEvent.press(less)
        let more = component.getByText('+')
        fireEvent.press(more)
    })
})