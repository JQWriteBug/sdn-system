Ext.require('Ext.chart.*'); //����ͼ��İ�

Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']); //��������Ҫ�İ�

var Month = 0; //�л���ͬ�·������õı���

var colorVal=1;//���ڸı���ɫ

//�״�ͼ
Ext.onReady(function() { //����Ӵ˴���ʼ���У��൱��������
    var win = Ext.create('Ext.Window', { //��������
        x: 140,
        y: 60,
        width: 500,
        height: 300,
        minHeight: 300,
        minWidth: 400,

        hidden: false,
        shadow: false,

        maximizable: true, //�����С��
        style: 'overflow: hidden;',
        title: '�״�ͼ',
        style: 'background:#3BB1F9',
        renderTo: Ext.getBody(), //���ú�����getBody()���ڿ⺯��
        layout: 'fit',

        tbar: [{
                text: '1��',
                enableToggle: true, //����״̬�����л�
                pressed: false,
                toggleHandler: function(btn, pressed)
				{
                    Month = 0; //��Ӧ1�·�
                    storeRadar.loadData(generateDataRadar(8)); //������Ҫ�����ݣ�generateDataRadar(8)��data��
                    //storeRadar.loadData(generate(8));
                }
            },
            {
                text: '2��',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 1; //��Ӧ2�·�
                    storeRadar.loadData(generateDataRadar(8)); //������Ҫ������
                }
            },
            {
                text: '3��',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 2; //��Ӧ3�·�
                    storeRadar.loadData(generateDataRadar(8)); //������Ҫ������
                }
            },
            {
                text: '4��',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 3; //��Ӧ4�·�
                    storeRadar.loadData(generateDataRadar(8)); //������Ҫ������
                }
            },
            {
                text: '5��',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 4; //��Ӧ5�·�
                    storeRadar.loadData(generateDataRadar(8)); //������Ҫ������
                }
            },
            {
                text: '6��',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 5; //��Ӧ6�·�
                    storeRadar.loadData(generateDataRadar(8)); //������Ҫ������
                }
            },
            {
                text: '7��',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 6; //��Ӧ7�·�
                    storeRadar.loadData(generateDataRadar(8)); //������Ҫ������
                }
            },
            {
                text: '8��',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 7; //��Ӧ8�·�
                    storeRadar.loadData(generateDataRadar(8)); //������Ҫ������
                }
            },
            {
                text: '9��',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 8; //��Ӧ9�·�
                    storeRadar.loadData(generateDataRadar(8)); //������Ҫ������
                }
            },
            {
                text: '10��',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 9; //��Ӧ10�·�
                    storeRadar.loadData(generateDataRadar(8)); //������Ҫ������
                }
            },
            {
                text: '11��',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 10; //��Ӧ11�·�
                    storeRadar.loadData(generateDataRadar(8)); //������Ҫ������
                }
            },
            {

                text: '12��',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 11; //��Ӧ12�·�
                    storeRadar.loadData(generateDataRadar(8)); //������Ҫ������
                }
            },
            {
                enableToggle: true, //����Ч��
                pressed: true,
                text: '����',
                toggleHandler: function(btn, pressed) 
				{
                    var chart = Ext.getCmp('chartCmp');
                    chart.animate = pressed ? { easing: 'ease', duration: 2000 } : false;
                    //��������ʱ��Ϊ2��
                }
            }
        ],
		
        items: {
            id: 'chartCmp', //id����
            xtype: 'chart',
            style: 'background:#fff', //������ɫ
            theme: 'Category2',
            store: storeRadar,
            insetPadding: 20, //Ȧ�Ĵ�С
			
			animate: true,
            animate: 
			{
                duration: 3000 //������ʱ����Ϊ2��
            },
			
            axes: 
			[{
                type: 'Radial', //����
                position: 'right',
				
                label: 
				{
                    display: true
                }
            }],
			
			
            series: 
			[
			    {
                    type: 'radar',
                    xField: 'name',
                    yField: 'data1',//data���棬�״�ͼ��һ�����ϵİ˸���
                    showMarkers: true,
                    
                    style: 
					{
                        'stroke-width': 2, //��ɫ�ߵ��߿�
                        fill: 'none'
                    }
                },
				{
                    type: 'radar',
                    xField: 'name',
                    yField: 'data2',//��ɫ�����ߣ���data��
                    //showMarkers: true,
					
                    style: {
                        'stroke-width': 1, //��ɫ�ߵ��߿�
                        fill: 'none'
                    }
                },
				{
                    type: 'radar',
                    xField: 'name',
					style: 'background:#fff', //������ɫ
                    yField: 'data3',
                    //showMarkers: true,
					
                    style: 
					{
                        'stroke-width': 1, //��ɫ�ߵ��߿�
                        fill: 'none'
                    }
                },
				

            ]

        }
    });


    //����ͼ
    store2.loadData(generateData(8)); //������������
    var win = Ext.create('Ext.Window', {
        x: 640,
        y: 60,
        width: 510,
        height: 300,
        minHeight: 300,
        minWidth: 400,
        background: '#1ff',
        style: 'background:#3BB1F9',
		
        hidden: false,
        maximizable: true,
		
        title: '����ͼ',
        renderTo: Ext.getBody(),
        layout: 'fit',
        // tbar: [{
        // text: '��������',
        // handler: function() {
        // store2.loadData(generateData(8));
        // }
        // }],
		
        items: 
		{
            xtype: 'chart',
            style: 'background:#fff',
            store: store2,
            shadow: true,
			
			animate: true,
            animate: 
			{
                duration: 3000 //������ʱ����Ϊ3��
            },
			
            insetPadding: 5,//������
            theme: 'Category1',
			
            legend: 
			{
                position: 'right'
            },
			
            axes: 
			[{
                type: 'Numeric',
                minimum: 0,
                position: 'left', //�����λ��
                fields: ['δ֪����', '���湥��', '�û������', '�˿�ɨ�蹥��',
                    '���չ���', 'Ӳ������', 'ľ����', 'Dos����'], //���ݿ�
                title: '�̶�ֵ',
				
                minorTickSteps: 1, //�����ϵĿ̶ȼ��
                grid: {
                    odd: { //������
                        opacity: 1,
                        fill: '#ddd',//�����ɫ
                        stroke: '#bbb',//�켣��ɫ
                        'stroke-width': 1
                    }
                }
            }, {
                type: 'Category', //����������
                position: 'bottom',
                fields: ['name'],
                title: 'ȫ������'
            }],
			
            series: 
			[{
                    type: 'line',
                    highlight: 
					{
                        size: 7,
                        radius: 7
                    },
                    axis: 'left',
                    xField: 'name',
                    yField: 'δ֪����',
                    smooth: true,
                    fill: true,
					
                    markerConfig: {
                        type: 'cross', //���ǽ����
                        size: 2,
                        radius: 2,
                        'stroke-width': 0 //��Ĵ�С
                    }
                }, {
                    type: 'line',
                    highlight: 
					{
                        size: 7,
                        radius: 7
                    },
                    axis: 'left',
                    smooth: true,
                    xField: 'name',
                    yField: '���湥��',
					
                    markerConfig: {
                        type: 'circle', //����Բ��
                        size: 4,
                        radius: 4,
                        'stroke-width': 0
                    }
                },
                {
                    type: 'line',
                    highlight: 
					{
                        size: 7,
                        radius: 7
                    },
                    axis: 'left',
                    smooth: true,
                    fill: false,
                    xField: 'name',
                    yField: '�û������',
                    markerConfig: 
					{
                        type: 'circle',
                        size: 4,
                        radius: 4,
                        'stroke-width': 0
                    }
                },
                {
                    type: 'line',
                    highlight: 
					{
                        size: 7,
                        radius: 7
                    },
                    axis: 'left',
                    smooth: true,
                    fill: false,
                    xField: 'name',
                    yField: '�˿�ɨ�蹥��',
					
                    markerConfig: {
                        type: 'circle',
                        size: 4,
                        radius: 4,
                        'stroke-width': 0
                    }
                },
                {
                    type: 'line',
                    highlight: 
					{
                        size: 7,
                        radius: 7
                    },
                    axis: 'left',
                    smooth: true,
                    xField: 'name',
                    yField: '���չ���',
					
                    markerConfig: {
                        type: 'circle',
                        size: 4,
                        radius: 4,
                        'stroke-width': 0
                    }
                },
                {
                    type: 'line',
                    highlight: 
					{
                        size: 7,
                        radius: 7
                    },
                    axis: 'left',
                    smooth: true,
                    fill: false,
                    xField: 'name',
                    yField: 'Ӳ������',
					
                    markerConfig: {
                        type: 'circle',
                        size: 4,
                        radius: 4,
                        'stroke-width': 0
                    }
                },
                {
                    type: 'line',
                    highlight: 
					{
                        size: 7,
                        radius: 7
                    },
                    axis: 'left',
                    smooth: true,
                    fill: false,
                    xField: 'name',
                    yField: 'ľ����',
                    markerConfig: 
					{
                        type: 'circle',
                        size: 4,
                        radius: 4,
                        'stroke-width': 0
                    }
                },
                {
                    type: 'line',
                    highlight: 
					{
                        size: 7,
                        radius: 7
                    },
                    axis: 'left',
                    smooth: true,
                    fill: true,
                    xField: 'name',
                    yField: 'Dos����',
                    markerConfig: 
					{
                        type: 'circle',
                        size: 4,
                        radius: 4,
                        'stroke-width': 0
                    }
                }
            ]
        }
    });

    //�Ǳ���ͼ
    if (DangerIndexData < 30) //�������ֵ<30,���Ǳ�����ɫ
    {
        colorVal = 'GREEN';
    }
    if (DangerIndexData > 29 && DangerIndexData < 80) 
	{
        colorVal = 120000;
        colorVal = 'YELLOW';
    }
    if (DangerIndexData > 79 && DangerIndexData < 100) {
        colorVal = 'RED';
    } else {
        colorVal = 'GRAY';
    }
	
    storeRadar.loadData(generateDataRadar(8));

    Ext.create('Ext.Window', {
        x: 140,
        y: 360,
        width: 1010,
        height: 270,
        minWidth: 650,
        minHeight: 225,
        style: 'background:#3BB1F9',
        title: '�Ǳ���ͼ',

        // tbar: [{
        // text: '��������',
        // handler: function() {

        // storeRadar.loadData(generateDataRadar(8));
        // }
        // }],
		
        layout: 
		{
            type: 'hbox', //ˮƽ
            align: 'stretch' //���ұ�����
        },

        items: [

            {
                xtype: 'chart',
                style: 'background:#fff',

                animate: 
				{
                    duration: 2000 //������ʱ����Ϊ2��
                },
                store: storeRadar,
                insetPadding: 25,
                flex: 1, //�������

                axes: 
				[
				    {
                        type: 'gauge',
                        position: 'gauge',
                        minimum: 0,
                        maximum: 100,

                        steps: 10,
                        title: '������󹥻��̶�',
                        margin: 7,
                        sectors: [20, 80],

                    }

                ],
				
                series:
				[{
                    type: 'gauge',
                    field: 'DangerIndex',
                    donut: 30, //�м价�Ŀ��
                    //background: colorVal

                    colorSet: ['#25A6FA', '#ddd']
                        // colorSet: [
                        //     [0.2, '#1dd'],
                        //     [0.8, '#1dd'],
                        //     [1, '#1dd'],
                        // ],
                        //setBackground: colorVal,
                        //colorSet: 'GREEN'

                }]
            },

            //�ڶ����Ǳ���ͼ
            {
                xtype: 'chart',
                style: 'background:#fff',
				
                animate: 
				{
                    duration: 2000 //������ʱ����Ϊ2��
                },
                store: storeRadar, //������������
                insetPadding: 25,
                flex: 1,
				
                axes: 
				[{
                    type: 'gauge',
                    position: 'gauge',
                    minimum: 0,
                    maximum: 100,
                    steps: 10,
                    title: 'Ԥ��������󹥻��̶�',
                    margin: 7
                }],
				
                series: 
				[{
                    type: 'gauge',
                    field: 'DangerIndexForecast',
                    donut: 80,
                    colorSet: ['#25A6FA', '#ddd']
                }]
            }
        ]
    }).show();

});