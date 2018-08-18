email = 'a@a.com'
choice = 'yes' || 'no'

Survey.updateOne({
    id: surveyId,
    recipients: {
        $elemMatch: { email: email, responded: false }
    }
}, {
    $inc: { [choice]: 1 },
    $set : { 'recipients.$.responded': true }
})

// $elemMatch -- go through each element in recipients array
// $inc: {[choice]: 1} -- find the property and increment by 1
// [choice] -- ES2016 syntax called key interpolation -- if choice is 'yes', then $inc: {'yes': 1}
// $set : update/set one of the properties
// 'recipients.$.responded' -- go into the recipient sub-collection, $ lines up with the index of $elemMatch