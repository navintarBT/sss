const product = [
    {
        id: 3,
        image: 'image/ເຂົ້າໜຽວໝາກມ່ວງ.png',
        title: 'ເຂົ້າໜຽວໝາກມ່ວງ',
        price: 25,
    },
    {
        id: 14,
        image: 'image/ເຄັກ.png',
        title: 'ເຄັກ',
        price: 25,
    },
    {
        id: 15,
        image: 'image/ຊໍ.png',
        title: 'ໂຊກກໍແລດ',
        price: 22,
    },
    {
        id: 16,
        image: 'image/cookie.png',
        title: 'ຄຸກກີ້',
        price: 15,
    },
    {
        id: 16,
        image: 'image/cupcake1.png',
        title: 'ຄັບເຄັກ',
        price: 11,
    },
    {
        id: 18,
        image: 'image/ກະແລ້ມ.png',
        title: 'ກະແລ້ມ',
        price: 19,
    },

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ${price}.000 ກີບ</h2>`+
        "<button onclick='addtocart("+(i++)+")'>ກົດສັ່ງຊື້</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function validate() {

    var total = document.getElementById("cartItem").innerHTML;
    if (total == "Your cart is empty") {
        alert("ກະລຸນາເລືອກອາຫານຂອງທ່ານ. ຂອບໃຈ");
    } else 

    setTimeout(function() {
        swal({
                title: "ສຳເລັດ",
                text: "ຂອບໃຈ ທີ່ໃຊ້ບໍລິການ",
                type: "success", 
                timer: 2500, 
                showConfirmButton: false 
            }, function(){
                window.location = "https://anoulukk.github.io/waiting-page/"; 
                });
        });
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "";
        document.getElementById("total").innerHTML = "" + total + ".000 ກີບ";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = ""+total+".000 ກີບ";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>${price}.000 ກີບ</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}