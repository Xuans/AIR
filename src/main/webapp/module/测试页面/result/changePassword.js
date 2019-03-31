myChart.showLoading();

$.get('data/asset/geo/HK.json', function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('HK', geoJson);

    myChart.setOption(option = {
        visualMap: [{
            min: 1,
            max: 1000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            },
            left: 'left',
            dimension: 0,
            seriesIndex: 0
        }, {
            min: 1,
            max: 100,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['blue', 'yellow', 'green']
            },
            left: 'right',
            dimension: 1,
            seriesIndex: 0
        }],
        series: [
            {
                name: '香港18区人口密度',
                type: 'map',
                mapType: 'HK', // 自定义扩展图表类型
                itemStyle: {
                    normal: { label: { show: true } },
                    emphasis: { label: { show: true } }
                },
                data: [
                    [
                        { name: '中西区', value: 10 },
                        { name: '湾仔', value: 154 },
                        { name: '东区', value: 50 },
                        { name: '南区', value: 699 },
                        { name: '油尖旺', value: 440 },
                        { name: '深水埗', value: 406 },
                        { name: '九龙城', value: 376 },
                        { name: '黄大仙', value: 451 },
                        { name: '观塘', value: 120 },
                        { name: '葵青', value: 219 },
                        { name: '荃湾', value: 321 },
                        { name: '屯门', value: 588 },
                        { name: '元朗', value: 417 },
                        { name: '北区', value: 222 },
                        { name: '大埔', value: 67 },
                        { name: '沙田', value: 917 },
                        { name: '西贡', value: 336 },
                        { name: '离岛', value: 88 }
                    ], [
                        { name: '中西区', value: 11 },
                        { name: '湾仔', value: 22 },
                        { name: '东区', value: 53 },
                        { name: '南区', value: 46 },
                        { name: '油尖旺', value: 85 },
                        { name: '深水埗', value: 76 },
                        { name: '九龙城', value: 37 },
                        { name: '黄大仙', value: 51 },
                        { name: '观塘', value: 10 },
                        { name: '葵青', value: 21 },
                        { name: '荃湾', value: 21 },
                        { name: '屯门', value: 88 },
                        { name: '元朗', value: 17 },
                        { name: '北区', value: 22 },
                        { name: '大埔', value: 67 },
                        { name: '沙田', value: 97 },
                        { name: '西贡', value: 36 },
                        { name: '离岛', value: 88 }
                    ]
                ],
                // 自定义名称映射
                nameMap: {
                    'Central and Western': '中西区',
                    'Eastern': '东区',
                    'Islands': '离岛',
                    'Kowloon City': '九龙城',
                    'Kwai Tsing': '葵青',
                    'Kwun Tong': '观塘',
                    'North': '北区',
                    'Sai Kung': '西贡',
                    'Sha Tin': '沙田',
                    'Sham Shui Po': '深水埗',
                    'Southern': '南区',
                    'Tai Po': '大埔',
                    'Tsuen Wan': '荃湾',
                    'Tuen Mun': '屯门',
                    'Wan Chai': '湾仔',
                    'Wong Tai Sin': '黄大仙',
                    'Yau Tsim Mong': '油尖旺',
                    'Yuen Long': '元朗'
                }
            }
        ]
    });
});