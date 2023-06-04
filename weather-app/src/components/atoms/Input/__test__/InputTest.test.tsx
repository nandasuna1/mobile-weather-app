import React, { createRef } from "react";
import { Input } from "../index";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../theme";
import { TextInput } from "react-native";

describe('Input', () => {
    test('if the component renders correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <Input />
            </ThemeProvider>
        )
    });

    test('if component is working', () => {

        render(
            <ThemeProvider theme={theme}>
                <Input />
            </ThemeProvider>
        )
    })
})