# Roam Styles

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
