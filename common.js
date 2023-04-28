const $mask = document.getElementById('mask-overlay')

function closeMask () {
    event.stopPropagation()
    event.preventDefault()
    $mask && $mask.classList.add('hide')
    afterCloseMask && afterCloseMask()
}

function openMask () {
    event.stopPropagation()
    event.preventDefault()
    $mask && $mask.classList.remove('hide')
}
