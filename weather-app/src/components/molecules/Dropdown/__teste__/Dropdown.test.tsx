import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import { DropdownComponent } from ".."
import { ThemeProvider } from "styled-components/native"
import theme from "../../../../theme"

describe('Dropdown', () => {
    test('the dropdown component has rendered', () => {
        const {debug} = render(
            <ThemeProvider theme={theme}>
                <DropdownComponent 
                items={[
                    {label: 'name1', value:'1'},
                    {label: 'name2', value:'2'},
                    {label: 'name3', value:'3'}
                ]}
                value='1'
                />
            </ThemeProvider>
        )

        debug()
    })

    test('onPress to be called correctly', () => {
        const {debug, getByTestId} = render(
            <ThemeProvider theme={theme}>
                <DropdownComponent 
                items={[
                    {label: 'name1', value:'1'},
                    {label: 'name2', value:'2'},
                    {label: 'name3', value:'3'}
                ]}
                value='1'
                />
            </ThemeProvider>
        )

        const element = getByTestId('DropdownContent')
        
        fireEvent.press(element)        
        debug()
    })

    test('onSearch to be called correctly', () => {
        const {debug, getByTestId} = render(
            <ThemeProvider theme={theme}>
                <DropdownComponent 
                items={[
                    {label: 'name 1', value:'1'},
                    {label: 'name 2', value:'2'},
                    {label: 'name 12', value:'12'},
                    {label: 'name 3', value:'3'}
                ]}
                value='1'
                />
            </ThemeProvider>
        )

        const pressElement = getByTestId('DropdownContent')
        fireEvent.press(pressElement)        
        const inputElement = getByTestId('DropdownInput')
        const newText = '1'
        fireEvent.changeText(inputElement, newText)        
        debug()
    })

    test('if dropdown is listing correctly', () => {
        const {getByTestId, getAllByText} = render(
            <ThemeProvider theme={theme}>
                <DropdownComponent 
                items={[
                    {label: 'name 1', value:'1'},
                    {label: 'name 2', value:'2'},
                    {label: 'name 3', value:'3'}
                ]}
                value='1'
                />
            </ThemeProvider>
        )

        const element = getByTestId('DropdownContent')
        
        fireEvent.press(element)        
        // expect(getAllByText('name', {exact: false}).length).toBe(3)
        expect(getAllByText(/name/i).length).toBe(3)

    })

    test('call handleChange with correct value when value is pressed', () => {

        const handleChangeMock = jest.fn();

        const {getByText, getByTestId} = render(
            <ThemeProvider theme={theme}>
                <DropdownComponent
                items={[
                    {label: 'name 1', value:'1'},
                    {label: 'name 2', value:'2'},
                    {label: 'name 3', value:'3'}
                ]}
                value='1'
                handleChange={handleChangeMock}
                />
            </ThemeProvider>
        )

        const dropdownElement = getByTestId('DropdownContent');
        fireEvent.press(dropdownElement);

        const name2Element = getByText('name 2');
        fireEvent.press(name2Element)

        expect(handleChangeMock).toBeCalledWith('2')
    })

})