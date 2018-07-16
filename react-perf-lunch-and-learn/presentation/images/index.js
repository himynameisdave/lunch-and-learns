// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';
//  Handles preloading of all the images
const images = {
    introBg: require(`../../assets/retro-intro.jpg`),
    bruceHappy: require(`../../assets/bruce-happy.svg`),
    bruceSad: require(`../../assets/bruce-sad.svg`),
    chromeProfilin: require(`../../assets/chrome-profiling.png`),
    nestPas: require(`../../assets/nest-pas.svg`),
    independentChildren: require(`../../assets/independent-children.jpg`),
    underTheHood: require(`../../assets/under-the-hood.gif`),
    canWeFixIt: require(`../../assets/can-we-fix-it.gif`),
    yTho: require(`../../assets/y-tho.jpg`),
    yThoEyes: require(`../../assets/y-tho-eyes.jpg`),
    watGif: require(`../../assets/WAT.gif`),
    fastNos: require(`../../assets/fast-nos.gif`),
    kidPresDont: require(`../../assets/kid-pres-dont.gif`),
    whyDidYouUpdate: require(`../../assets/why-did-you-update.gif`),
};
//  Preload them all!
preloader(images);

export default images;
