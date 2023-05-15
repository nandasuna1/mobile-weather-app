import React from "react"
import { render } from "@testing-library/react-native"
import { ButtonIcon } from '@molecules/ButtonIcon'

describe('ButtonIcon', () => {
    test('the component has rendered', () => {
        const {debug, getByText} = render( <ButtonIcon TextProps={{children: 'texto'}}/>)

        const element = getByText('texto')

        expect(element).toBeTruthy();
    })
})