var ANIMATED = 'animated'
var HERO = 'hero'
var HAT = 'hat'
var duration = 500

function hasCl(e, cl) {
  return e.className.indexOf(cl) > -1
}

function addCl(e, cl) {
  if (!hasCl(e, cl)) {
    e.className = e.className ? e.className + ' ' + cl : cl
  }
}

function rmCl(e, cl) {
  if (hasCl(e, cl)) {
    if (e.className.indexOf(' ' + cl) > -1) {
      cl = ' ' + cl
    }
    e.className = e.className.replace(cl, '')
  }
}

function $(id) {
  return document.getElementById(id)
}

function click(evt) {
  var hero = $(HERO)
  if (!hasCl(hero, ANIMATED)) {
    addCl(hero, ANIMATED)
    setTimeout(animate, duration)
  }
}

function resetAnim() {
  rmCl($(HERO), ANIMATED)
}

function animate() {
  var hero = $(HERO)
  hero.innerHTML = hero.innerHTML
  $(HAT).addEventListener('click', click)
  setTimeout(resetAnim, duration * 2)
}

setTimeout($(HAT).addEventListener('click', click), duration)
