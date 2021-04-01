// 햄버거 바 아이콘 선택
const menuOpenEl = document.getElementById('btn--open')
// 닫는 아이콘 선택
const menuCloseEl = document.getElementById('btn--close')

// 햄버거 바 아이콘에 클릭 이벤트 발생
menuOpenEl.addEventListener("click", function(){
    // 햄버거 바 아이콘을 보이지 않게 처리
    menuOpenEl.style.display='none'
    // 닫는 아이콘은 보이게
    menuCloseEl.style.display='block'
})

// 닫는 아이콘에 클릭 이벤트 발생
menuCloseEl.addEventListener("click",function(){
    //닫는 아이콘을 보이지 않게 처리
    menuCloseEl.style.display='none'
    // 햄버거 바 아이콘을 보이게 처리 
    menuOpenEl.style.display='block'
})
