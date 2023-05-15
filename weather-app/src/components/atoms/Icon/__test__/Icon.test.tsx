import React from 'react'
import { render } from '@testing-library/react-native'
import { Icon } from '@atoms/Icon'

describe('Icon', ()=> {
    it('the component has rendered', () => {
        render( <Icon />)
    })
})