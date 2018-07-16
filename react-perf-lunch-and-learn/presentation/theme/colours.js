//  Traditional 7Geese colours
const SGColours = {
    denim: `#0F76AC`,
    midnightBlue: `#002f47`,
    polar: `#E4F2F9`,
    blizzard: `#F5F8FB`,
    graphite: `#465F6E`,
    slate: `#32444F`,
    black: `#000000`,
    white: `#FFFFFF`,
    grey10: `#e6e6e6`,
};

export default {
    ...SGColours,
    background: SGColours.midnightBlue,
    textColor: SGColours.polar,
    //  Spectacle uses as the default background...?
    primary: SGColours.midnightBlue,
    secondary: SGColours.polar,
    tertiary: `#002f47`,
    quartenary: `#002f47`,

};
