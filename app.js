/* Paste Montserrat Google Fonts Link here*/


* {
	box-sizing: border-box;
}

body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}

h1 {
	font-weight: bold;
	margin: 0;
}
.header {
    font-weight: bold;
    margin: 0;
    font-size: 36px;
    color: #333; /* رنگ اصلی متن */
    padding-bottom: 5px; /* فاصله از پایین */
    position: relative; /* برای تنظیم خط زیرین */
  }
  
.header::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px; /* ضخامت خط */
    background-color: #3f5efb; /* رنگ خط */
    transition: width 0.3s ease; /* انیمیشن خط زیرین */
  }
.header.creat::after{
    background-color: #EC407A;
}
.header:hover::after {
    width: 100%; /* وقتی روی متن هاور می‌کنی، خط زیرین کامل میشه */
  }

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #3F5EFB;
	background-color: #3F5EFB;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in, background-color 1s ease-in-out, border 1s ease-in-out;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

.container.right-panel-active button {
	border: 1px solid #FC466B;
	background-color: #FC466B;
}

/* overlay button */
button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

.container.right-panel-active button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}


.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #3F5EFB;
	background: -webkit-linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);
	background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
    display: inline-block;
    margin: .25rem;
    padding: 10px 15px;
    border-radius: 40px;
    font-size: 16px;
    color: #1f242d;
    font-weight: 600;
    transition: 0.5s;
  }
  .social-container a:hover{
      background: transparent;
      box-shadow: none;
  }
  .facebook {
    background-color: transparent;
    color: #fff;
    border: 1px solid #D1C4E9;
    box-shadow: 0 0 10px #b7b5bd;
  
  }
  .social-container .facebook:hover{
      background: transparent;
      color: #204ef2;
      box-shadow: none;
  }
  
  .google {
    background-color: transparent;
    color: #fff;
    border: 1px solid #D1C4E9;
    box-shadow: 0 0 10px #b7b5bd;
  
  
  }
  .social-container .google:hover{
      background: transparent;
      color: #ee1414;
      box-shadow: none;
  }
  .linkedin {
    background-color: transparent;
    color: #fff;
    border: 1px solid #D1C4E9;
    box-shadow: 0 0 10px #b7b5bd;
  
  
  }
  .social-container .linkedin:hover{
      background: transparent;
      color: #ea8545;
      box-shadow: none;
  }

/* Paste Montserrat Google Fonts Link here*/

/* ... سایر استایل‌ها بدون تغییر باقی موندند ... */

@media screen and (max-width: 768px) {
    .container {
        width: 90%; /* عرض کانتینر رو به 90% تغییر دادم */
        height: auto; /* ارتفاع کانتینر به صورت خودکار تنظیم میشه */
    }

    .overlay-container {
        width: 100%; /* عرض overlay برای موبایل 100% میشه */
        height: 100%;
        left: 0; /* موقعیت overlay برای موبایل تغییر می‌کنه */
    }

    .form-container {
        width: 100%; /* عرض فرم‌ها رو به 100% تغییر دادم */
        padding: 0 20px; /* پدینگ فرم‌ها رو کمتر کردم */
    }

    .sign-in-container,
    .sign-up-container {
        width: 100%; /* عرض فرم‌های Sign In و Sign Up به 100% تغییر کرد */
        opacity: 1; /* شفافیت این دو بخش روی موبایل 1 میشه */
        z-index: 1; /* ترتیب لایه‌ها تغییر کرد */
        transform: translateX(0); /* این دو بخش به حالت عادی خودشون برمی‌گردن */
    }

    .overlay {
        width: 200%; /* عرض overlay روی موبایل به 200% تغییر کرد تا درست نمایش داده بشه */
        left: -50%; /* موقعیت overlay تنظیم شد */
        transform: translateX(0); /* به حالت اولیه برگشت */
    }

    .overlay-panel {
        width: 100%; /* عرض پنل‌ها رو 100% کردم */
        transform: translateX(0); /* تغییرات موقعیت‌ها برای ریسپانسیو شدن */
    }

    .social-container {
        margin: 15px 0; /* فاصله بین آیکون‌ها برای موبایل کمتر شد */
    }

    .social-container a {
        padding: 10px 12px; /* سایز آیکون‌ها رو کمی کوچکتر کردم */
        font-size: 14px; /* اندازه فونت آیکون‌ها کمی کوچکتر شد */
    }

    /* هدر برای موبایل کوچکتر میشه */
    .header {
        font-size: 28px; /* اندازه فونت هدر رو برای موبایل کاهش دادم */
    }

    input {
        padding: 10px; /* پدینگ فیلدهای ورودی رو کم کردم */
    }

    button {
        padding: 10px 25px; /* پدینگ دکمه‌ها برای موبایل تغییر کرد */
        font-size: 14px; /* اندازه فونت دکمه‌ها رو کمی افزایش دادم */
    }

    /* ریسپانسیو شدن برای دکمه‌ها */
    button.ghost {
        padding: 10px 30px; /* اندازه دکمه‌ها رو برای موبایل تغییر دادم */
    }
}
