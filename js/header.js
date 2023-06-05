class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <header>

    <ul class="nav_sub">
        <div class="center"><img src="images/coffe .png" class="li">
            <div class="right-bar">
                <li class="nav_sub">
                <a href="login.html"><i class="fas fa-user me-1"></i>會員</a>
                </li>
                <li class="nav_sub">
                     <i class="fas fa-envelope me-1"></i>信箱
                </li>
                <li class="nav_sub"> <a href="register.html"> <i class="fas fa-user-circle me-1"></i>註冊</a></li>
                <li class="nav_sub"> <i class="fab fa-facebook-f me-1"></i>Facebook</li>
            </div>
        </div>
    </ul>
    <nav class="navbar navbar-expand-md ">
        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                style="position: fixed; right: 16px; top: 13px;z-index: 999;">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html"><i class="fa-solid fa-house"></i>首頁</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="commodity-page.html"><i class="fa-solid fa-mug-saucer"></i>商品</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-truck-ramp-box"></i>商品分類
                        </a>
                        <ul class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="commodity.html">阿拉比咖啡</a></li>
                            <li><a class="dropdown-item" href="commodity.html">阿拉比咖啡</a></li>
                            <li><a class="dropdown-item" href="commodity.html">阿拉比咖啡</a></li>
                        </ul>
                    </li>
                
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa-solid fa-blog"></i>部落格</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="login.html"><i class="fa-solid fa-circle-user"></i>關於我們</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#checkoutModal"><i class="fa-solid fa-cart-shopping"></i><span class="badge bg-danger rounded-pill cart-count" style="font-family: sans-serif;"></span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="login.html" ><i class="fas fa-user me-1"></i></a>
                  </li>
                </ul>
                <div class="modal fade" id="checkoutModal" tabindex="-1" aria-labelledby="checkoutModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="checkoutModalLabel">購物車結帳</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr style="text-align: center;">
                              <th scope="col">商品圖</th>
                              <th scope="col">商品名稱</th>
                              <th scope="col">數量</th>
                              <th scope="col">單價</th>
                              <th scope="col">總金額</th>
                              <th scope="col">刪除商品</th>
                            </tr>
                          </thead>
                          <tbody class="cart-list" style="vertical-align: baseline; text-align: center;"></tbody>
                        </table>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <h5 class="card-title">數量: <span class="badge  rounded-pill cart-count">$0</span></h5>
                        <h5 class="card-title">總金額: <span class="total-amount">$0</span></h5>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                      <a href="checkout.html"><button type="button" class="btn btn-primary">確認結帳</button></a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              
            </div>
        </div>
    </nav>
</header>
      `;
  }
}

customElements.define('my-header', MyHeader)

// 定义购物车对象
var cart = JSON.parse(localStorage.getItem('cart')) || {};

// 添加到购物车按钮的点击事件处理程序
$('.add-to-cart').click(function () {
  var image = $(this).data('image');
  var id = $(this).data('id');
  var price = $(this).data('price');
  var quantity = $('#quantity').val(); // 获取输入的数量
  var size = $('#size').val();
  // 获取选择的尺寸
  addToCart(image, id, price, quantity, size); // 将尺寸作为第四个参数传递给addToCart函数
});

// 添加商品到购物车
function addToCart(image, id, price, quantity, size) {
  var quantity = $('#quantity').val(); // retrieve quantity value from input field
  var newItemId = id + '-' + size; // combine id and size to form new item id
  if (cart[newItemId]) {
    // 如果购物车中已经有该商品，则增加其数量和总价
    cart[newItemId].quantity += parseInt(quantity); // convert quantity to integer and add to existing quantity
    cart[newItemId].total = cart[newItemId].quantity * price;
  } else {
    // 否则，将商品添加到购物车
    cart[newItemId] = {
      quantity: parseInt(quantity), // convert quantity to integer
      price: price,
      total: price * parseInt(quantity),
      image: image,
      size: size
    };
  }

  saveCart(); // 保存购物车到 localStorage

  updateCart();
}

// 更新购物车内容和总金额
function updateCart() {
  var cartList = $('.cart-list');
  var totalAmount = 0;
  var totalQuantity = 0;
  cartList.empty();
  for (var id in cart) {
    var item = cart[id];
    var html =
      '<tr>' +
      '<td><img src="' + item.image + '" style="max-width: 50px;"></td>' +
      '<td><a class="com">' + id + '</a></td>' +
      '<td><button   class="btn btn-light decrease-quantity" data-id="' + id + '">-</button>' +
      '<span class="quantity" >' + item.quantity + '</span>' +
      '<button  " class="btn btn-light increase-quantity" data-id="' + id + '">+</button>' +
      '</td>' +
      '<td>$' + item.price + '</td>' +
      '<td>$' + item.total + '</td>' +
      '<td><button class="btn btn-danger delete-item" data-id="' + id + '"><i class="bi bi-trash"></i></button></td>' +
      '</tr>';

    cartList.append(html);
    totalAmount += item.total;
    totalQuantity += item.quantity;
  }
  $('.total-amount').text('$' + totalAmount.toLocaleString());
  $('.cart-count').text(totalQuantity);

  // ...


}

// 删除商品按钮的点击事件处理程序
$('.cart-list').on('click', '.delete-item', function () {
  var id = $(this).data('id');
  deleteItem(id);
});

// 删除商品
function deleteItem(id) {
  delete cart[id];
  saveCart();
  updateCart();
}

// 增加商品数量按钮的点击事件处理程序
$('.cart-list').on('click', '.increase-quantity', function () {
  var id = $(this).data('id');
  increaseQuantity(id);
});

// 增加商品数量
function increaseQuantity(id) {
  cart[id].quantity++;
  cart[id].total = cart[id].quantity * cart[id].price;
  saveCart();
  updateCart();
}

// 减少商品数量按钮的点击事件处理程序
$('.cart-list').on('click', '.decrease-quantity', function () {
  var id = $(this).data('id');
  decreaseQuantity(id);
});

// 减少商品数量
function decreaseQuantity(id) {
  if (cart[id].quantity > 1) {
    cart[id].quantity--;
    cart[id].total = cart[id].quantity * cart[id].price;
  } else {
    delete cart[id]; // 如果数量为1，则从购物车中删除商品
  }
  saveCart(); // 保存购物车到 localStorage
  updateCart();
}

// 保存购物车到 localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// 初始化购物车
updateCart();





