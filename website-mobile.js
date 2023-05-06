const $box = document.querySelector('#list-box')

window.onload = () => {
    renderUrlList()
}

function renderUrlList () {
    let result = ''
    urlList.forEach((item, index) => {
        const { introduction, url } = item
        result += `<div class="list-item">
            <span class="serial">${index + 1}.</span>
            <a href="${url}" target="_blank">【${introduction}】</a>
            <a href="javascript:;" class="more">(详细)</a>
        </div>`
    })
    $box.innerHTML = result
}
