const $box = document.querySelector('#list-box')
const $searchInput = document.querySelector('#search-input')
let selectShowType = '1'

window.onload = () => {
    renderUrlList()
    document.querySelectorAll('.copy').forEach($el => {
        $el.addEventListener('click', event => {
            event.stopPropagation()
            event.preventDefault()
            const { url } = event.currentTarget.dataset
            if (!url) return
            const $copyInput = document.createElement('input')
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
            }, 600)
        })
    })
}

function renderUrlList () {
    let result = ''
    const value = $searchInput.value
    const renderList = value.trim() ? urlList.filter(item => {
        const { title, url, introduction, desc } = item
        return title.includes(value) || url.includes(value) || introduction.includes(value) || desc.includes(value)
    }) : urlList
    renderList.forEach((item, index) => {
        const { introduction, url } = item
        result += `<div class="list-item">
            <span class="serial">${index + 1}.</span>
            <a href="${url}" target="_blank" class="link">【${introduction}】</a>
            <svg class="icon copy" data-url="${url}" aria-hidden="true">
                <use xlink:href="#icon-fuzhi"></use>
            </svg>
        </div>`
    })
    $box.innerHTML = result
}

function handleKeydown () {
    if (event.keyCode === 13) {
        renderUrlList()
    }
}

function handleChange () {
    const { value: type } = event.target.dataset
    selectShowType = type
    changeIcon()
    renderUrlList()
}

function changeIcon () {
    const $iconA = document.querySelector('#block-icon')
    const $iconB = document.querySelector('#bar-icon')
    if (selectShowType === '1') {
        $iconA.classList.add('hide')
        $iconB.classList.remove('hide')
    } else {
        $iconA.classList.remove('hide')
        $iconB.classList.add('hide')
    }
}
