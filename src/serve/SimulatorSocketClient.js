var SimulatorSocketClient = Class(function () {

  this.init = function(appRoutes, socket) {
    this._appRoutes = appRoutes;
    this._socket = socket;

    this._socket.emit('handshakeResponse');
  };

  this.emit = function(name, data) {
    this._socket.emit(name, data);
  };

})

module.exports = SimulatorSocketClient;
