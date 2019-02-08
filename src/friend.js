module.exports = { action: sayHello }

function sayHello() {
  console.log('hello from your friend')
  try {
    document.body.innerHTML += '\nfriend happily updated the DOM'
  } catch (err) {
    console.warn('friend failed to update the DOM')
  }
}