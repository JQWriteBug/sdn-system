
Ext.require(['Ext.data.*']);

//***********************全局变量*********************

var AttackClass=["UnknownAttack","SlackerAttack","Misoperation","PortAttack",
			  "ZeroDayAttack","HardwareFault","TrojanHorseVirus","DosAttack"];
			  
//获取到的所有异常数据
var AttackData=[];
var AttackDataNextMonth=[];

//具体全年变化的未知攻击异常数据：1月~12月，每种攻击的第一个为初始化值
var UnknownAttack	=[10,20,22,30,50,20,24,10,30,35,40,32];
var SlackerAttack	=[15,44,11,45,40,41,46,10,35,10,18,10];
var Misoperation    =[18,20,55,40,22,20,24,57,24,60,52,22];
var PortAttack      =[10,55,22,54,50,42,50,10,42,44,10,66];
var ZeroDayAttack	=[22,11,10,44,44,45,24,53,10,10,41,10];
var HardwareFault	=[10,7,22,42,22,20,42,25,10,42,10,41];
var TrojanHorseVirus=[22,20,10,30,4,45,24,10,25,44,62,50];
var DosAttack		=[10,20,22,45,22,20,24,10,25,10,90,10];

var DangerIndexData;//第一个仪表盘威胁指数
var DangerIndexForecast;//第二个仪表盘威胁指数

