(function(){"use strict";importScripts("/node_modules/javascript-lp-solver/prod/solver.js"),onmessage=function(s){var e=solver.Solve(s.data);this.postMessage(e)}})();
