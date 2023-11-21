let result = 0;
function count(a) {

    if(a == '+'){
        result++;
        document.getElementById('result').innerHTML=result;
    }else{
        result--;
        document.getElementById('result').innerHTML=result;
        if(result<0){
            result = 0;
            document.getElementById('result').innerHTML=result;
        }
    }
    
}