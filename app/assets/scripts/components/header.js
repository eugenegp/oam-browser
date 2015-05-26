'use strict';
var React = require('react/addons');
var actions = require('../actions/actions');
var actions = require('../actions/actions');

var Header = React.createClass({

  aboutClickHandler: function(e) {
    e.preventDefault();
    actions.openModal('info');
  },

  onGeocoderSearch: function(e) {
    e.preventDefault();
    var _this = this;

    var geocoder = L.mapbox.geocoder('mapbox.places');

    var queryString = this.getDOMNode().querySelector('[data-hook="geocoder"]').value;
    geocoder.query(queryString, function(err, data) {
      actions.geocoderResult(data.lbounds ? data.lbounds : false);
    });
  },

  render: function() {
    return (
      <header id="site-header" role="banner">
      <h1 id="site-title"><img src="assets/graphics/layout/oam-logo-h-pos.svg" width="167" height="32" alt="OpenAerialMap logo" /><span>OpenAerialMap</span> <small>Beta</small></h1>
        <nav id="site-prime-nav" role="navigation">
          <div className="nav-block-prime">
            <form className="form-search" onSubmit={this.onGeocoderSearch}>
              <div className="input-group">
                <input className="form-control input-m input search" type="search" placeholder="Search location" data-hook="geocoder" />
                <span className="input-group-bttn"><button type="submit" className="bttn-search"><span>Search</span></button></span>
              </div>
            </form>
            <ul className="app-menu">
              <li className="drop dropdown center" data-title="Coming soon!">
                <a href="#" title="Settings" className="bttn-settings disabled" data-toggle="drop"><span>Settings</span></a>
                <div className="drop-content">
                  <p>Settings go here.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav-block-sec">
            <ul className="meta-menu">
              <li><a href="#" title="About" className="bttn-info" onClick={this.aboutClickHandler} ><span>About</span></a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
});

module.exports = Header;
