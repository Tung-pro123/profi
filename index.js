// cách để lấy một phần tử khai báo biến và dùng cú pháp như dưới kèm theo cái id(class,...) mà bạn đặt cho phần tử bạn muốn lấy
// ở dưới là title
// const title = document.getElementById("title");
// console.log(title);
//--------------------------------------------------



// Cách để thay đổi nội dung ở trong HTML mà bạn lấy trực tiếp thông qua js luôn. Cú Pháp như dưới
// title.innerHTML="JavaScript tới chơi";

// const description = document.getElementById("description");
// title.addEventListener("click",() =>{
//     description.innerHTML="HEHE";

// } );

// or cách 2
// title.addEventListener("click",changeTitle);

// function changeTitle(){
//     title.innerHTML="HeHe";
// }
//-------------------------------------------------------------------------------
const menuToggle= document.getElementById("menu-toggle");
console.log(menuToggle);

// cái mục ngoặc kép đầu tiên là events(click,keydown,...)
menuToggle.addEventListener("click" , function (){


});

/*
Note: lý do mà link js luôn luôn để cuối là bởi vì nên cho tk terminal nó đọc hết html rồi mới vào js để đọc nếu như
nó sẽ tránh đc cái việc thiếu thông tin hoặc mất thông tin html. Bởi vì một số TH link js đặt trc một số html và
khi nhảy vô đọc link js thì lại ko thể tìm đc html mà chúng ta muốn làm việc ==> dẫn tới lỗi CT
*/
// CHÍNH VÌ THẾ VẪN CÓ 1 HÀM GIÚP XỬ LÍ TRƯỜNG HỢP NÀY
document.addEventListener("DOMContentLoaded", function(){
    const menuToggle= document.getElementById("menu-toggle");
    const mobileNav= document.getElementById("mobile-nav");
    const barsIcon= document.getElementById("bars-icon");
    const closeIcon= document.getElementById("close-icon");
    console.log(menuToggle);

    menuToggle.addEventListener("click", function(){

        mobileNav.classList.toggle("active");
        
        if(mobileNav.classList.contains("active")){
            // đã bấm vào bars icon => Ẩn BarsIcon và hiện CloseIcon 
            barsIcon.style.display ="none";
            closeIcon.style.display="block";

        }else{
            barsIcon.style.display ="block";
            closeIcon.style.display="none";            
        }




    });
});
