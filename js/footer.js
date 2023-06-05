class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =

            `
      <footer class="py-4" >
      <div class="container">
          <div class="row">
              <div class="col-lg-6 mb-4 mb-lg-0">
                  <h4>導覽連結</h4>
                  <ul class="list-unstyled">
                      <li><a href="#" class="text">首頁</a></li>
                      <li><a href="#" class="text">產品</a></li>
                      <li><a href="#" class="text">關於我們</a></li>
                      <li><a href="#" class="text">聯絡我們</a></li>
                  </ul>
              </div>
              <div class="col-lg-6">
                  <h4>公司基本資料</h4>
                  <div class="row">
                      <div class="col-md-4">
                          <img src="images/coffe .png" alt="公司Logo" class="img">
                      </div>
                      <div >
                          <p>地址: 220新北市板橋區四川路二段58號</p>
                          <p>Email: info@mail.aeust.edu.tw</p>
                          <p>聯絡電話: +886 7738 8000</p>
                      </div>
                  </div>
              </div>
          </div>
          <hr>
          <div class="row">
              <div class="col-lg-6 mb-4 mb-lg-0">
                  <h4>社群連結</h4>
                  <ul class="list-unstyled">
                      <li><a href="#" class="text">Facebook</a></li>
                      <li><a href="#" class="text">Twitter</a></li>
                      <li><a href="#" class="text">Instagram</a></li>
                  </ul>
              </div>
              <div class="col-lg-6">
                  <h4>版權聲明</h4>
                  <p>Copyright © 2023 Example.com
              </div>
          </div>
          <h5 class="text-uppercase">信用卡支援</h5>
          <p style="font-size:xxx-large;">
          </li>
          <i class="fab fa-cc-visa"></i>
          <i class="fab fa-cc-mastercard"></i>
          <i class="fab fa-cc-amex"></i>
          <i class="fab fa-cc-discover"></i>
          <i class="fab fa-cc-jcb"></i>
          <i class="fab fa-cc-diners-club"></i>
          </li>
          </p>
      </div>
  </footer>
             
            
      `;

    }
}

customElements.define('my-footer', MyFooter)