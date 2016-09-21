// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    city: require("../assets/city.jpg")
};

preloader(images);

const theme = createTheme({
    primary: "#ff4081",
    accent: "#222B30",
    textColor: "#fff"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["slide"]} transitionDuration={150}>
                    <Slide>
                        <Heading>Unpacking Webpack</Heading>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
