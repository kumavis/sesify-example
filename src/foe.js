// attempt to overwrite friend's exports
require('friend').action = doAttack

// export out own action
module.exports = { action: doAttack }

// run at runtime
// doAttack()

function doAttack() {
  console.log('hello from your foe')
  try {
    // skip if attack already succeeded
    if (document.body.innerHTML.includes('foe')) return
    // do attack
    document.body.innerHTML = 'this page has been <important>HACKED</important> by foe.'
    document.body.style.backgroundColor = 'red'
  } catch (err) {
    console.log('foe failed to modify DOM')
  }
}
