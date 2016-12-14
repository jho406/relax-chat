// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require relax
//= require react
//= require boot
//= require_tree ./layouts
//= require_tree ./views
//= require_tree ./components
//= require_tree .
//= require message-bus
//

MessageBus.start(); // call once at startup

// how often do you want the callback to fire in ms
MessageBus.callbackInterval = 500;
MessageBus.subscribe("/channel", function(data){
  console.log(data);
  graft_type = data[0];
  keyPath = data[1];
  node = new Function("'use strict'; return " + data[2] )();
  Relax.graftByKeypath(keyPath, node.data, {type: graft_type});
});
