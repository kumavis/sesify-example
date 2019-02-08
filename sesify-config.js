
const dependencies = {
  'friend': { $: { document } },
  // 'foe': { $: { document } },
}

const config = {
  dependencies,
  global: {},
  defaultGlobals: { console },
}

return config