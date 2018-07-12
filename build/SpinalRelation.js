"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const spinalCore = require("spinal-core-connectorjs");
const globalType = typeof window === "undefined" ? global : window;
let getViewer = function () {
  return globalType.v;
};

class SpinalRelation extends globalType.Model {
  constructor(_type, _vertexList1, _vertexList2, _isDirected) {
    super();
    if (FileSystem._sig_server) {
      this.add_attr({
        id: this.guid(),
        type: _type,
        vertexList1: _vertexList1,
        vertexList2: _vertexList2,
        isDirected: _isDirected || false
      });
    }
  }

  guid() {
    return this.constructor.name + "-" + this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4() + "-" + Date.now().toString(16);
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

}

exports.default = SpinalRelation;
spinalCore.register_models([SpinalRelation]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TcGluYWxSZWxhdGlvbi5qcyJdLCJuYW1lcyI6WyJzcGluYWxDb3JlIiwicmVxdWlyZSIsImdsb2JhbFR5cGUiLCJ3aW5kb3ciLCJnbG9iYWwiLCJnZXRWaWV3ZXIiLCJ2IiwiU3BpbmFsUmVsYXRpb24iLCJNb2RlbCIsImNvbnN0cnVjdG9yIiwiX3R5cGUiLCJfdmVydGV4TGlzdDEiLCJfdmVydGV4TGlzdDIiLCJfaXNEaXJlY3RlZCIsIkZpbGVTeXN0ZW0iLCJfc2lnX3NlcnZlciIsImFkZF9hdHRyIiwiaWQiLCJndWlkIiwidHlwZSIsInZlcnRleExpc3QxIiwidmVydGV4TGlzdDIiLCJpc0RpcmVjdGVkIiwibmFtZSIsInM0IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3Vic3RyaW5nIiwicmVnaXN0ZXJfbW9kZWxzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLGFBQWFDLFFBQVEseUJBQVIsQ0FBbkI7QUFDQSxNQUFNQyxhQUFhLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NDLE1BQWhDLEdBQXlDRCxNQUE1RDtBQUNBLElBQUlFLFlBQVksWUFBVztBQUN6QixTQUFPSCxXQUFXSSxDQUFsQjtBQUNELENBRkQ7O0FBSWUsTUFBTUMsY0FBTixTQUE2QkwsV0FBV00sS0FBeEMsQ0FBOEM7QUFDM0RDLGNBQVlDLEtBQVosRUFBbUJDLFlBQW5CLEVBQWlDQyxZQUFqQyxFQUErQ0MsV0FBL0MsRUFBNEQ7QUFDMUQ7QUFDQSxRQUFJQyxXQUFXQyxXQUFmLEVBQTRCO0FBQzFCLFdBQUtDLFFBQUwsQ0FBYztBQUNaQyxZQUFJLEtBQUtDLElBQUwsRUFEUTtBQUVaQyxjQUFNVCxLQUZNO0FBR1pVLHFCQUFhVCxZQUhEO0FBSVpVLHFCQUFhVCxZQUpEO0FBS1pVLG9CQUFZVCxlQUFlO0FBTGYsT0FBZDtBQU9EO0FBQ0Y7O0FBRURLLFNBQU87QUFDTCxXQUNFLEtBQUtULFdBQUwsQ0FBaUJjLElBQWpCLEdBQ0EsR0FEQSxHQUVBLEtBQUtDLEVBQUwsRUFGQSxHQUdBLEtBQUtBLEVBQUwsRUFIQSxHQUlBLEdBSkEsR0FLQSxLQUFLQSxFQUFMLEVBTEEsR0FNQSxHQU5BLEdBT0EsS0FBS0EsRUFBTCxFQVBBLEdBUUEsR0FSQSxHQVNBLEtBQUtBLEVBQUwsRUFUQSxHQVVBLEdBVkEsR0FXQSxLQUFLQSxFQUFMLEVBWEEsR0FZQSxLQUFLQSxFQUFMLEVBWkEsR0FhQSxLQUFLQSxFQUFMLEVBYkEsR0FjQSxHQWRBLEdBZUFDLEtBQUtDLEdBQUwsR0FBV0MsUUFBWCxDQUFvQixFQUFwQixDQWhCRjtBQWtCRDs7QUFFREgsT0FBSztBQUNILFdBQU9JLEtBQUtDLEtBQUwsQ0FBVyxDQUFDLElBQUlELEtBQUtFLE1BQUwsRUFBTCxJQUFzQixPQUFqQyxFQUNKSCxRQURJLENBQ0ssRUFETCxFQUVKSSxTQUZJLENBRU0sQ0FGTixDQUFQO0FBR0Q7O0FBdkMwRDs7a0JBQXhDeEIsYztBQTRDckJQLFdBQVdnQyxlQUFYLENBQTJCLENBQUN6QixjQUFELENBQTNCIiwiZmlsZSI6IlNwaW5hbFJlbGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3BpbmFsQ29yZSA9IHJlcXVpcmUoXCJzcGluYWwtY29yZS1jb25uZWN0b3Jqc1wiKTtcbmNvbnN0IGdsb2JhbFR5cGUgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogd2luZG93O1xubGV0IGdldFZpZXdlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZ2xvYmFsVHlwZS52O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BpbmFsUmVsYXRpb24gZXh0ZW5kcyBnbG9iYWxUeXBlLk1vZGVsIHtcbiAgY29uc3RydWN0b3IoX3R5cGUsIF92ZXJ0ZXhMaXN0MSwgX3ZlcnRleExpc3QyLCBfaXNEaXJlY3RlZCkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKEZpbGVTeXN0ZW0uX3NpZ19zZXJ2ZXIpIHtcbiAgICAgIHRoaXMuYWRkX2F0dHIoe1xuICAgICAgICBpZDogdGhpcy5ndWlkKCksXG4gICAgICAgIHR5cGU6IF90eXBlLFxuICAgICAgICB2ZXJ0ZXhMaXN0MTogX3ZlcnRleExpc3QxLFxuICAgICAgICB2ZXJ0ZXhMaXN0MjogX3ZlcnRleExpc3QyLFxuICAgICAgICBpc0RpcmVjdGVkOiBfaXNEaXJlY3RlZCB8fCBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ3VpZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICtcbiAgICAgIFwiLVwiICtcbiAgICAgIHRoaXMuczQoKSArXG4gICAgICB0aGlzLnM0KCkgK1xuICAgICAgXCItXCIgK1xuICAgICAgdGhpcy5zNCgpICtcbiAgICAgIFwiLVwiICtcbiAgICAgIHRoaXMuczQoKSArXG4gICAgICBcIi1cIiArXG4gICAgICB0aGlzLnM0KCkgK1xuICAgICAgXCItXCIgK1xuICAgICAgdGhpcy5zNCgpICtcbiAgICAgIHRoaXMuczQoKSArXG4gICAgICB0aGlzLnM0KCkgK1xuICAgICAgXCItXCIgK1xuICAgICAgRGF0ZS5ub3coKS50b1N0cmluZygxNilcbiAgICApO1xuICB9XG5cbiAgczQoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAuc3Vic3RyaW5nKDEpO1xuICB9XG5cblxufVxuXG5zcGluYWxDb3JlLnJlZ2lzdGVyX21vZGVscyhbU3BpbmFsUmVsYXRpb25dKTsiXX0=