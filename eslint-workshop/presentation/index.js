import React, { Component } from 'react';
import {
    Appear,
    Deck,
    Heading,
    Image,
    List,
    ListItem,
    MarkdownSlides,
    Slide,
    Text,
} from 'spectacle';
import theme from './theme/index.js';
import preloader from '../node_modules/spectacle/src/utils/preloader.js';

//  The list of images
const images = {
    whatsTheDeal: require('../assets/001-whats-the-deal.gif'),
    pocketLint: require('../assets/002-pocket-lint.gif'),
    linterWiki: require('../assets/003-lint-wiki.png'),
    how: require('../assets/004-how.gif'),
    howChart: require('../assets/005-how-chart.png'),
};
//  Preload images
preloader(images);
//  Simple CSS reset
require('normalize.css');


export default class Presentation extends Component { // eslint-disable-line
    render() {
        return (
            <Deck theme={theme} transition={['slide']} transitionDuration={500}>
                {/* Slide 1 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        textAlign="left"
                    >
                        eslint
                    </Heading>
                    <Appear>
                        <Heading
                            size={5}
                            textAlign="left"
                            style={{ fontStyle: 'italic' }}
                        >
                            what's the deal with that?
                        </Heading>
                    </Appear>
                    <Appear>
                        <Image
                            src={images.whatsTheDeal.replace('/', '')}
                            width="100%"
                        />
                    </Appear>
                </Slide>
                {/* Slide 2 */}
                <Slide align="center center">
                    <Appear>
                        <Heading
                            size={1}
                            textAlign="center"
                        >
                            eslint is a linter...
                        </Heading>
                    </Appear>
                </Slide>
                {/* Slide 3 */}
                <Slide align="flex-start">
                    <Image
                        src={images.pocketLint.replace('/', '')}
                        width="100%"
                    />
                    <Appear>
                        <Heading
                            size={4}
                            textAlign="center"
                        >
                            great, what's a linter?
                        </Heading>
                    </Appear>
                </Slide>
                {/* Slide 4 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        textAlign="center"
                    >
                        what is a linter?
                    </Heading>
                    <List >
                        <Appear>
                            <ListItem>
                                A type of static program analysis
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                you don’t need to run code to see errors
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Developed at Bell Labs
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Because they were doing cool shit like writing and optimizing C compilers
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 5 */}
                <Slide align="flex-start">
                    <Image
                        src={images.linterWiki.replace('/', '')}
                        />
                </Slide>
                {/* Slide 5.1 */}
                <Slide align="flex-start">
                    <Appear>
                        <div>
                            <Heading
                                size={3}
                                textAlign="center"
                            >
                                how do they work?
                            </Heading>
                            <Image
                                src={images.how.replace('/', '')}
                                style={{ marginTop: '3rem' }}
                            />
                        </div>
                    </Appear>
                </Slide>
                {/* Slide 5.1 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        textAlign="center"
                    >
                        how do they work?
                    </Heading>
                    <Appear>
                        <Image
                            src={images.howChart.replace('/', '')}
                            style={{ marginTop: '3rem' }}
                        />
                    </Appear>
                </Slide>
                {/* Slide 5.2 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        style={{ marginTop: '3rem' }}
                        textAlign="center"
                    >
                        how do they work?
                    </Heading>
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        Parser
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Takes some kind of text input (ie: your source code)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Outputs some kind of data structure (such as an AST) that can be passed off for more analysis
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                One example is the HTML parser in your browser
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Common JavaScript parsers include: babylon (part of babel), babel-eslint, UglifyJS, and Espree (used by ESLint)
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 5.3 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        style={{ marginTop: '3rem' }}
                        textAlign="center"
                    >
                        how do they work?
                    </Heading>
                    <Heading
                        size={5}
                        textAlign="left"
                    >
                        Abstract Syntax Tree (AST)
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                A syntax tree is a data represntation of the inputted code
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Once your source code is represented as data, it can be analyzed and the fun can begin
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Let's check out a great tool to check out what's going on is ASTexplorer.net
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 5.4 */}
                <Slide align="center center">
                    <Heading
                        size={3}
                        textAlign="center"
                    >
                        <a
                            href="http://astexplorer.net/#/gist/402409ee86b1b04980c4941985e4a040/9cd4aea148d9b7c124c357bc488bb744bdbd83ab"
                            target="_blank"
                        >
                            ASTexplorer.net
                        </a>
                    </Heading>
                </Slide>
                {/* Slide 6 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        style={{ marginBottom: '3rem' }}
                        textAlign="center"
                    >
                        JavaScript Linting
                    </Heading>
                    <Appear>
                        <Heading
                            size={5}
                            style={{ marginBottom: '3rem' }}
                            textAlign="left"
                        >
                            JSLint - 2002
                        </Heading>
                    </Appear>
                    <List>
                        <Appear>
                            <ListItem>
                                Douglas Crockford (author of "The Good Parts") creates JSLint
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Probably the first static code analysis tool for JavaScript
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Webapp + command line tool
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Was pretty opinionated (like Douglas Crockford)
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 7 */}
                <Slide align="flex-start">
                    <iframe
                        height="100%"
                        src="http://jslint.com/"
                        width="100%"
                    />
                </Slide>
                {/* Slide 8 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        style={{ marginBottom: '3rem' }}
                        textAlign="center"
                    >
                        JavaScript Linting
                    </Heading>
                    <Appear>
                        <Heading
                            size={5}
                            style={{ marginBottom: '3rem' }}
                            textAlign="left"
                        >
                            JSHint - 2011
                        </Heading>
                    </Appear>
                    <List >
                        <Appear>
                            <ListItem>
                                JavaScript is hot shit at this point (thanks to NodeJS)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                JSLint was too opinionated
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Anton Kovalyov forks JSLint in 2011
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Makes it less opinionated
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Makes it more configurable
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 9 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        style={{ marginBottom: '3rem' }}
                        textAlign="center"
                    >
                        JavaScript Linting
                    </Heading>
                    <Appear>
                        <Heading
                            size={5}
                            style={{ marginBottom: '3rem' }}
                            textAlign="left"
                        >
                            ESLint - 2013
                        </Heading>
                    </Appear>
                    <List >
                        <Appear>
                            <ListItem>
                                Nicholas C. Zakas, a JSHint contributor, creates ESLint
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Completely new linter, built with a more modular philosophy...
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 10 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        style={{ marginBottom: '3rem' }}
                        textAlign="center"
                    >
                        JavaScript Linting
                    </Heading>
                    <Heading
                        size={5}
                        style={{ marginBottom: '3rem' }}
                        textAlign="left"
                    >
                        ESLint Philosophy
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Everything is pluggable
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                All rules can be turned off or on (nothing can be deemed “too important to turn off”)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                All rules can be set to a warning or error individually
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Very easy to create custom rules (and formatters), which work exactly like those bundled with ESlint
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Rules are “agenda free” - ESLint does not promote any particular coding style
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 11 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        style={{ marginBottom: '3rem' }}
                        textAlign="center"
                    >
                        Configuring ESlint
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Parser: "what do you want to convert your code into an AST"
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Rules: "do you want turn this rule on or off"
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Plugins: "a set of definitions for each rule"
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Extends: "These are some rules that I want to have turned on"
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                {/* Slide 11 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        style={{ marginBottom: '3rem' }}
                        textAlign="center"
                    >
                        ESLint Rules
                    </Heading>
                    <Heading
                        size={5}
                        style={{ marginBottom: '3rem' }}
                        textAlign="left"
                    >
                        <a
                            href="http://astexplorer.net/#/gist/402409ee86b1b04980c4941985e4a040/7da1d133bddb3958c20fca2af809cb66e6eba193"
                            target="_blank"
                        >
                            Simple example on AST
                        </a>
                    </Heading>
                </Slide>
                {/* Slide 12 */}
                <Slide align="flex-start">
                    <Heading
                        size={3}
                        style={{ marginBottom: '3rem' }}
                        textAlign="center"
                    >
                        ESLint Rules
                    </Heading>
                    <Heading
                        size={5}
                        style={{ marginBottom: '3rem' }}
                        textAlign="left"
                    >
                        <a
                            href="http://astexplorer.net/#/gist/aad41f7aee5a2fd61e99b45779ac1a7f/3ff8e18733d859c8c4aadbfbb427c79938583343"
                            target="_blank"
                        >
                            A 7Geese Example
                        </a>
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}
