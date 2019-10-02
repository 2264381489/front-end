/* www.zhinengshe.com */

var sNum1='';
var sOpr='';

var bNeedClear=false;	//是否需要清除输入框中已有的内容

function calc(iNum1, iNum2, sOpr)
{
	var iResult=0;
	switch(sOpr)
	{
		case '×':
			iResult=iNum1*iNum2;
			break;
		case '+':
			iResult=iNum1+iNum2;
			break;
		case '-':
			iResult=iNum1-iNum2;
			break;
		case '÷':
			iResult=iNum1/iNum2;
			break;
		default:
			iResult=iNum2;
	}
	
	return iResult;
}
//算数模块
function doInput()
{
	var oInput=document.getElementById('input1');
	var sHtml=this.innerHTML;//innerHTML是从目标标签中从开始标记<div到结束标记之间的所有内容.replace(' ','')
	//这个this指的是li，写着数字的东西。用这种方式来获取上面的数字以及符号。
	//取得内容模块
	switch(sHtml)
	{
		case '='://等于比较特殊，因为真正的运算实际上是发生在等于的时候
			oInput.value=calc(parseInt(sNum1), parseInt(oInput.value), sOpr);
			
			sNum1='';
			sOpr='';
			bNeedClear=true;//因为无法覆盖，所以每次操作之后都要进行bNeed的清除操作，把之前的内容清除掉
			break;
		case '+':
		case '-':
		case '×':
		case '÷':
			bNeedClear=true;
			
			if(sNum1.length!=0)
			{
				oInput.value=calc(parseInt(sNum1), parseInt(oInput.value), sOpr);
			}
			
			sOpr=sHtml;//提取出的符号？
			
			sNum1=oInput.value;//这个东西能提出input中的数字吗？要是不是第一个sunm会有数字
			break;
		case 'C':
			oInput.value='0';
			sNum1='';
			sOpr='';
			break;
		default:	//数字
			if(bNeedClear)
			{
				oInput.value=parseInt(sHtml, 10);
				bNeedClear=false;
			}
			else
			{
				oInput.value=parseInt(oInput.value+sHtml, 10);
			}
			break;
	}
}//模拟计算器行为模块

window.onload=function ()
{
	var aLi=document.getElementsByTagName('li');
	var i=0;
	//这里就是将底下的方块和上面的输入框连起来的地方用parseint这个东西
	for(i=0;i<aLi.length;i++)
	{
		aLi[i].onmousedown=doInput;
		aLi[i].onmouseover=function ()
		{
			this.className='active';
		};
		
		aLi[i].onmouseout=function ()
		{
			this.className='';
		};
	}//执行模块
	(function (){
		var oS=document.createElement('script');
			
		oS.type='text/javascript';
		oS.src='http://www.zhinengshe.com/zpi/zns_demo.php?id=3522';
			
		document.body.appendChild(oS);
	})();
};