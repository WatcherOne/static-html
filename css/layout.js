function handleToggleCode (e) {
    e.classList.toggle('down')
    e.classList.toggle('up')
    const $parent = e.parentElement
    if (!$parent) return
    const $brother = $parent.nextElementSibling
    if (!$brother) return
    $brother.classList.toggle('hide')
}

function handleToggleExpand (e) {
    e.classList.toggle('down')
    e.classList.toggle('up')
    const $brother = e.nextElementSibling
    if (!$brother) return
    $brother.classList.toggle('expand')
}
