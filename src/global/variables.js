var isLoggedIn = {
    LOGGED_IN: false,
    makeTrue: function() {
        isLoggedIn.LOGGED_IN = true;
    },
    makeFalse: function() {
        isLoggedIn.LOGGED_IN = false;
    }
}

export default isLoggedIn;