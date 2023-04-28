const $box = document.getElementById('box')
const $typeList = document.getElementById('type-list')

/********************************* 初始化定义变量 ******************************************/
/**
 * selectRow:       选择的哪些行假名
 * selectKanaType:  选择的哪种假名（平假名/片假名）
 * showWordList:    保存已显示的假名list（为了切换片假名）
 */
let selectRow = []
let selectKanaType = 'hiragana'
let showWordList = []

/********************************* 入口路径 ******************************************/
/**
 * 默认显示 a 行假名
 */
window.onload = () => {
    selectRow.push('a')
    createWords()
}

/********************************* 生成单词表 ******************************************/
function createWords () {
    if (!selectRow.length) {
        alert('请选择某一行假名')
        return
    }
    const wordList = kanaList.filter(item => selectRow.includes(item.row))
    const total = selectRow.length * 10
    const result = []
    showWordList = []
    for (let i = 0; i < total; i++) {
        const index = Math.ceil(Math.random() * wordList.length) - 1
        const item = wordList[index]
        showWordList.push(item)
        result.push(item[selectKanaType])
    }
    renderWords(result)
}

/********************************* 渲染单词 ******************************************/
function renderWords (list) {
    console.log(list)
}

/********************************* 切换行 ******************************************/
function handleSelectRow () {
    event.stopPropagation()
    event.preventDefault()
    const $target = event.target
    const { value } = $target.dataset || {}
    if (!value) return
    $target.classList.toggle('select')
}
function confirmSelectRow () {
    event.stopPropagation()
    event.preventDefault()
    const $rowList = $typeList.querySelectorAll('.select')
    if (!$rowList.length) {
        alert('请至少选择一行')
        return
    }
    selectRow = []
    $rowList.forEach($el => {
        const { value } = $el.dataset || {}
        selectRow.push(value)
    })
    createWords()
    closeMask()
}
// 关闭弹窗之后, 如果未确认则回退行的选择
function afterCloseMask () {
    const $rowList = $typeList.querySelectorAll('.item')
    $rowList.forEach($el => {
        const { value } = $el.dataset || {}
        selectRow.includes(value) ? $el.classList.add('select') : $el.classList.remove('select')
    })
}

/********************************* 切换假名类型 ******************************************/
function handleSelectKana () {
    const $target = event.target
    const { value } = $target.dataset || {}
    if (value === selectKanaType) return
    const $li = document.querySelectorAll('.kana-li')
    $li.forEach($el => $el.classList.remove('select'))
    $target.classList.add('select')
    selectKanaType = value
    if (!showWordList.length) return
    renderWords(showWordList.map(item => {
        return item[selectKanaType]
    }))
}

/********************************* 重置单词表 ******************************************/
function handleReset () {
    createWords()
}

/********************************* 清除单词表 ******************************************/
function handleClear () {
    selectRow = []
    const $li = document.querySelectorAll('.js-row')
    $li.forEach($el => $el.classList.remove('select'))
    showWordList = []
    $box.innerHTML = '请选择一行'
}
