# Roam Styles

I have been working on this for a couple days, everything is going to be verry hacky / half done. Expect typos and bad
edges.

## Goals

There are 2 main goal, a nice looking serif interface and as little movement as possible. I personally really love the
look of a text dense website with a serif font, so making the notes app that I spend most of my time in like that would
be great. For the lack of motion, there are many block in roam that very in size when typing in them versus looking at
them; I find it really distracting and not "delightful", having an extremely consistent editing vs viewing experience is
just pleasing to me.

Other smaller goals.
  - Look good with a small width
  - Remove most color (I keep a little for things that I think need attention) https://groups.google.com/g/golang-nuts/c/hJHCAaiL0so/m/kG3BHV6QFfIJ
  - Remove clutter, the indent guides and bullet points for blocks just look ugly to me. They are still there
    functionally but I don't need to see them to know I can close/move a block.
  - 

## Setup

This is my css config for roam.

Import it with:
css```
@import url('https://cdn.jsdelivr.net/gh/Hehk/roam-css/build/roam.css');
```

## Dev

Put this into your graph
javascript```
const loadCss = async () => {
  const css = await fetch('http://localhost:3000')
  const text = await css.text()

  const script = document.createElement('style')
  script.id = "roam-custom"
  script.innerText = text

  const oldCss = document.querySelector('#roam-custom')
  if (oldCss) oldCss.remove()
  document.head.appendChild(script)
}

setInterval(loadCss, 5000)
loadCss()
```
and start up both
`yarn dev`
`yarn build -w`
Now your graph will live update with changes made to the scss files
