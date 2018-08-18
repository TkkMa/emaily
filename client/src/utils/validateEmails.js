const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) =>{
    if(!(emails.slice(-1).match(/,|\s/))){
        const invalidEmails = emails
            .split(',')
            .map(email=> email.trim())
            .filter(email => re.test(email) === false);  // capture cases where email is invalid i.e. return true

        if(invalidEmails.length){
            return `These emails are invalid: ${invalidEmails}`;
        }
    }
    return;
};