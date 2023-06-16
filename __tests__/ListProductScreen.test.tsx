import { render, fireEvent } from '@testing-library/react-native'
import data from './data/data.json' 
import ListProductScreen from '../components/products/ListProductScreen'

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

jest.mock('react-redux', ()=>{
   const actualDis = jest.requireActual('react-redux' as any)
   return {
    ...actualDis,
    useDispatch:()=> jest.fn()
   }
})

describe('<ListProductScreen/>', () => {
    const item =  data
    let component
    beforeEach(() => {
        mockedNavigation.mockClear()
    })
    test('ListProduct', () => {
        component = render(<ListProductScreen item={item}/>)
        const button = component.getByTestId('myButton')
        fireEvent.press(button)
        expect(component.toJSON()).toMatchSnapshot()
    })
})




