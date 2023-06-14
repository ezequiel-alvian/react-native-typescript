import React from 'react'
import { create, act } from 'react-test-renderer'
import ListProductScreen from '../components/products/ListProductScreen'
import data from './data.json' 
import { ListItem } from '@rneui/base'

describe('<ListProductScreen/>', () => {
    const item =data
    const component:any = create(<ListProductScreen item={item}></ListProductScreen>)
    
    test('<ListProductScreen/>', () => {
        expect(component).toMatchSnapshot()
    })

    test('button touch', ()=>{
        const buttonTouch = component.root.findByProps({testID:'myButton'}).props
        console.log(buttonTouch)
        act(()=> buttonTouch.onPress())
    })

})




