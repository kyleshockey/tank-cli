const Keen = require('keen.io')


const keen = Keen.configure({
	projectId: "5757f5ae80a7bd042843f2fd",
	writeKey:"c37ec921633f983e2bc120f1ce8141e848c3954e81a44721eabfd9347af4537e420a549b00aa19b2e6e487dc72ecfbdb841acde1d1c78801e210ac2c18c30757bfe6241961dae93d813ca8c3e545161f1ca92f30bc4b3502cba5a857d8468453"
})

// send anonymous usage stats to the tank team
function track(evt, data, fn) {
  if(process.env.TANK_ENV === 'development') {
    return
  }
  fn = fn || function() {}
  keen.addEvent(evt, data, function(err) {
    if(!err) {
      fn()
    }
  })
}

module.exports = track
