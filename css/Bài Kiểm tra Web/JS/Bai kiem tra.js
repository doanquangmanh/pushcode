

function send() {
    var arr = document.getElementsByTagName('input');
    var name = arr[0].value;
    var  email = arr[1].value;
    var phone = arr[2].value;

    if( name == "" || email == "" || phone == "") {
        alert("hãy nhập lại các giá trị First and Last or Email or Phone");
        return;
    }

    if (isnan(phone)) {
        alert("nhập lại Number phone");
    }



}