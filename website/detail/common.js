window.onload = () => {
    document.querySelector('.copy-icon').addEventListener('click', event => {
        event.stopPropagation()
        event.preventDefault()
        const { url } = event.currentTarget.dataset
        if (!url) return
        const $copyInput = document.createElement('input')
        $copyInput.readOnly = true
        $copyInput.style.position = 'absolute'
        $copyInput.style.top = '-10000px'
        $copyInput.value = url
        document.body.appendChild($copyInput)
        $copyInput.select()
        document.execCommand('copy')
        openMask()
        setTimeout(() => {
            closeMask()
            $copyInput.remove()
        }, 500)
    })
}
