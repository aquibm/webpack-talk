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
    city: require("../assets/city.jpg"),
    unpackingWebpack: [
        require('../assets/unpacking_webpack_3.png'),
    	require('../assets/unpacking_webpack_1.png'),
    	require('../assets/unpacking_webpack_2.png'),
    	require('../assets/unpacking_webpack_4.png'),
    	require('../assets/unpacking_webpack_5.png')
    ]
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

                    <Slide>
                    	<Appear><Image src={images.unpackingWebpack[0]} /></Appear>
                    	<Appear><Image src={images.unpackingWebpack[1]} /></Appear>
                    	<Appear><Image src={images.unpackingWebpack[2]} /></Appear>
                    	<Appear><Image src={images.unpackingWebpack[3]} /></Appear>
                    	<Appear><Image src={images.unpackingWebpack[4]} /></Appear>
                    </Slide>

                    <Slide>
                    	<Heading fit={true}>Brief history of Websites / Web apps</Heading>
                    	<List style={{color: 'white'}}>
                    		<Appear><ListItem>Static Content - dumb pages served to the client</ListItem></Appear>
                    		<Appear><ListItem>Pages dynamically rendered on the server</ListItem></Appear>
                    		<Appear><ListItem>Client-side code shipped with website to augment UX</ListItem></Appear>
                    		<Appear><ListItem>Wild West AJAX / XHR era</ListItem></Appear>
                    		<Appear><ListItem>Single Page Apps (SPAs)</ListItem></Appear>
                    	</List>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
