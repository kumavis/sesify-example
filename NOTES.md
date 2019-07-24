notes
- [ ] app/attack script
  - i have app, with app secrets
  - i want to add a fluff
  - fluff stole my secrets
  - add sesify, defeat fluff
    - npm run sesify-config
    - npm run dev:safe
  - use sesify-viz
    - npm run viz
  - discover deep-dep attack via viz
    - [ ] fix bug detecting use of global
- [ ] example modules
  - use global directly to do attack
  - use global exporting dep to do attack


- [x] show autogen
  - [x] if needed just publish a module to work around autogen limitation
- [x] show viz
  - [x] make a cli tool to generate
  - [x] make viz easier to update
  - [x] color red on 'fetch'
  - [x] "without sesify" mode
  - [x] remove "background" label
  - [ ] show directionality

- [ ] less contrived example
  - [ ] loose ideas
    - [ ] format a string
    - [ ] attacker that uses DOM apis sneakily
    - [ ] attacker that uses pure module
    - [ ] attacker that uses DOM access via deps
  - [ ] attacks
    - [ ] corrupt moduleExports
    - [ ] unreasonable platform api
    - [ ] primitive modification
    - [ ] timing attacks

- security (per markm, i think)
  - authentication
  - consistency
  - availability
