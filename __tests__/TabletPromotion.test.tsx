import TabletPromotion from "../components/products/TabletPromotion"
import { render } from '@testing-library/react-native';


describe('<TabletPromotion/>',()=>{
    let component
    let data = 25
    test('test',()=>{
        component = render(<TabletPromotion promotion={data}/>)
        expect(component.toJSON()).toMatchInlineSnapshot(`
<View
  style={
    {
      "alignItems": "flex-end",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "flex-end",
      "width": 710,
    }
  }
>
  <Text
    style={
      {
        "backgroundColor": "#00FF7F",
        "padding": 5,
      }
    }
  >
    -25%
  </Text>
</View>
`)
    })
})