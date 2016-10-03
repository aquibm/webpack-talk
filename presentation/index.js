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
    Text,
    Table, TableRow, TableHeaderItem, TableItem
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

                    <Slide bgColor="accent">
                    	<Appear><Image src={images.unpackingWebpack[0]} /></Appear>
                    	<Appear><Image src={images.unpackingWebpack[1]} /></Appear>
                    	<Appear><Image src={images.unpackingWebpack[2]} /></Appear>
                    	<Appear><Image src={images.unpackingWebpack[3]} /></Appear>
                    	<Appear><Image src={images.unpackingWebpack[4]} /></Appear>
                    </Slide>

                    <Slide>
                    	<Heading fit={true}>Brief history of web trends</Heading>
                    	<List style={{color: 'white'}}>
                    		<Appear><ListItem>Static Content - dumb pages served to the client</ListItem></Appear>
                    		<Appear><ListItem>Pages dynamically rendered on the server</ListItem></Appear>
                    		<Appear><ListItem>Client-side code shipped with website to augment UX</ListItem></Appear>
                    		<Appear><ListItem>Wild West AJAX / XHR era</ListItem></Appear>
                    		<Appear><ListItem>Single Page Apps (SPAs)</ListItem></Appear>
                    		<Appear><ListItem>...</ListItem></Appear>
                    		<Appear><ListItem>Future: Back to static sites?!?</ListItem></Appear>
                    	</List>
                    </Slide>

                    <Slide bgColor="accent">
                    	<Heading fit={true}>Single Page Applications</Heading>
                    	<Text>&nbsp;</Text>
                    	<Table style={{color: 'white'}}>
                    		<TableRow style={{borderBottom: '1px solid white'}}>
                    			<TableHeaderItem style={{borderRight: '1px solid white'}}>Advantages</TableHeaderItem>
                    			<TableHeaderItem>Disadvantages</TableHeaderItem>
                    		</TableRow>

                    		<TableRow>
                    			<TableItem style={{borderRight: '1px solid white', padding: '0 10px 20px 0'}}>Push computational effort down to the client</TableItem>
                    			<TableItem style={{paddingBottom: '20px'}}>SEO - Solved by Google & Server-side rendering</TableItem>
                    		</TableRow>
                    		<TableRow>
                    			<TableItem style={{borderRight: '1px solid white', padding: '0 10px 20px 0'}}>Quick navigation and transtiions</TableItem>
                    			<TableItem style={{paddingBottom: '20px'}}>Complexity!</TableItem>
                    		</TableRow>
                    		<TableRow>
                    			<TableItem style={{borderRight: '1px solid white', padding: '0 10px 20px 0'}}>Offline capability</TableItem>
                    			<TableItem style={{paddingBottom: '20px'}}>Dealing with network issues</TableItem>
                    		</TableRow>
                    	</Table>
                    </Slide>

                    <Slide bgColor="accent">
                   		<Heading fit={true}>What developers want:</Heading>
                   		<List style={{color: 'white'}}>
                    		<Appear><ListItem>Ease of use (TS, ES6, Less, Sass, etc)</ListItem></Appear>
                    		<Appear><ListItem>Separation of concerns</ListItem></Appear>
                    		<Appear><ListItem>Being DRY</ListItem></Appear>
                    	</List>
                    </Slide>

                    <Slide bgColor="accent">
                   		<Heading fit={true}>Performance / Browser requirements:</Heading>
                   		<List style={{color: 'white'}}>
                    		<Appear><ListItem>Cross-browser compatible code</ListItem></Appear>
                    		<Appear><ListItem>Less round trips to the server</ListItem></Appear>
                    	</List>
                    </Slide>

                    <Slide>
                    	<Heading fit={true}>Grunt => Gulp => Webpack: An interactive journey</Heading>
                    </Slide>

                    <Slide bgColor="accent">
                    	<Heading>Grunt</Heading>
                    	// TODO(AM): Insert Ignite grunt config
                    </Slide>

                    <Slide bgColor="accent">
                    	<Heading>Gulp</Heading>
                    	// TODO(AM): Insert gulp config
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
