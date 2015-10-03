// You need to add your Facebook and Twitter keys here
// https://dev.twitter.com/
// https://developers.facebook.com/
var ids = {
    facebook: {
        clientID: "916451825115127",
        clientSecret: "1f359eb4f20af0e129b57e06b2bdddb2",
        callbackURL: "http://cinephobia.herokuapp.com/auth/facebook/callback"
    },
    twitter: {
        consumerKey: "MHmt83oTXKQHOsySs7rUP5CPl",
        consumerSecret: "epGarXSQbhRgUromQuUAydoCspCxPxnCPhbsRWPtuGNRseMq7x",
        callbackURL: "http://cinephobia.herokuapp.com/auth/twitter/callback",
        accessToken: "3569919499-Gk3BUPBQ5UqfzMk22dCRu6cEjtDaLBNCqbF23sS",
        accessTokenSecret: "klNsTC2lXUp4wryXTulZf4EpWgXu8T4jYI6ND43NMzS6B"
    }
}

module.exports = ids
