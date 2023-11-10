import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode:'system',
    useSystemColorMode:true,
}

export const theme = extendTheme({
    config,
    fonts:{
        heading:"'Roboto','sans-serif'",
        body:"'Roboto','sans-serif'"
    }
})