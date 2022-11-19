Ext.require('Ext.chart.*'); //导入图表的包

Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']); //导入所需要的包

var Month = 0; //切换不同月份数据用的变量

var colorVal=1;//用于改变颜色

//雷达图
Ext.onReady(function() { //程序从此处开始运行，相当于主函数
    var win = Ext.create('Ext.Window', { //创建窗体
        x: 140,
        y: 60,
        width: 500,
        height: 300,
        minHeight: 300,
        minWidth: 400,

        hidden: false,
        shadow: false,

        maximizable: true, //最大化最小化
        style: 'overflow: hidden;',
        title: '雷达图',
        style: 'background:#3BB1F9',
        renderTo: Ext.getBody(), //调用函数，getBody()属于库函数
        layout: 'fit',

        tbar: [{
                text: '1月',
                enableToggle: true, //两种状态轮流切换
                pressed: false,
                toggleHandler: function(btn, pressed)
				{
                    Month = 0; //对应1月份
                    storeRadar.loadData(generateDataRadar(8)); //加载需要的数据，generateDataRadar(8)在data中
                    //storeRadar.loadData(generate(8));
                }
            },
            {
                text: '2月',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 1; //对应2月份
                    storeRadar.loadData(generateDataRadar(8)); //加载需要的数据
                }
            },
            {
                text: '3月',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 2; //对应3月份
                    storeRadar.loadData(generateDataRadar(8)); //加载需要的数据
                }
            },
            {
                text: '4月',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 3; //对应4月份
                    storeRadar.loadData(generateDataRadar(8)); //加载需要的数据
                }
            },
            {
                text: '5月',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 4; //对应5月份
                    storeRadar.loadData(generateDataRadar(8)); //加载需要的数据
                }
            },
            {
                text: '6月',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 5; //对应6月份
                    storeRadar.loadData(generateDataRadar(8)); //加载需要的数据
                }
            },
            {
                text: '7月',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 6; //对应7月份
                    storeRadar.loadData(generateDataRadar(8)); //加载需要的数据
                }
            },
            {
                text: '8月',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 7; //对应8月份
                    storeRadar.loadData(generateDataRadar(8)); //加载需要的数据
                }
            },
            {
                text: '9月',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 8; //对应9月份
                    storeRadar.loadData(generateDataRadar(8)); //加载需要的数据
                }
            },
            {
                text: '10月',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 9; //对应10月份
                    storeRadar.loadData(generateDataRadar(8)); //加载需要的数据
                }
            },
            {
                text: '11月',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 10; //对应11月份
                    storeRadar.loadData(generateDataRadar(8)); //加载需要的数据
                }
            },
            {

                text: '12月',
                enableToggle: true,
                pressed: false,
                toggleHandler: function(btn, pressed) 
				{
                    Month = 11; //对应12月份
                    storeRadar.loadData(generateDataRadar(8)); //加载需要的数据
                }
            },
            {
                enableToggle: true, //动画效果
                pressed: true,
                text: '动感',
                toggleHandler: function(btn, pressed) 
				{
                    var chart = Ext.getCmp('chartCmp');
                    chart.animate = pressed ? { easing: 'ease', duration: 2000 } : false;
                    //动画持续时间为2秒
                }
            }
        ],
		
        items: {
            id: 'chartCmp', //id名称
            xtype: 'chart',
            style: 'background:#fff', //背景颜色
            theme: 'Category2',
            store: storeRadar,
            insetPadding: 20, //圈的大小
			
			animate: true,
            animate: 
			{
                duration: 3000 //动画的时间间隔为2秒
            },
			
            axes: 
			[{
                type: 'Radial', //射线
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
                    yField: 'data1',//data里面，雷达图中一条线上的八个点
                    showMarkers: true,
                    
                    style: 
					{
                        'stroke-width': 2, //绿色线的线宽
                        fill: 'none'
                    }
                },
				{
                    type: 'radar',
                    xField: 'name',
                    yField: 'data2',//紫色警戒线，在data中
                    //showMarkers: true,
					
                    style: {
                        'stroke-width': 1, //紫色线的线宽
                        fill: 'none'
                    }
                },
				{
                    type: 'radar',
                    xField: 'name',
					style: 'background:#fff', //背景颜色
                    yField: 'data3',
                    //showMarkers: true,
					
                    style: 
					{
                        'stroke-width': 1, //青色线的线宽
                        fill: 'none'
                    }
                },
				

            ]

        }
    });


    //曲线图
    store2.loadData(generateData(8)); //加载曲线数据
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
		
        title: '折线图',
        renderTo: Ext.getBody(),
        layout: 'fit',
        // tbar: [{
        // text: '加载数据',
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
                duration: 3000 //动画的时间间隔为3秒
            },
			
            insetPadding: 5,//窗体间隔
            theme: 'Category1',
			
            legend: 
			{
                position: 'right'
            },
			
            axes: 
			[{
                type: 'Numeric',
                minimum: 0,
                position: 'left', //竖轴的位置
                fields: ['未知攻击', '懒虫攻击', '用户误操作', '端口扫描攻击',
                    '零日攻击', '硬件故障', '木马病毒', 'Dos攻击'], //数据块
                title: '程度值',
				
                minorTickSteps: 1, //竖轴上的刻度间距
                grid: {
                    odd: { //奇数行
                        opacity: 1,
                        fill: '#ddd',//填充颜色
                        stroke: '#bbb',//轨迹颜色
                        'stroke-width': 1
                    }
                }
            }, {
                type: 'Category', //横坐标类型
                position: 'bottom',
                fields: ['name'],
                title: '全年趋势'
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
                    yField: '未知攻击',
                    smooth: true,
                    fill: true,
					
                    markerConfig: {
                        type: 'cross', //点是交叉的
                        size: 2,
                        radius: 2,
                        'stroke-width': 0 //点的大小
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
                    yField: '懒虫攻击',
					
                    markerConfig: {
                        type: 'circle', //点是圆的
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
                    yField: '用户误操作',
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
                    yField: '端口扫描攻击',
					
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
                    yField: '零日攻击',
					
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
                    yField: '硬件故障',
					
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
                    yField: '木马病毒',
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
                    yField: 'Dos攻击',
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

    //仪表盘图
    if (DangerIndexData < 30) //攻击最大值<30,则仪表盘绿色
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
        title: '仪表盘图',

        // tbar: [{
        // text: '加载数据',
        // handler: function() {

        // storeRadar.loadData(generateDataRadar(8));
        // }
        // }],
		
        layout: 
		{
            type: 'hbox', //水平
            align: 'stretch' //往右边排列
        },

        items: [

            {
                xtype: 'chart',
                style: 'background:#fff',

                animate: 
				{
                    duration: 2000 //动画的时间间隔为2秒
                },
                store: storeRadar,
                insetPadding: 25,
                flex: 1, //间隔长度

                axes: 
				[
				    {
                        type: 'gauge',
                        position: 'gauge',
                        minimum: 0,
                        maximum: 100,

                        steps: 10,
                        title: '本月最大攻击程度',
                        margin: 7,
                        sectors: [20, 80],

                    }

                ],
				
                series:
				[{
                    type: 'gauge',
                    field: 'DangerIndex',
                    donut: 30, //中间环的宽度
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

            //第二个仪表盘图
            {
                xtype: 'chart',
                style: 'background:#fff',
				
                animate: 
				{
                    duration: 2000 //动画的时间间隔为2秒
                },
                store: storeRadar, //来自曲线数据
                insetPadding: 25,
                flex: 1,
				
                axes: 
				[{
                    type: 'gauge',
                    position: 'gauge',
                    minimum: 0,
                    maximum: 100,
                    steps: 10,
                    title: '预测下月最大攻击程度',
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