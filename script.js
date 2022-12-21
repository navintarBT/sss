const product = [
    {
        id: 0,
        image: 'image/ຂະໜົມປັງທູນ້າ.png',
        title: 'ແຊນວີດທູນ້າ',
        price: 30,
    },
    {
        id: 1,
        image: 'image/ອາຫານຄີນ.png',
        title: 'ອາຫານຄີນ',
        price: 60,
    },
    {
        id: 2,
        image: 'image/ສະເຕັກເນື້ອ.png',
        title: 'ສະເຕັກເນື້ອ',
        price: 75,
    },
    {
        id: 3,
        image: 'image/ເຂົ້າໜຽວໝາກມ່ວງ.png',
        title: 'ເຂົ້າໜຽວໝາກມ່ວງ',
        price: 25,
    },
    {
        id: 4,
        image: 'image/ລາຊັນຍ້າ2.png',
        title: 'ຊາລັນຍ້າ',
        price: 55,
    },
    {
        id: 5,
        image: 'image/ເບີເກີ້.png',
        title: 'ເບີເກີ້',
        price: 35,
    },
    {
        id: 3,
        image: 'image/ມິກເບີລີ້ເຟນໂທສ.png',
        title: 'ມິກເບີລີ້ເຟນໂທສ',
        price: 65,
    },
    {
        id: 6,
        image: 'image/ສະປາເກັດຕີ້.png',
        title: 'ສະປາເກັດຕີ້',
        price: 35,
    }
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
    if (total == "ລາຍການສີນຄ້າສັ່ງຊື້") {
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
        document.getElementById('cartItem').innerHTML = "ລາຍການສີນຄ້າສັ່ງຊື້";
        document.getElementById("total").innerHTML = "ກີບ "+0+".000";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "" + total + ".000 ກີບ";
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