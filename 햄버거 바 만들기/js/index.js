// 햄버거 바 아이콘 선택
const menuOpenEl = document.getElementById('btn--open')
// 닫는 아이콘 선택
const menuCloseEl = document.getElementById('btn--close')
// 사이드 네비 선택
const sideMenuEl = document.getElementById('side__menu')

// 햄버거 바 아이콘에 클릭 이벤트 발생
menuOpenEl.addEventListener("click", function(){
    // 햄버거 바 아이콘을 보이지 않게 처리
    menuOpenEl.style.display='none'
    // 닫는 아이콘은 보이게
    menuCloseEl.style.display='block'
    // 사이드 네비 보이게
    sideMenuEl.style.transform = 'translateX(0%)'
})

// 닫는 아이콘에 클릭 이벤트 발생
menuCloseEl.addEventListener("click", function(){
    //햄버거 바 아이콘 보이게 처리
    menuOpenEl.style.display = 'block'
    // 닫는 아이콘 보이지 않게 처리
    menuCloseEl.style.display = 'none'
    // 사이드 메뉴 보이지 않게
    sideMenuEl.style.transform = 'translateX(-100%)'
})


