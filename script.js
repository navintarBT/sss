const product = [
    {
        id: 0,
        image: 'image/ຂະໜົມປັງທູນ້າ.png',
        title: 'ແຊນວີດທູນ້າ',
        price: 30000,
    },
    {
        id: 1,
        image: 'image/ອາຫານຄີນ.png',
        title: 'ອາຫານຄີນ',
        price: 60000,
    },
    {
        id: 2,
        image: 'image/ສະເຕັກເນື້ອ.png',
        title: 'ສະເຕັກເນື້ອ',
        price: 75000,
    },
    {
        id: 3,
        image: 'image/ເຂົ້າໜຽວໝາກມ່ວງ.png',
        title: 'ເຂົ້າໜຽວໝາກມ່ວງ',
        price: 25000,
    },
    {
        id: 4,
        image: 'image/ລາຊັນຍ້າ2.png',
        title: 'ຊາລັນຍ້າ',
        price: 55000,
    },
    {
        id: 5,
        image: 'image/ເບີເກີ້.png',
        title: 'ເບີເກີ້',
        price: 35000,
    },
    {
        id: 3,
        image: 'image/ມິກເບີລີ້ເຟນໂທສ.png',
        title: 'ມິກເບີລີ້ເຟນໂທສ',
        price: 65000,
    },
    {
        id: 6,
        image: 'image/ສະປາເກັດຕີ້.png',
        title: 'ສະປາເກັດຕີ້',
        price: 35000,
    },
    {
        id: 20,
        image: 'image/ສະຫຼັດ.png',
        title: 'ສະຫຼັດ',
        price: 19000,
    },
    {
        id: 8,
        image: 'image/ຊາລັນຢ່າ.png',
        title: 'ຊາລັນຢ່າ',
        price: 45000,
    },
    {
        id: 19,
        image: 'image/ກຸ້ງ.png',
        title: 'ກຸ້ງມັງກອນທະເລເຜົາ',
        price: 45000,
    },
    {
        id: 7,
        image: 'image/ກາເຟ.png',
        title: 'ກາເຟ',
        price: 15000,
    },
    {
        id: 9,
        image: 'image/ຊາຂຽວ.png',
        title: 'ຊາຂຽວ',
        price: 20000,
    },
    {
        id: 10,
        image: 'image/ນາວ.png',
        title: 'ຊາໝາກນາວ',
        price: 20000,
    },
    {
        id: 11,
        image: 'image/pepsi.png',
        title: 'ເປບຊີ',
        price: 5000,
    },
    {
        id: 12,
        image: 'image/oishi.png',
        title: 'ໂອອິຊິ',
        price: 10000,
    },
    {
        id: 13,
        image: 'image/sting.png',
        title: 'ສະຕິງ',
        price: 7000,
    },
    {
        id: 14,
        image: 'image/ເຄັກ.png',
        title: 'ເຄັກ',
        price: 25000,
    },
    {
        id: 15,
        image: 'image/ຊໍ.png',
        title: 'ໂຊກກໍແລດ',
        price: 22000,
    },
    {
        id: 16,
        image: 'image/cookie.png',
        title: 'ຄຸກກີ້',
        price: 15000,
    },
    {
        id: 16,
        image: 'image/cupcake1.png',
        title: 'ຄັບເຄັກ',
        price: 11000,
    },
    {
        id: 18,
        image: 'image/ກະແລ້ມ.png',
        title: 'ກະແລ້ມ',
        price: 19000,
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
        <h2> ${price}ກີບ</h2>`+
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
                window.location = "https://navintarbt.github.io/sss/"; 
                });
        });
        


    
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "ກີບ "+0+".000";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = ""+total+"ກີບ";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'> ${price}ກີບ</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}