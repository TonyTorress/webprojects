//let pw = '';
function crypto(){
     let pw = document.getElementById("input").value;
    if(pw == ""|| pw == null || pw.length==0){
        alert("error");
        alert("please try again");
        document.getElementById("input").focus();
    }else{
        document.getElementById("output").innerHTML = pw;

        var message="hello Tony ";

        var ciphertext = CryptoJS.AES.encrypt(message,pw).toString();
        document.getElementById("aes").innerHTML = ciphertext;

        var sha1 = CryptoJS.SHA1(pw);
        document.getElementById("sha1").innerHTML = sha1;

        var sha3 = CryptoJS.SHA3(pw);
        document.getElementById("sha3").innerHTML = sha3;

        var sha256 = CryptoJS.SHA224(pw);
        document.getElementById("sha224").innerHTML = sha256;

    }

}

function d2b(){
    let num = parseFloat(document.getElementById("num").value);

    if(num == null || num.valueOf() <= 0 || isNaN(num)){
        alert("enter valid number");
        document.getElementById("num").focus();
    }else{
        let bin = '';
        let ans='';
        while(num >=1){
            bin+=num%2;
            num = Math.floor(num/2);
        }
        for (var i = bin.length - 1; i >= 0; i--) {
            ans += bin[i];
        }
        document.getElementById("ans").innerHTML = ans.toString();
    }
}
function b2d(){
    let num = document.getElementById("bin").value;

    if(num == null || num.valueOf() <= 0 || isNaN(num)||num.substr(1)==0){
        alert("enter valid number");

        document.getElementById("bin").focus();
    }else{
        let sum=0;
        let l = num.length;
        let exp = l-1;
        let value;
        for(let i =0;i<l;i++){
            value = (num.charAt(i));
            sum+=value*Math.pow(2,exp);
            exp-=1;
        }
        document.getElementById('answer').innerHTML= sum.toString();
    }
}