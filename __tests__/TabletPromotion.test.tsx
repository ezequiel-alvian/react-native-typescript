import TabletPromotion from "../components/products/TabletPromotion"
import { render } from '@testing-library/react-native';


describe('<TabletPromotion/>',()=>{
    let component
    let data = 25
    test('test',()=>{
        component = render(<TabletPromotion promotion={data}/>)
        expect(component.toJSON()).toMatchSnapshot()
      })
})