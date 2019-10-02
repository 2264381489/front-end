var sNum1='';//设置一个用来中转的数据
var sOpr='';//设置一个用来存储符号的变量
var reflesh=false;//用来表示刷新的
//制作运算控制器
function suan(iNum1,iNum2,s0p1) {
    var iReault=0;
    switch (sOpr) {
        case '+':
           iNum1=iNum1+iNum2;
           break;
        case '-':
            iReault=iNum1-iNum2;
            break;
        case "×":
            iReault=iNum1*iNum2;
            break;
        case "÷":
            iReault=iNum1/iNum2;
            break;

    }
  return iReault;

}
