import moment from 'moment';
import respond from '../utils/respond.js';


export default (event, context, callback) => {
    //  Respond is a just simple wrapper which simplifies calling the response callback
    respond(callback).json({
        first_name: 'David',
        last_name: 'Lucky',
        //  Use our env var to determine how many years we've been alive
        age: moment().diff(process.env.MY_DOB, 'years'),
        french_skills: 12, // ...out of ten
    });
};
