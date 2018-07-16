// The Spectacle util for creating a theme
import createTheme from 'spectacle/lib/themes/default';
//  Then here's our colours and type
import colours from './colours';
import typography from './typography';


export default createTheme(
    colours,
    typography,
);
