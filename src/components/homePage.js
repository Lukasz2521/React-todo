"use strict";

var React = require('React');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, react router, and flux for ultra responsive web apps.</p>
            </div>
        );
    }
});

module.exports = Home;