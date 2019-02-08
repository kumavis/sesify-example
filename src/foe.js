// attempt to overwrite friend's exports
require('friend').action = doAttack

// export out own action
module.exports = { action: doAttack }

function doAttack() {
  console.log('hello from your foe')
  try {
    document.body.innerHTML = 'this page has been <important>HACKED</important>'
  } catch (err) {
    console.log('foe failed to modify DOM')
  }
}
