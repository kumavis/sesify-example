
// these are used for global detection by some modules
const safeObjects = sesEval('({ Object, Symbol })')

const defaultGlobals = Object.assign({}, getAndBindGlobals(['console', 'atob', 'btoa', 'setTimeout', 'clearTimeout', 'clearInterval', 'setInterval']), safeObjects)
const moduleGlobals = {}
const depConfig = {}

function getAndBindGlobals (globalNames) {
  const selectedGlobals = {}
  globalNames.forEach(glob => {
    const value = deepGetAndBind(self, glob)
    if (value === undefined) return
    deepSet(selectedGlobals, glob, value)
  })
  return selectedGlobals
}

function deepGetAndBind(obj, pathName) {
  const pathParts = pathName.split('.')
  const parentPath = pathParts.slice(0,-1).join('.')
  const childKey = pathParts[pathParts.length-1]
  const globalRef = typeof self !== 'undefined' ? self : global
  const parent = parentPath ? deepGet(globalRef, parentPath) : globalRef
  if (!parent) return parent
  const value = parent[childKey]
  if (typeof value === 'function') {
    return value.bind(parent)
  }
  return value
}

function deepGet (obj, pathName) {
  let result = obj
  pathName.split('.').forEach(pathPart => {
    if (result === null) {
      result = undefined
      return
    }
    if (result === undefined) {
      return
    }
    result = result[pathPart]
  })
  return result
}

function deepSet (obj, pathName, value) {
  let parent = obj
  const pathParts = pathName.split('.')
  const lastPathPart = pathParts[pathParts.length-1]
  pathParts.slice(0,-1).forEach(pathPart => {
    const prevParent = parent
    parent = parent[pathPart]
    if (parent === null) {
      throw new Error('DeepSet - unable to set "'+pathName+'" on null')
    }
    if (parent === undefined) {
      parent = {}
      prevParent[pathPart] = parent
    }
  })
  parent[lastPathPart] = value
}

function exposeToModule (moduleName, globalNames) {
  const globalsToExpose = getAndBindGlobals(globalNames)
  moduleGlobals[moduleName] = Object.assign({}, defaultGlobals, globalsToExpose)
}

function exposeToDep (moduleName, depPath) {
  depConfig[depPath] = { $: moduleGlobals[moduleName] }
}

// set per-module globals config
exposeToModule('punycode', ['window'])
exposeToModule('tone', ['AudioBufferSourceNode.prototype.noteGrainOn', 'AudioBufferSourceNode.prototype.noteOff', 'AudioBufferSourceNode.prototype.start', 'AudioBufferSourceNode.prototype.stop', 'AudioContext', 'AudioContext.prototype.createDelay', 'AudioContext.prototype.createDelayNode', 'AudioContext.prototype.createGain', 'AudioContext.prototype.createGainNode', 'AudioContext.prototype.createPeriodicWave', 'AudioContext.prototype.createWaveTable', 'AudioNode', 'AudioNode.prototype._nativeConnect', 'AudioNode.prototype.chain', 'AudioNode.prototype.connect', 'AudioNode.prototype.fan', 'AudioNode.prototype.noGC', 'AudioNode.prototype.toMaster', 'MediaStreamTrack', 'MediaStreamTrack.getSources', 'OfflineAudioContext', 'OscillatorNode.prototype.noteOff', 'OscillatorNode.prototype.noteOn', 'OscillatorNode.prototype.setPeriodicWave', 'OscillatorNode.prototype.setWaveTable', 'OscillatorNode.prototype.start', 'OscillatorNode.prototype.stop', 'XMLHttpRequest', 'cancelAnimationFrame', 'console.log', 'console.warn', 'name', 'navigator.getUserMedia', 'navigator.mozGetUserMedia', 'navigator.msGetUserMedia', 'navigator.webkitGetUserMedia', 'requestAnimationFrame', 'window'])
// set in dep graph
// depGraph goes here
exposeToDep('punycode', 'url punycode')
exposeToDep('tone', 'tone')

const config = {
  dependencies: depConfig,
  global: {},
  defaultGlobals,
}

return config