
Ext.require(['Ext.data.*']);

//***********************ȫ�ֱ���*********************

var AttackClass=["UnknownAttack","SlackerAttack","Misoperation","PortAttack",
			  "ZeroDayAttack","HardwareFault","TrojanHorseVirus","DosAttack"];
			  
//��ȡ���������쳣����
var AttackData=[];
var AttackDataNextMonth=[];

//����ȫ��仯��δ֪�����쳣���ݣ�1��~12�£�ÿ�ֹ����ĵ�һ��Ϊ��ʼ��ֵ
var UnknownAttack	=[10,20,22,30,50,20,24,10,30,35,40,32];
var SlackerAttack	=[15,44,11,45,40,41,46,10,35,10,18,10];
var Misoperation    =[18,20,55,40,22,20,24,57,24,60,52,22];
var PortAttack      =[10,55,22,54,50,42,50,10,42,44,10,66];
var ZeroDayAttack	=[22,11,10,44,44,45,24,53,10,10,41,10];
var HardwareFault	=[10,7,22,42,22,20,42,25,10,42,10,41];
var TrojanHorseVirus=[22,20,10,30,4,45,24,10,25,44,62,50];
var DosAttack		=[10,20,22,45,22,20,24,10,25,10,90,10];

var DangerIndexData;//��һ���Ǳ�����вָ��
var DangerIndexForecast;//�ڶ����Ǳ�����вָ��

//�״����ݴ���
Ext.onReady(function() {

var Index =//�궨��
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
		//�����Ӧ�·ݰ�ť��ִ��js����ĺ������������˴�
		
        var data = [],
            p = (Math.random() * 11) + 1;
        var	ExchangeTemp=0,temp=0;//temp������
		var AttackDataTemp=[0,0,0,0,0,0,0,0];//�����������������
        var UserName=["δ֪����","���湥��","�û������","�˿�ɨ�蹥��",
			             "���չ���","Ӳ������","ľ����","Dos����"];
        	  
if(Month<12)//�л�8�ֲ�ͬ��������Ӧÿ������		
{
	for(j=0;j<8;j++)//�ɵ���İ�ť���д���
	{
		if(j==0)//j=0��Ӧ��Index�еĵ�һ����������UnknownAttack
		{	
			AttackData[j]=UnknownAttack[Month];//Month==0ʱ������1�·�
			//�������ťʱ������������Js���棬�������1�¡�����Month=0
			AttackDataNextMonth[j]=UnknownAttack[(Month+1)%12];
		}
		else if(j==1)//j=1��Ӧ��Index�еĵڶ�����������SlackerAttack
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
		
		
        for (i = 0; i < 8; i++) {//�״�ͼ��һ�����ϵİ˸��㣬��8�ֹ���
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
			  AttackDataTemp[temp]=AttackData[temp];//���ݹ�������
			} 
		
		for( temp=0;temp<8;temp++)//����
		{
			if(AttackDataTemp[temp] > AttackDataTemp[temp+1])//�������ݽ���
			{
				ExchangeTemp=AttackDataTemp[temp+1];
				AttackDataTemp[temp+1]=AttackDataTemp[temp];
				AttackDataTemp[temp]=ExchangeTemp;
			}
		} 
			DangerIndexData=AttackDataTemp[7];//����֮����������������ֵ
		
		 
		  for( temp=0;temp<8;temp++)
		 {
			 if(AttackDataNextMonth[temp] > AttackDataNextMonth[temp+1])//�������ݽ���
			 {
				 ExchangeTemp=AttackDataNextMonth[temp+1];
				 AttackDataNextMonth[temp+1]=AttackDataNextMonth[temp];
				 AttackDataNextMonth[temp]=ExchangeTemp;
			 }
		 }
		 DangerIndexForecast=(AttackDataNextMonth[7]+AttackDataTemp[7]);
		 
		 if(DangerIndexForecast%2!=0)//����
		 {
			 DangerIndexForecast=DangerIndexForecast-1;
		 }
		 DangerIndexForecast=DangerIndexForecast/2;

            data.push({

                name: UserName[i % 8],
                // name: Ext.Date.monthNames[i % 12],
                data1: dataTemp,//�״�ͼ��һ�����ϵİ˸���
				data2: 60,//��ɫ������
				data3: 100,//��ɫ������
				
				DangerIndexForecast: DangerIndexForecast,//����൱��һ���ַ����ұ��Ǳ���
                DangerIndex: DangerIndexData
				 
            });
        }//forѭ������
		
        return data;//����push���������ֵ
    };
    
    window.storeRadar = Ext.create('Ext.data.JsonStore', {//���ٴ洢�ռ䣬�������ݿ�
        fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5', 
		'data6', 'data7', 'DangerIndexForecast', 'DangerIndex'],
        data: generateDataRadar()//��������������õ���data���͸�store�����data
    });
   

//��������
    window.generateData = function(n, floor) {
        var data = [],
            p = (Math.random() * 11) + 1,i;
		
        var dataTemp = 0,dataTemp2=0,dataTemp3=0,dataTemp4=0,
		    dataTemp5=0,dataTemp6=0,dataTemp7=0,dataTemp8=0;//��Ӧ��8�ֹ���
		
        var UserName = ["1��", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11","12"];//������
      
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
                
                δ֪����: dataTemp,
                ���湥��: dataTemp2,
                �û������:dataTemp3,
                �˿�ɨ�蹥��:dataTemp4,
				���չ���:dataTemp5,
				Ӳ������:dataTemp6,
				ľ����:dataTemp7,
                Dos����:dataTemp8,
                
            });
        }
		 
        return data;
    };


    window.store2 = Ext.create('Ext.data.JsonStore', {//���ٴ洢�ռ䣬�������ݿ�
       fields: ['name', 'δ֪����', '���湥��', '�û������', '�˿�ɨ�蹥��', 
		         '���չ���', 'Ӳ������', 'ľ����', 'Dos����'],
        data: generateData()
    });
    
});