//雷达数据处理
Ext.onReady(function() {

var Index =//宏定义
{
   'UnknownAttack':0,
   'SlackerAttack':1,
   'Misoperation':2,
   'PortAttack':3,
   'ZeroDayAttack':4,
   'HardwareFault':5,
   'TrojanHorseVirus':6,
   'DosAttack':7,
};

var dataTemp = 0,i=0,j;
					
    window.generateDataRadar = function(n, floor) {
		//点击对应月份按钮，执行js里面的函数，再跳到此处
		
        var data = [],
            p = (Math.random() * 11) + 1;
        var	ExchangeTemp=0,temp=0;//temp排序用
		var AttackDataTemp=[0,0,0,0,0,0,0,0];//用来存放排序后的数据
        var UserName=["未知攻击","懒虫攻击","用户误操作","端口扫描攻击",
			             "零日攻击","硬件故障","木马病毒","Dos攻击"];
        	  
if(Month<12)//切换8种不同攻击，对应每月数据		
{
	for(j=0;j<8;j++)//由点击的按钮进行触发
	{
		if(j==0)//j=0对应于Index中的第一个攻击，即UnknownAttack
		{	
			AttackData[j]=UnknownAttack[Month];//Month==0时，就是1月份
			//即点击按钮时，会首先跳到Js里面，若点击“1月”，则Month=0
			AttackDataNextMonth[j]=UnknownAttack[(Month+1)%12];
		}
		else if(j==1)//j=1对应于Index中的第二个攻击，即SlackerAttack
		{
			AttackData[j]=SlackerAttack[Month];
			AttackDataNextMonth[j]=SlackerAttack[(Month+1)%12];
		}
		else if(j==2)
		{
			AttackData[j]=Misoperation[Month];
			AttackDataNextMonth[j]=Misoperation[(Month+1)%12];
		}
		else if(j==3)
		{
			AttackData[j]=PortAttack[Month];
			AttackDataNextMonth[j]=PortAttack[(Month+1)%12];
		}
		else if(j==4)
		{
			AttackData[j]=ZeroDayAttack[Month];
			AttackDataNextMonth[j]=ZeroDayAttack[(Month+1)%12];
		}
		else if(j==5)
		{
			AttackData[j]=HardwareFault[Month];
			AttackDataNextMonth[j]=HardwareFault[(Month+1)%12];
		}
		else if(j==6)
		{
			AttackData[j]=TrojanHorseVirus[Month];
			AttackDataNextMonth[j]=TrojanHorseVirus[(Month+1)%12];
		}
		else if(j==7)
		{
			AttackData[j]=DosAttack[Month];
			AttackDataNextMonth[j]=DosAttack[(Month+1)%12];
		}
	}
}
		
		
        for (i = 0; i < 8; i++) {//雷达图中一条线上的八个点，即8种攻击
            if (i == 0)
			{
				dataTemp=AttackData[Index.UnknownAttack];
			}  
			 if (i == 1)
			{
				dataTemp=AttackData[Index.SlackerAttack];
			}
             else if (i == 2)
			{
                dataTemp = AttackData[Index.Misoperation];
			}
            else if (i == 3)
			{
                dataTemp = AttackData[Index.PortAttack];
			}
            else if (i == 4)
			{
                dataTemp = AttackData[Index.ZeroDayAttack];
			}
            else if (i == 5)
			{
                dataTemp = AttackData[Index.HardwareFault];
			}
            else if (i == 6)
			{
                dataTemp = AttackData[Index.TrojanHorseVirus];
			}
            else if (i == 7)
			{
                dataTemp = AttackData[Index.DosAttack];
			}
		
	
            for( temp=0;temp<8;temp++)
			{
			  AttackDataTemp[temp]=AttackData[temp];//备份攻击数据
			} 
		
		for( temp=0;temp<8;temp++)//排序
		{
			if(AttackDataTemp[temp] > AttackDataTemp[temp+1])//本月数据交换
			{
				ExchangeTemp=AttackDataTemp[temp+1];
				AttackDataTemp[temp+1]=AttackDataTemp[temp];
				AttackDataTemp[temp]=ExchangeTemp;
			}
		} 
			DangerIndexData=AttackDataTemp[7];//排序之后，最后面数字是最大值
		
		 
		  for( temp=0;temp<8;temp++)
		 {
			 if(AttackDataNextMonth[temp] > AttackDataNextMonth[temp+1])//下月数据交换
			 {
				 ExchangeTemp=AttackDataNextMonth[temp+1];
				 AttackDataNextMonth[temp+1]=AttackDataNextMonth[temp];
				 AttackDataNextMonth[temp]=ExchangeTemp;
			 }
		 }
		 DangerIndexForecast=(AttackDataNextMonth[7]+AttackDataTemp[7]);
		 
		 if(DangerIndexForecast%2!=0)//奇数
		 {
			 DangerIndexForecast=DangerIndexForecast-1;
		 }
		 DangerIndexForecast=DangerIndexForecast/2;

            data.push({

                name: UserName[i % 8],
                // name: Ext.Date.monthNames[i % 12],
                data1: dataTemp,//雷达图中一条线上的八个点
				data2: 60,//紫色警戒线
				data3: 100,//青色警戒线
				
				DangerIndexForecast: DangerIndexForecast,//左边相当于一个字符，右边是变量
                DangerIndex: DangerIndexData
				 
            });
        }//for循环结束
		
        return data;//返回push里面的所有值
    };
    
    window.storeRadar = Ext.create('Ext.data.JsonStore', {//开辟存储空间，创建数据库
        fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5', 
		'data6', 'data7', 'DangerIndexForecast', 'DangerIndex'],
        data: generateDataRadar()//将经过函数处理得到的data传送给store里面的data
    });
   

//曲线数据
    window.generateData = function(n, floor) {
        var data = [],
            p = (Math.random() * 11) + 1,i;
		
        var dataTemp = 0,dataTemp2=0,dataTemp3=0,dataTemp4=0,
		    dataTemp5=0,dataTemp6=0,dataTemp7=0,dataTemp8=0;//对应于8种攻击
		
        var UserName = ["1月", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11","12"];//横坐标
      
        for (i = 0; i < 12; i++) {
              if (i == 0)
			{
				dataTemp=UnknownAttack[0];
				dataTemp2= SlackerAttack[0];
				dataTemp3=Misoperation[0];				
				dataTemp4=PortAttack[0];				
				dataTemp5=ZeroDayAttack[0];				
				dataTemp6=HardwareFault[0];				
				dataTemp7=TrojanHorseVirus[0];				
				dataTemp8=DosAttack[0];				
				
			}  
			if (i == 1)
			{
				dataTemp=UnknownAttack[1];
				dataTemp2= SlackerAttack[1];
				dataTemp3=Misoperation[1];				
				dataTemp4=PortAttack[1];				
				dataTemp5=ZeroDayAttack[1];				
				dataTemp6=HardwareFault[1];				
				dataTemp7=TrojanHorseVirus[1];				
				dataTemp8=DosAttack[1];
			}
             else if (i == 2)
			{
                dataTemp=UnknownAttack[2];
				dataTemp2= SlackerAttack[2];
				dataTemp3=Misoperation[2];				
				dataTemp4=PortAttack[2];				
				dataTemp5=ZeroDayAttack[2];				
				dataTemp6=HardwareFault[2];				
				dataTemp7=TrojanHorseVirus[2];				
				dataTemp8=DosAttack[2];
			}
            else if (i == 3)
			{
                dataTemp=UnknownAttack[3];
				dataTemp2= SlackerAttack[3];
				dataTemp3=Misoperation[3];				
				dataTemp4=PortAttack[3];				
				dataTemp5=ZeroDayAttack[3];				
				dataTemp6=HardwareFault[3];				
				dataTemp7=TrojanHorseVirus[3];				
				dataTemp8=DosAttack[3];
			}
            else if (i == 4)
			{
                dataTemp=UnknownAttack[4];
				dataTemp2= SlackerAttack[4];
				dataTemp3=Misoperation[4];				
				dataTemp4=PortAttack[4];				
				dataTemp5=ZeroDayAttack[4];				
				dataTemp6=HardwareFault[4];				
				dataTemp7=TrojanHorseVirus[4];				
				dataTemp8=DosAttack[4];
			}
            else if (i == 5)
			{
                dataTemp=UnknownAttack[5];
				dataTemp2= SlackerAttack[5];
				dataTemp3=Misoperation[5];				
				dataTemp4=PortAttack[5];				
				dataTemp5=ZeroDayAttack[5];				
				dataTemp6=HardwareFault[5];				
				dataTemp7=TrojanHorseVirus[5];				
				dataTemp8=DosAttack[5];
			}
            else if (i == 6)
			{
                dataTemp=UnknownAttack[6];
				dataTemp2= SlackerAttack[6];
				dataTemp3=Misoperation[6];				
				dataTemp4=PortAttack[6];				
				dataTemp5=ZeroDayAttack[6];				
				dataTemp6=HardwareFault[6];				
				dataTemp7=TrojanHorseVirus[6];				
				dataTemp8=DosAttack[6];
			}
            else if (i == 7)
			{
                dataTemp=UnknownAttack[7];
				dataTemp2= SlackerAttack[7];
				dataTemp3=Misoperation[7];				
				dataTemp4=PortAttack[7];				
				dataTemp5=ZeroDayAttack[7];				
				dataTemp6=HardwareFault[7];				
				dataTemp7=TrojanHorseVirus[7];				
				dataTemp8=DosAttack[7];
			}
            else if (i == 8)
			{
                dataTemp=UnknownAttack[8];
				dataTemp2= SlackerAttack[8];
				dataTemp3=Misoperation[8];				
				dataTemp4=PortAttack[8];				
				dataTemp5=ZeroDayAttack[8];				
				dataTemp6=HardwareFault[8];				
				dataTemp7=TrojanHorseVirus[8];				
				dataTemp8=DosAttack[8];
			}
			else if (i == 9)
			{
                dataTemp=UnknownAttack[9];
				dataTemp2= SlackerAttack[9];
				dataTemp3=Misoperation[9];				
				dataTemp4=PortAttack[9];				
				dataTemp5=ZeroDayAttack[9];				
				dataTemp6=HardwareFault[9];				
				dataTemp7=TrojanHorseVirus[9];				
				dataTemp8=DosAttack[9];
			}
			else if (i == 10)
			{
                dataTemp=UnknownAttack[10];
				dataTemp2= SlackerAttack[10];
				dataTemp3=Misoperation[10];				
				dataTemp4=PortAttack[10];				
				dataTemp5=ZeroDayAttack[10];				
				dataTemp6=HardwareFault[10];				
				dataTemp7=TrojanHorseVirus[10];				
				dataTemp8=DosAttack[10];
			}
			else if (i == 11)
			{
                dataTemp=UnknownAttack[11];
				dataTemp2= SlackerAttack[11];
				dataTemp3=Misoperation[11];				
				dataTemp4=PortAttack[11];				
				dataTemp5=ZeroDayAttack[11];				
				dataTemp6=HardwareFault[11];				
				dataTemp7=TrojanHorseVirus[11];				
				dataTemp8=DosAttack[11];
			}
			
            data.push({

                name: UserName[i % 12],
                
                未知攻击: dataTemp,
                懒虫攻击: dataTemp2,
                用户误操作:dataTemp3,
                端口扫描攻击:dataTemp4,
				零日攻击:dataTemp5,
				硬件故障:dataTemp6,
				木马病毒:dataTemp7,
                Dos攻击:dataTemp8,
                
            });
        }
		 
        return data;
    };


    window.store2 = Ext.create('Ext.data.JsonStore', {//开辟存储空间，创建数据库
       fields: ['name', '未知攻击', '懒虫攻击', '用户误操作', '端口扫描攻击', 
		         '零日攻击', '硬件故障', '木马病毒', 'Dos攻击'],
        data: generateData()
    });
    
});
