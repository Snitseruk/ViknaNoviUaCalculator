
document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    // --------------------------------Смена Tabs -------------------------------
    let tabLinksItem = document.querySelectorAll('.tab-links_item');

    tabLinksItem.forEach(function (item) {
        item.addEventListener('click', function () {
            let tabName = this.dataset.tab;
            let tabContent = document.querySelector('.tab-content_item[data-tab="' + tabName + '"]');

            document.querySelectorAll('.tab-content_item.active').forEach(function (item) {
                item.classList.remove('active');
            });

            document.querySelectorAll('.tab-links_item.active').forEach(function (item) {
                item.classList.remove('active');
            });
            tabContent.classList.add('active');
            this.classList.add('active');
        });
    })

    // -----------------------Слайдер------------------------------------

    // -----------------------Изменения слайдер------------------------------------

    // ======== Slider для выбора высоты Глухого окна 

    const heightSliderOne = document.querySelector('.height-slider-one');
    noUiSlider.create(heightSliderOne, {
        start: [1200],
        step: 10,
        orientation: 'vertical',
        direction: 'rtl',
        connect: true,
        range: {
            'min': 400,
            'max': 2000
        },
        pips: {
            mode: 'positions',
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            density: 2,
            stepped: true
        },
        format: {
            to: function (value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });

    let inputHeightOne = document.querySelector('.inputHeight-one');
    heightSliderOne.noUiSlider.on('update', function (values, handle) {
        let value = values[handle];
        inputHeightOne.value = value;
    });

    inputHeightOne.addEventListener('change', function () {
        heightSliderOne.noUiSlider.set(this.value);
    });

    // ======== Slider для ширины Глухого окна

    const widthSliderOne = document.querySelector('.width-slider-one');
    noUiSlider.create(widthSliderOne, {
        start: [950],
        step: 10,
        orientation: 'horizontal',
        direction: 'ltr',
        connect: true,
        range: {
            'min': 400,
            'max': 1500
        },
        pips: {
            mode: 'positions',
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            density: 2,
            stepped: true
        },
        format: {
            to: function (value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });
    let inputWidthOne = document.querySelector('.inputWidth-one');
    widthSliderOne.noUiSlider.on('update', function (values, handle) {
        let value = values[handle];
        inputWidthOne.value = value;
    });

    inputWidthOne.addEventListener('change', function () {
        widthSliderOne.noUiSlider.set(this.value);
    });

    // ======== Slider для выбора высоты Двухстворчатого окна 

    const heightSliderTwo = document.querySelector('.height-slider-two');
    noUiSlider.create(heightSliderTwo, {
        start: [1450],
        step: 10,
        orientation: 'vertical',
        direction: 'rtl',
        connect: true,
        range: {
            'min': 600,
            'max': 2300
        },
        pips: {
            mode: 'positions',
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            density: 2,
            stepped: true
        },
        format: {
            to: function (value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });

    let inputHeightTwo = document.querySelector('.inputHeight-two');
    heightSliderTwo.noUiSlider.on('update', function (values, handle) {
        let value = values[handle];
        inputHeightTwo.value = value;
    });

    inputHeightTwo.addEventListener('change', function () {
        heightSliderTwo.noUiSlider.set(this.value);
    });

    // ======== Slider для ширины Двухстворчатого окна

    const widthSliderTwo = document.querySelector('.width-slider-two');
    noUiSlider.create(widthSliderTwo, {
        start: [1450],
        step: 10,
        orientation: 'horizontal',
        connect: true,
        range: {
            'min': 900,
            'max': 2000
        },
        pips: {
            mode: 'positions',
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            density: 2,
            stepped: true
        },
        format: {
            to: function (value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });
    let inputWidthTwo = document.querySelector('.inputWidth-two');
    widthSliderTwo.noUiSlider.on('update', function (values, handle) {
        let value = values[handle];
        inputWidthTwo.value = value
    });

    inputWidthTwo.addEventListener('change', function () {
        widthSliderTwo.noUiSlider.set(this.value);
    });

    // ======== Slider для выбора высоты Трёхстворчатого окна 

    const heightSliderThree = document.querySelector('.height-slider-three');
    noUiSlider.create(heightSliderThree, {
        start: [1450],
        step: 10,
        orientation: 'vertical',
        direction: 'rtl',
        connect: true,
        range: {
            'min': 600,
            'max': 2300
        },
        pips: {
            mode: 'positions',
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            density: 2,
            stepped: true
        },
        format: {
            to: function (value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });

    let inputHeightThree = document.querySelector('.inputHeight-three');
    heightSliderThree.noUiSlider.on('update', function (values, handle) {
        let value = values[handle];
        inputHeightThree.value = value;
    });
    inputHeightThree.addEventListener('change', function () {
        heightSliderThree.noUiSlider.set(this.value);
    });

    // ======== Slider для ширины Трёхстворчатого окна

    const widthSliderThree = document.querySelector('.width-slider-three');
    noUiSlider.create(widthSliderThree, {
        start: [2250],
        step: 10,
        orientation: 'horizontal',
        connect: true,
        range: {
            'min': 1500,
            'max': 3000
        },
        pips: {
            mode: 'positions',
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            density: 2,
            stepped: true
        },
        format: {
            to: function (value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });
    let inputWidthThree = document.querySelector('.inputWidth-three');
    widthSliderThree.noUiSlider.on('update', function (values, handle) {
        let value = values[handle];
        inputWidthThree.value = value
    });

    inputWidthThree.addEventListener('change', function () {
        widthSliderThree.noUiSlider.set(this.value);
    });
    ///----------------------------------------Смена профиля и цвета Глухое окно-----------------------------------------

    const parametersOne = document.getElementById('parametersOne')
    const profilOne = document.getElementById('profilOne');
    const colourOne = document.getElementById('colourOne');
    let image = document.querySelector('.pic-one img');

    let obj;

    parametersOne.addEventListener('change', e => {
        const colourOptionsIndex = colourOne.options[colourOne.selectedIndex].index;
        image.src = colourOne.value;
        const profilOneIndex = profilOne.options[profilOne.selectedIndex].index;

        if (profilOneIndex === 1 && colourOptionsIndex === 1) {
            obj = objOneWds5;
        } else if (profilOneIndex === 2 && colourOptionsIndex === 1) {
            obj = objOneWds6;
        } else if (profilOneIndex === 3 && colourOptionsIndex === 1) {
            obj = objOneWds7;
        } else if (profilOneIndex === 1 && colourOptionsIndex === 2) {
            obj = objOneWds5Coloured;
        } else if (profilOneIndex === 2 && colourOptionsIndex === 2) {
            obj = objOneWds6Coloured;
        } else if (profilOneIndex === 3 && colourOptionsIndex === 2) {
            obj = objOneWds7Coloured;
        }
    })

    // --------------------------------------------Смена профиля и цвета двухстворчатое окно----------------------------------------------------------------
    const parametersTwo = document.getElementById('parametersTwo')
    const profilTwo = document.getElementById('profilTwo');
    const colourTwo = document.getElementById('colourTwo');
    let imageTwo = document.querySelector('.pic-two img');

    parametersTwo.addEventListener('change', e => {
        const profilTwoIndex = profilTwo.options[profilTwo.selectedIndex].index;
        let colourOptionsIndexTwo = colourTwo.options[colourTwo.selectedIndex].index;
        imageTwo.src = colourTwo.value;
        if (profilTwoIndex === 1 && colourOptionsIndexTwo === 1) {
            obj = objTwoWds5;
        } else if (profilTwoIndex === 2 && colourOptionsIndexTwo === 1) {
            obj = objTwoWds6;
        } else if (profilTwoIndex === 3 && colourOptionsIndexTwo === 1) {
            obj = objTwoWds7;
        } else if (profilTwoIndex === 1 && colourOptionsIndexTwo === 2) {
            obj = objTwoWds5Coloured;
        } else if (profilTwoIndex === 2 && colourOptionsIndexTwo === 2) {
            obj = objTwoWds6Coloured;
        } else if (profilTwoIndex === 3 && colourOptionsIndexTwo === 2) {
            obj = objTwoWds7Coloured;
        }
    })
    // --------------------------------------------Смена профиля и цвета трёхстворчатое окно----------------------------------------------------------------
    const parametersThree = document.getElementById('parametersThree')
    const profilThree = document.getElementById('profilThree');
    const colourThree = document.getElementById('colourThree');
    let imageThree = document.querySelector('.pic-three img');

    parametersThree.addEventListener('change', e => {
        const profilThreeIndex = profilThree.options[profilThree.selectedIndex].index;
        let colourOptionsIndexThree = colourThree.options[colourThree.selectedIndex].index;
        imageThree.src = colourThree.value;

        if (profilThreeIndex === 1 && colourOptionsIndexThree === 1) {
            obj = objThreeWds5;
        } else if (profilThreeIndex === 2 && colourOptionsIndexThree === 1) {
            obj = objThreeWds6;
        } else if (profilThreeIndex === 3 && colourOptionsIndexThree === 1) {
            obj = objThreeWds7;
        } else if (profilThreeIndex === 1 && colourOptionsIndexThree === 2) {
            obj = objThreeWds5Coloured;
        } else if (profilThreeIndex === 2 && colourOptionsIndexThree === 2) {
            obj = objThreeWds6Coloured;
        } else if (profilThreeIndex === 3 && colourOptionsIndexThree === 2) {
            obj = objThreeWds7Coloured;
        }
    })
    // ----------------------------Калькулятор для глухого окна--------------------------------

    const totalHrnOne = document.getElementById('totalHrnOne');
    const buttonOne = document.getElementById('btnOne');
    const widthAmountOne = [400, 522, 644, 767, 889, 1011, 1133, 1256, 1378, 1500];
    const heightAmountOne = [400, 578, 756, 933, 1111, 1289, 1467, 1644, 1822, 2000];
    const steklopaketOne = document.getElementById('steklopaket1');
    //------Глухое WDS5
    const objOneWds5 = {
        400: [224.93, 289.05, 353.57, 417.75, 482.28, 546.55, 611.09, 675.25, 739.53, 804.05],
        522: [270.7, 344.2, 418.2, 491.7, 565.7, 639.4, 713.3, 786.8, 860.5, 934.5],
        644: [316.89, 399.85, 483.21, 566.12, 649.48, 732.59, 815.96, 898.85, 981.96, 1065.3],
        767: [363.66, 456.11, 548.96, 641.31, 734.16, 826.77, 919.63, 1012, 1104.6, 1197.4],
        889: [409.85, 511.72, 614, 715.7, 817.97, 920, 1022.3, 1124, 1226, 1328.3],
        1011: [455.78, 567.07, 678.76, 789.83, 901.52, 1013, 1124.7, 1235.7, 1347.2, 1458.9],
        1133: [501.97, 622.67, 743.78, 864.22, 985.33, 1106.2, 1227.3, 1347.7, 1468.6, 1589.7],
        1256: [548.27, 678.47, 809.07, 938.95, 1069.6, 1199.9, 1330.5, 1460.4, 1590.7, 1721.3],
        1378: [594.46, 734.08, 874.1, 1013.3, 1153.4, 1293.1, 1433.2, 1572.4, 1712.2, 1852.2],
        1500: [640.1, 789.44, 938.88, 1087.5, 1236.9, 1386.1, 1535.5, 1684.1, 1833.3, 1982.8]
    };

    //------Глухое WDS5 Ламинация
    const objOneWds5Coloured = {
        400: [297.25, 377.78, 458.54, 538.84, 619.59, 700.59, 781.35, 861.66, 942.41, 1023.16],
        522: [354.1, 443.7, 533.6, 623, 712.9, 803.1, 893, 982.4, 1072, 1162],
        644: [411.3, 510.12, 609.18, 707.67, 806.73, 906.02, 1005.1, 1103.6, 1202.6, 1301.7],
        767: [469.44, 577.5, 685.77, 793.44, 901.72, 1010.2, 1118.5, 1226.2, 1334.5, 1442.7],
        889: [526.7, 643.9, 761.33, 878.09, 995.52, 1113.2, 1230.6, 1347.4, 1464.8, 1582.2],
        1011: [583.96, 710.31, 836.88, 962.74, 1089.3, 1216.1, 1342.7, 1468.6, 1595.2, 1721.7],
        1133: [640.96, 776.47, 912.19, 1047.2, 1182.9, 1318.8, 1454.6, 1589.5, 1725.3, 1861],
        1256: [698.68, 843.41, 988.35, 1132.5, 1277.4, 1422.6, 1567.6, 1711.7, 1856.7, 2001.6],
        1378: [755.94, 909.82, 1063.9, 1217.1, 1371.2, 1525.6, 1679.7, 1832.9, 1987, 2141.1],
        1500: [813.2, 976.22, 1139.5, 1301.8, 1465, 1628.5, 1791.8, 1954.1, 2117.3, 2280.6]
    };

    //------Глухое WDS6
    const objOneWds6 = {
        400: [248.59, 318.55, 388.76, 458.58, 528.79, 598.74, 668.95, 738.77, 808.72, 878.93],
        522: [298.44, 377.89, 457.58, 536.84, 616.54, 695.98, 775.69, 854.94, 934.38, 1014.09],
        644: [348.55, 437.47, 526.67, 615.36, 704.55, 793.49, 882.68, 971.38, 1060.31, 1149.5],
        767: [399.23, 497.74, 596.5, 694.71, 793.47, 891.97, 990.73, 1088.94, 1286.2],
        889: [449.33, 557.32, 665.58, 773.23, 881.48, 989.47, 1097.72, 1205.37, 1313.36, 1421.61],
        1011: [499.18, 616.66, 734.41, 851.49, 969.23, 1086.72, 1204.46, 1321.54, 1439.02, 1556.77],
        1133: [549.27, 676.25, 803.48, 930, 1057.23, 1184.21, 1311.45, 1437.97, 1564.94, 1692.18],
        1256: [599.52, 736.06, 872.86, 1008.9, 1145.7, 1282.25, 1419.05, 1555.09, 1691.63, 1828.43],
        1378: [649.62, 795.66, 941.96, 1087.43, 1223.72, 1379.76, 1526.04, 1671.52, 1817.56, 1963.85],
        1500: [699.47, 854.99, 1010.78, 1165.69, 1321.47, 1477, 1632.78, 1787.7, 1943.22, 2099.01]
    }

    //------Глухое WDS6 Ламинация
    const objOneWds6Coloured = {
        400: [348.59, 418.55, 588.76, 558.58, 628.79, 698.74, 768.95, 838.77, 908.72, 978.93],
        522: [398.44, 477.89, 557.58, 636.84, 716.54, 795.98, 875.69, 954.94, 1034.38, 1114.09],
        644: [448.55, 537.47, 626.67, 715.36, 804.55, 893.49, 982.68, 1071.38, 1160.31, 1249.5],
        767: [499.23, 597.74, 696.5, 794.71, 893.47, 991.97, 1090.73, 1188.94, 1386.2],
        889: [549.33, 657.32, 765.58, 873.23, 981.48, 1089.47, 1197.72, 1305.37, 1413.36, 1521.61],
        1011: [599.18, 716.66, 834.41, 951.49, 1069.23, 1186.72, 1304.46, 1421.54, 1539.02, 1656.77],
        1133: [649.27, 776.25, 903.48, 1030, 1157.23, 1284.21, 1411.45, 1537.97, 1664.94, 1792.18],
        1256: [699.52, 836.06, 972.86, 1108.9, 1245.7, 1382.25, 1519.05, 1655.09, 1791.63, 1928.43],
        1378: [749.62, 895.66, 1041.96, 1187.43, 1323.72, 1479.76, 1626.04, 1771.52, 1917.56, 2063.85],
        1500: [799.47, 954.99, 1110.78, 1265.69, 1421.47, 1577, 1732.78, 1887.7, 2043.22, 2199.01]
    }
    //------Глухое WDS7
    const objOneWds7 = {
        400: [287.08, 364.57, 442.54, 520.07, 598.03, 675.74, 753.71, 831.24, 908.94, 986.91],
        522: [343.6, 430.83, 518.54, 605.75, 693.47, 780.91, 868.61, 955.83, 1043.27, 1130.97],
        644: [400.61, 497.58, 595.02, 691.92, 789.36, 886.54, 983.98, 1080.89, 1178.06, 1275.51],
        767: [458.27, 565.06, 672.32, 778.98, 886.24, 993.24, 1100.5, 1207.16, 1314.16, 1421.42],
        889: [515.27, 631.8, 748.8, 865.14, 982.14, 1098.88, 1215.88, 1332.22, 1448.96, 1565.96],
        1011: [572.01, 698.27, 825.01, 951.04, 1077.78, 1204.25, 1330.99, 1457.02, 1583.49, 1710.24],
        1133: [629.01, 765.01, 901.49, 1037.2, 1173.68, 1309.89, 1446.37, 1582.08, 1718.29, 1854.77],
        1256: [686.22, 832.05, 978.34, 1123.81, 1270.11, 1416.14, 1562.44, 1707.91, 1853.94, 2000.24],
        1378: [743.23, 898.78, 1054.82, 1209.98, 1366.01, 1521.78, 1677.81, 1832.97, 1988.74, 2144.78],
        1500: [799.96, 965.26, 1131.03, 1295.87, 1461.65, 1627.15, 1792.92, 1957.77, 2123.27, 2289.05]
    }

    //------Глухое WDS7 Ламинация
    const objOneWds7Coloured = {
        400: [396.23, 498.31, 600.7, 702.51, 804.91, 907.56, 1009.95, 1111.78, 1214.17, 1316.56],
        522: [469.32, 580.92, 692.84, 804.13, 916.05, 1028.24, 1140.16, 1251.45, 1363.37, 1475.29],
        644: [542.99, 664.12, 785.57, 906.34, 1027.78, 1149.49, 1270.94, 1391.7, 1513.15, 1634.6],
        767: [617.71, 748.44, 879.49, 1009.81, 1140.87, 1272.18, 1403.24, 1533.56, 1664.61, 1795.66],
        889: [691.38, 831.64, 972.23, 1112.02, 1252.59, 1393.44, 1534.02, 1673.82, 1814.39, 1954.98],
        1011: [765.05, 914.84, 1064.95, 1214.21, 1364.32, 1514.69, 1664.8, 1814.07, 1964.18, 2114.29],
        1133: [838.45, 997.77, 1157.41, 1316.14, 1475.78, 1635.68, 1795.32, 1954.06, 2113.69, 2273.33],
        1256: [912.72, 1081.64, 1250.89, 1419.19, 1588.43, 1757.93, 1927.17, 2095.47, 2264.71, 2433.96],
        1378: [986.39, 1164.84, 1343.61, 1521.37, 1700.15, 1879.17, 2057.95, 2235.72, 2414.49, 2593.25],
        1500: [1060.06, 1248.03, 1436.34, 1623.58, 1811.87, 2000.43, 2188.73, 2375.98, 2564.27, 2752.57]
    }

    /////////Function for disabled////////////////////////
    function checkSelectOne() {
        const errorOne = document.getElementById('errorOne');
        const allSelectsOne = document.querySelectorAll('.form-inputOne');
        allSelectsOne.forEach((sel) => {
            let selNum = sel.selectedIndex;
            if (selNum === 0) {
                sel.classList.add('invalid');
                errorOne.innerText = 'Пожалуйста, Выберите необходимые параметры';
            } if (selNum > 0) {
                sel.classList.remove('invalid');
                errorOne.innerText = '';
            }
        })
    };

    const time = 1000;
    const step = 10;

    function calculate(inputHeightOne, inputWidthOne) {
        let h = heightAmountOne.findIndex(elem => elem >= inputHeightOne);
        let w = widthAmountOne.findIndex(elem => elem >= inputWidthOne);
        let h1 = h - 1;
        let w1 = w - 1;
        let price;

        let maxEl = Math.max(...heightAmountOne);
        let maxElH = heightAmountOne.indexOf(maxEl);
        let maxEl2 = Math.max(...widthAmountOne);
        let maxElW = widthAmountOne.indexOf(maxEl2);

        if (h === 0 && w > 0) {
            price = obj[widthAmountOne[w1]][h];
        } if (h === 0 && w == maxElW) {
            price = obj[widthAmountOne[w]][h];
        } if (h === 0 && w === 0) {
            price = obj[widthAmountOne[w]][h];
        } if (w === 0 && h > 0 && h !== maxElH) {
            price = obj[widthAmountOne[w]][h1];
        } if (w === 0 && h === maxElH) {
            price = obj[widthAmountOne[w]][h];
        } if (h === maxElH && w > 0 && w !== maxElW) {
            price = obj[widthAmountOne[w1]][h];
        } if (h > 0 && w > 0 && w !== maxElW && h !== maxElH) {
            price = obj[widthAmountOne[w1]][h1];
        } if (h === maxElH && w === maxElW) {
            price = obj[widthAmountOne[w]][h];
        }
        //////////ADD for counting steklopaket////////////////////////////////
        const steklopaketOneIndex = steklopaketOne.options[steklopaketOne.selectedIndex].index;
        let priceForWhiteOne = 40;
        let priceforLaminationOne = 0.5;
        function addStekloPaket() {
            const colourOptionsIndex = colourOne.options[colourOne.selectedIndex].index;
            if (steklopaketOneIndex === 2 && colourOptionsIndex === 1) {
                price += priceForWhiteOne;
            }
            if (steklopaketOneIndex === 2 && colourOptionsIndex === 2) {
                price = price + (price * priceforLaminationOne);
            }
        };
        addStekloPaket();

        n = 0;
        let t = time / (price / step);
        let interval = setInterval(() => {
            n = n + step;
            if (n > price) {
                clearInterval(interval);
                n === price;
            }
            totalHrnOne.innerHTML = "Цена от: " + n + " грн."
        }, t);
    };

    buttonOne.addEventListener('click', function (e) {
        e.preventDefault();
        checkSelectOne();
        const newWidthOne = inputWidthOne.value;
        const newHeightOne = inputHeightOne.value;
        calculate(newHeightOne, newWidthOne);
        return false;
    });

    // ----------------------------Калькулятор для Двухстворчатого окна WDS6--------------------------------

    const totalHrnTwo = document.getElementById('totalHrnTwo');
    const buttonTwo = document.getElementById('btnTwo');
    const widthAmountTwo = [900, 1022, 1144, 1267, 1389, 1511, 1633, 1756, 1878, 2000];
    const heightAmountTwo = [600, 789, 978, 1167, 1356, 1544, 1733, 1922, 2111, 2300];
    const steklopaketTwo = document.getElementById('steklopaket2');
    //------Двухстворчатое окно WDS5 
    const objTwoWds5 = {
        900: [1012.08, 1181.94, 1441.47, 1615.86, 1787.18, 1987.56, 2157.81, 2398.27, 2568.52, 2738.4],
        1022: [1080.5, 1260.3, 1529.9, 1714.3, 1895.6, 2105.9, 2286.2, 2536.6, 2716.9, 2896.7],
        1144: [1149, 1338.9, 1618.9, 1812.8, 2004.1, 2224.4, 2414.4, 2675., 2865.3, 3055.2],
        1267: [1217.7, 1417.7, 1707.3, 1911.7, 2113.1, 2343.4, 2543.8, 2814.3, 3014.6, 3214.6],
        1389: [1286.7, 1496.6, 1796.2, 2010.7, 2222.1, 2462.4, 2672.7, 2953.2, 3163.6, 3373.5],
        1511: [1374.3, 1594.3, 1903.9, 2128.3, 2349.7, 2599.9, 2820.3, 3110.8, 3331.1, 3551.1],
        1633: [1472.6, 1702.6, 2022.2, 2256.7, 2488.1, 2748.2, 2978.5, 3279.1, 3509.4, 3739.3],
        1756: [1541.1, 1781.4, 2111.1, 2355.6, 2597.1, 2867.3, 3107.7, 3418.3, 3658.7, 3898.7],
        1878: [1632.9, 1882.9, 2222.6, 2477.2, 2728.6, 3008.8, 3259.2, 3579.8, 3830.2, 4080.2],
        2000: [1701.2, 1961.2, 2310.9, 2575.4, 2836.9, 3127, 3387.4, 3718, 3978.4, 4238.4]
    }
    //------Двухстворчатое окно WDS5 Ламинация
    const objTwoWds5Coloured = {
        900: [1249.52, 1463.59, 1764.14, 1982.62, 2197.47, 2440.94, 2654.76, 2937.8, 3151.62, 3365.7],
        1022: [1334.3, 1558.1, 1868.3, 2096.5, 2321.1, 2574.2, 2797.7, 3090.5, 3314, 3537.8],
        1144: [1418.6, 1652.1, 1972.1, 2210, 2444.3, 2707.1, 2940.3, 3242.8, 3476, 3709.5],
        1267: [1503.5, 1746.8, 2076.6, 2324.3, 2568.3, 2840.9, 3083.9, 3396.2, 3639.2, 3882.5],
        1389: [1588.1, 1841.1, 2180.6, 2438, 2691.8, 2974, 3226.8, 3548.7, 3801.5, 4054.5],
        1511: [1691.2, 1953.9, 2303.1, 2570.3, 2833.8, 3125.6, 3388.1, 3719.8, 3982.3, 4245],
        1633: [1804.8, 2077.3, 2436.2, 2713, 2986.2, 3287.8, 3559.9, 3901.4, 4173.5, 4446],
        1756: [1889.7, 2172, 2540.7, 2827.3, 3110.3, 3421.6, 3703.5, 4054.7, 4336.7, 4619],
        1878: [1996.2, 2288.1, 2665.5, 2962.9, 3255.6, 3576.5, 3868.2, 4229.1, 4520.8, 4812.8],
        2000: [2080.5, 2382.2, 2770.3, 3076.4, 3378.8, 3709.4, 4010.8, 4381.4, 4682.8, 4984.5]
    }
    //------Двухстворчатое окно WDS6 
    const objTwoWds6 = {
        900: [1067.56, 1251.19, 1525.06, 1713.13, 1897.97, 2112.29, 2296.18, 2550.83, 2734.59, 2918.23],
        1022: [1140.7, 1334.5, 1618.4, 1816.5, 2011.5, 2235.8, 2429.8, 2694.5, 2888.3, 3082.1],
        1144: [1214, 1417.8, 1711.9, 1920.1, 2125.1, 2359.4, 2563.5, 2838.3, 3042.2, 3246],
        1267: [1287.6, 1501.5, 1805.7, 2024.1, 2239.3, 2483.7, 2697.9, 2982.9, 3197, 3410.9],
        1389: [1361.4, 1585.4, 1899.7, 2128.1, 2353.3, 2607.8, 2832.1, 3127.2, 3351.3, 3575.3],
        1511: [1453.9, 1688, 2012.4, 2250.9, 2486.2, 2750.7, 2985.1, 3290.2, 3524.4, 3758.6],
        1633: [1557.3, 1801.5, 2135.9, 2384.5, 2629.4, 2904.4, 3148.9, 3464.1, 3708.4, 3952.6],
        1756: [1630.8, 1885.2, 2229.7, 2488.5, 2744.1, 3028.7, 3283.3, 3608.7, 3863.1, 4117.5],
        1878: [1727.3, 1991.7, 2346.4, 2615.2, 2880.9, 3175.5, 3440.2, 3775.7, 4040.2, 4304.6],
        2000: [1800.4, 2074.9, 2439.6, 2718.5, 2994.2, 3298.9, 3573.7, 3919.2, 4193.8, 4468.3]
    }
    //------Двухстворчатое окно WDS6 Ламинация
    const objTwoWds6Coloured = {
        900: [1167.56, 1351.19, 1625.06, 1813.13, 1997.97, 2212.29, 2396.18, 2650.83, 2834.59, 3018.23],
        1022: [1240.7, 1434.5, 1718.4, 1916.5, 2111.5, 2335.8, 2529.8, 2794.5, 2988.3, 3182.1],
        1144: [1314, 1517.8, 1811.9, 2020.1, 2225.1, 2459.4, 2663.5, 2938.3, 3142.2, 3356],
        1267: [1487.6, 1701.5, 2005.7, 2224.1, 2439.3, 2683.7, 2897.9, 3182.9, 3397, 3610.9],
        1389: [1461.4, 1685.4, 1999.7, 2228.1, 2453.3, 2707.8, 2932.1, 3227.2, 3451.3, 3675.3],
        1511: [1553.9, 1788, 2112.4, 2350.9, 2586.2, 2850.7, 3085.1, 3390.2, 3624.4, 3858.6],
        1633: [1657.3, 1901.5, 2235.9, 2484.5, 2729.4, 3004.4, 3248.9, 3564.1, 3808.4, 4052.6],
        1756: [1730.8, 1985.2, 2329.7, 2588.5, 2844.1, 3128.7, 3383.3, 3708.7, 3963.1, 4217.5],
        1878: [1827.3, 2091.7, 2446.4, 2715.2, 2980.9, 3275.5, 3540.2, 3875.7, 4140.2, 4404.6],
        2000: [1900.4, 2174.9, 2539.6, 2818.5, 3094.2, 3398.9, 3673.7, 4019.2, 4293.8, 4568.3]
    }
    //------Двухстворчатое окно WDS7 
    const objTwoWds7 = {
        900: [1203.95, 1408.43, 1705.49, 1914.51, 2120.23, 2356.1, 2560.85, 2838.19, 3042.8, 3247.28],
        1022: [1286.32, 1501.14, 1808.55, 2027.91, 2243.96, 2490.12, 2705.2, 2992.89, 3207.84, 3422.66],
        1144: [1368.82, 1593.97, 1911.72, 2141.42, 2367.81, 2624.26, 2849.68, 3147.71, 3372.99, 3598.15],
        1267: [1451.59, 1687.18, 2015.35, 2255.47, 2492.29, 2759.11, 2994.96, 3303.41, 3539.12, 3774.71],
        1389: [1534.59, 1780.52, 2119.02, 2369.5, 2616.65, 2893.75, 3139.94, 3458.73, 3704.78, 3950.71],
        1511: [1636.83, 1893.1, 2241.94, 2502.75, 2760.25, 3047.63, 3304.17, 3633.3, 3889.69, 4145.95],
        1633: [1750.19, 2016.79, 2375.98, 2647.13, 2914.97, 3212.64, 3479.51, 3818.97, 4085.71, 4352.32],
        1756: [1832.97, 2110, 2479.61, 2761.18, 3039.45, 3347.49, 3624.78, 3974.68, 4251.84, 4528.87],
        1878: [1915.72, 2203.09, 2583.05, 2874.96, 3163.56, 3481.89, 3769.53, 4129.76, 4417.26, 4704.63],
        2000: [2021.49, 2319.2, 2709.49, 3011.75, 3310.69, 3639.3, 3937.28, 4307.85, 4605.69, 4903.4]
    }
    //------Двухстворчатое окно WDS7 Ламинация
    const objTwoWds7Coloured = {
        900: [1557.98, 1825.59, 2183.8, 2456.13, 2724.96, 3023.2, 3290.83, 3630.53, 3898.15, 4166.03],
        1022: [1665.19, 1942.93, 2311.25, 2593.69, 2872.65, 3180.95, 3458.69, 3808.51, 4086.25, 4364.25],
        1144: [1772, 2059.86, 2438.3, 2730.86, 3019.92, 3338.29, 3626.15, 3986.08, 4273.94, 4562.06],
        1267: [1879.49, 2177.55, 2566.19, 2868.95, 3168.21, 3496.73, 3794.78, 4164.92, 4462.97, 4761.29],
        1389: [1986.67, 2294.84, 2693.6, 3006.47, 3315.86, 3654.43, 3962.61, 4342.86, 4651.03, 4959.47],
        1511: [2112.92, 2431.2, 2840.08, 3163.07, 3482.56, 3831.2, 4149.49, 4539.87, 4858.16, 5176.7],
        1633: [2250.32, 2578.73, 2997.71, 3330.82, 3660.43, 4019.14, 4347.54, 4748.03, 5076.44, 5405.1],
        1756: [2357.81, 2696.42, 3125.6, 3468.92, 3808.72, 4177.58, 4516.18, 4926.87, 5265.47, 5604.33],
        1878: [2464.62, 2813.34, 3252.65, 3606.07, 3956, 4334.92, 4683.64, 5104.44, 5453.16, 5802.14],
        2000: [2594.46, 2953.3, 3402.72, 3766.26, 4126.31, 4515.28, 4874.12, 5305.04, 5663.87, 6022.98]
    }
    ////////Function for Disabled/////////////////////
    function checkSelectTwo() {
        const errorTwo = document.getElementById('errorTwo');
        const allSelectsTwo = document.querySelectorAll('.form-inputTwo');
        allSelectsTwo.forEach((sel) => {
            let selNum = sel.selectedIndex;
            if (selNum === 0) {
                sel.classList.add('invalid');
                errorTwo.innerText = 'Пожалуйста, Выберите необходимые параметры';
            } if (selNum > 0) {
                sel.classList.remove('invalid');
                errorTwo.innerText = '';
            }
        })
    };

    function calculateTwo(inputHeightTwo, inputWidthTwo) {
        let h2 = heightAmountTwo.findIndex(elem => elem >= inputHeightTwo);
        let w2 = widthAmountTwo.findIndex(elem => elem >= inputWidthTwo);
        let hTwo = h2 - 1;
        let wTwo = w2 - 1;
        let maxElTwo = Math.max(...heightAmountTwo);
        let maxElTwoH = heightAmountTwo.indexOf(maxElTwo);
        let maxElT = Math.max(...widthAmountTwo);
        let maxElTwoW = widthAmountTwo.indexOf(maxElT);

        if (h2 === 0 && w2 > 0) {
            price = obj[widthAmountTwo[wTwo]][h2];
        } if (h2 === 0 && w2 == maxElTwoW) {
            price = obj[widthAmountTwo[w2]][h2];
        } if (h2 === 0 && w2 === 0) {
            price = obj[widthAmountTwo[w2]][h2];
        } if (w2 === 0 && h2 > 0 && h2 !== maxElTwoH) {
            price = obj[widthAmountTwo[w2]][hTwo];
        } if (w2 === 0 && h2 === maxElTwoH) {
            price = obj[widthAmountTwo[w2]][h2];
        } if (h2 === maxElTwoH && w2 > 0 && w2 !== maxElTwoW) {
            price = obj[widthAmountTwo[wTwo]][h2];
        } if (h2 > 0 && w2 > 0 && w2 !== maxElTwoW && h2 !== maxElTwoH) {
            price = obj[widthAmountTwo[wTwo]][hTwo];
        } if (h2 === maxElTwoH && w2 === maxElTwoW) {
            price = obj[widthAmountTwo[w2]][h2];
        }

        //////////ADD for counting steklopaket////////////////////////////////
        const steklopaketTwoIndex = steklopaketTwo.options[steklopaketTwo.selectedIndex].index;
        let priceForWhiteTwo = 90;
        let priceforLaminationTwo = 0.4;
        function addStekloPaket() {
            const colourOptionsIndex = colourTwo.options[colourTwo.selectedIndex].index;
            if (steklopaketTwoIndex === 2 && colourOptionsIndex === 1) {
                price += priceForWhiteTwo;
            }
            if (steklopaketTwoIndex === 2 && colourOptionsIndex === 2) {
                price = price + (price * priceforLaminationTwo);
            }
        };
        addStekloPaket();
        n = 0;
        let t = time / (price / step);
        let interval = setInterval(() => {
            n = n + step;
            if (n >= price) {
                clearInterval(interval);
            }
            totalHrnTwo.innerHTML = "Цена от: " + n + " грн."
        }, t);
    };

    buttonTwo.addEventListener('click', function (e) {
        e.preventDefault();
        checkSelectTwo();
        const newWidthTwo = inputWidthTwo.value;
        const newHeightTwo = inputHeightTwo.value;
        calculateTwo(newHeightTwo, newWidthTwo);
        return false;
    });

    // // ----------------------------Калькулятор для Трехстворчатого окна WDS6--------------------------------

    const totalHrnThree = document.getElementById('totalHrnThree');
    const buttonThree = document.getElementById('btnThree');
    const widthAmountThree = [1500, 1667, 1833, 2000, 2167, 2333, 2500, 2667, 2833, 3000];
    const heightAmountThree = [600, 789, 978, 1167, 1356, 1544, 1733, 1922, 2111, 2300];
    const steklopaketThree = document.getElementById('steklopaket3');
    //------Трехстворчатое окно WDS5
    const objThreeWds5 = {
        1500: [1398.04, 1641.09, 1973.92, 2221.62, 2466.24, 2739.41, 2982.97, 3296.73, 3540.29, 3783.33],
        1667: [1486.7, 1743.43, 2089.95, 2351.33, 2609.64, 2896.43, 3153.67, 3481.12, 3738.37, 3995.1],
        1833: [1574.38, 1844.71, 2204.84, 2479.83, 2751.75, 3052.06, 3322.91, 3663.96, 3934.82, 4205.15],
        2000: [1662.84, 1946.86, 2320.68, 2609.35, 2894.96, 3208.88, 3493.42, 3848.16, 4132.7, 4416.72],
        2167: [1770.57, 2068.28, 2455.78, 2758.14, 3057.43, 3384.98, 3683.21, 4051.64, 4349.86, 4647.58],
        2333: [1887.48, 2198.79, 2599.9, 2915.87, 3228.77, 3569.85, 3881.68, 4263.71, 4575.54, 4886.86],
        2500: [1976.08, 2301.08, 2715.88, 3045.53, 3372.12, 3726.81, 4052.33, 4448.05, 4773.57, 5098.57],
        2667: [2064.54, 2403.22, 2831.71, 3175.05, 3515.32, 3883.63, 4222.84, 4632.25, 4971.46, 5310.15],
        2833: [2174.98, 2527.27, 2969.36, 3326.3, 3680.18, 4062.02, 4414.84, 4837.86, 5190.66, 5542.97],
        3000: [2263.19, 2629.17, 3084.95, 3455.58, 3823.15, 4218.6, 4585.1, 5021.8, 5388.31, 5754.29]
    }
    //------Трехстворчатое окно WDS5 Ламинация
    const objThreeWds5Coloured = {
        1500: [1727.45, 2025.27, 2409.56, 2711.89, 3010.49, 3337.25, 3634.81, 4001.72, 4299.28, 4597.1],
        1667: [1835.38, 2146.5, 2544.09, 2859.72, 3171.62, 3511.6, 3822.46, 4202.66, 4513.52, 4824.63],
        1833: [1942.87, 2267.2, 2678.01, 3006.85, 3331.97, 3685.1, 4009.18, 4402.6, 4726.68, 5051],
        2000: [2050.37, 2388, 2812.11, 3154.25, 3492.66, 3859.02, 4196.39, 4603.11, 4940.48, 5278.11],
        2167: [2177.02, 2527.94, 2965.34, 3320.78, 3672.5, 4052.08, 4402.75, 4822.77, 5173.44, 5524.36],
        2333: [2312.72, 2676.87, 3127.48, 3496.15, 3861.07, 4253.8, 4617.69, 5050.92, 5414.81, 5778.95],
        2500: [2421.02, 2798.46, 3262.38, 3644.34, 4022.56, 4428.52, 4805.7, 5252.23, 5629.42, 6006.86],
        2667: [2528.78, 2919.52, 3396.73, 3791.98, 4183.5, 4602.69, 4993.17, 5453, 5843.49, 6234.22],
        2833: [2658.12, 3062.07, 3552.51, 3960.98, 4365.72, 4798.05, 5201.75, 5674.79, 6078.5, 6482.45],
        3000: [2765.62, 3182.88, 3686.61, 4108.38, 4526.41, 4971.97, 5388.97, 5875.31, 6292.31, 6709.56]
    }
    //------Трехстворчатое окно WDS6 
    const objThreeWds6 = {
        1500: [1471.97, 1734.12, 2086.5, 2353.08, 2616.3, 2908.72, 3171.13, 3504.3, 3766.44, 4028.59],
        1667: [1566.8, 1842.7, 2208.9, 2489.3, 2766.3, 3072.5, 3348.7, 3695.6, 3971.6, 4247.5],
        1833: [1660.6, 1950.3, 2330.2, 2624.3, 2915, 3234.8, 3524.7, 3885.4, 4175, 4464.7],
        2000: [1755.3, 2058.7, 2452.4, 2760.3, 3064.8, 3398.3, 3702, 4076.5, 4380, 4683.4],
        2167: [1869.4, 2186.6, 2594.1, 2915.8, 3234.1, 3581.3, 3898.8, 4287.1, 4604.3, 4921.6],
        2333: [1992.7, 2323.6, 2744.8, 3080.2, 3412.2, 3773.1, 4104.3, 4506.3, 4837.2, 5168.2],
        2500: [2087.4, 2432.2, 2867.2, 3216.4, 3562.2, 3936.8, 4281.8, 4697.5, 5042.3, 5387],
        2667: [2182.1, 2540.6, 2989.4, 3352.4, 3712, 4100.3, 4459.1, 4888.7, 5247.2, 5605.8],
        2833: [2298.9, 2671.1, 3133.6, 3510.3, 3883.6, 4285.6, 4658.1, 5101.4, 5473.6, 5845.9],
        3000: [2393.2, 2779.3, 3255.6, 3646.1, 4033.2, 4448.9, 4835.2, 5292.2, 5678.3, 6064.3]
    }
    //------Трехстворчатое окно WDS6 Ламинация
    const objThreeWds6Coloured = {
        1500: [1571.97, 1834.12, 2186.5, 2453.08, 2716.3, 3008.72, 3271.13, 3604.3, 3866.44, 4128.59],
        1667: [1566.8, 1942.7, 2308.9, 2589.3, 2866.3, 3172.5, 3448.7, 3795.6, 4071.6, 4347.5],
        1833: [1760.6, 2050.3, 2430.2, 2724.3, 3015, 3334.8, 3624.7, 3985.4, 4275, 4564.7],
        2000: [1855.3, 2158.7, 2552.4, 2860.3, 3164.8, 3498.3, 3802, 4176.5, 4480, 4783.4],
        2167: [1969.4, 2286.6, 2694.1, 3015.8, 3334.1, 3681.3, 3998.8, 4387.1, 4704.3, 5021.6],
        2333: [2092.7, 2423.6, 2844.8, 3180.2, 3512.2, 3873.1, 4204.3, 4606.3, 4937.2, 5268.2],
        2500: [2187.4, 2232.2, 2967.2, 3316.4, 3662.2, 4036.8, 4381.8, 4797.5, 5142.3, 5487],
        2667: [2282.1, 2640.6, 3089.4, 3452.4, 3812, 4200.3, 4559.1, 4988.7, 5347.2, 5705.8],
        2833: [2398.9, 2771.1, 3233.6, 3610.3, 3983.6, 4385.6, 4758.1, 5201.4, 5573.6, 5945.9],
        3000: [2493.2, 2879.3, 3355.6, 3746.1, 4133.2, 4548.9, 4935.2, 5392.2, 5778.3, 6164.3]
    }
    //------Трехстворчатое окно WDS7 
    const objThreeWds7 = {
        1500: [1675.07, 1964.66, 2346.83, 2640.97, 2931.66, 3252.19, 3542.05, 3904.51, 4194.09, 4483.68],
        1667: [1781.55, 2085.29, 2481.62, 2789.91, 3094.76, 3429.37, 3733.38, 4109.99, 4413.73, 4717.48],
        1833: [1887, 2204.81, 2615.21, 2937.57, 3256.48, 3605.09, 3923.17, 4313.85, 4631.66, 4949.47],
        2000: [1993.28, 2325.25, 2749.8, 3086.32, 3419.39, 3782.08, 4114.31, 4519.14, 4851.11, 5183.08],
        2167: [2119.58, 2465.7, 2904.42, 3255.07, 3602.3, 3979.06, 4325.46, 4744.44, 5090.56, 5436.68],
        2333: [2255.18, 2615.37, 3068.15, 3432.88, 3794.17, 4184.94, 4545.39, 4978.45, 5338.63, 5698.83],
        2500: [2361.69, 2736.03, 3202.97, 3581.85, 3957.29, 4362.14, 4736.75, 5183.96, 5558.3, 5932.65],
        2667: [2467.98, 2856.47, 3337.56, 3730.6, 4120.2, 4539.12, 4927.89, 5389.25, 5777.74, 6166.25],
        2833: [2596.96, 2999.52, 3494.68, 3901.79, 4305.46, 4738.38, 5141.21, 5616.64, 6019.21, 6421.78],
        3000: [2702.98, 3119.7, 3629.01, 4050.27, 4468.09, 4915.09, 5332.09, 5821.67, 6238.39, 6655.11]
    }
    //------Трехстворчатое окно WDS7 Ламинация
    const objThreeWds7Coloured = {
        1500: [2157.26, 2522.32, 2977.97, 3347.74, 3714.14, 4109.31, 4474.37, 4911.64, 5276.71, 5642.03],
        1667: [2293.33, 2672.24, 3141.74, 3525.35, 3905.6, 4314.54, 4693.46, 5144.58, 5523.5, 5902.66],
        1833: [2428.9, 2821.57, 3304.84, 3702.21, 4096.23, 4518.87, 4911.55, 5376.44, 5769.11, 6162.05],
        2000: [2564.52, 2971.04, 3468.15, 3879.39, 4287.24, 4723.66, 5130.19, 5608.92, 6015.44, 6422.23],
        2167: [2720.24, 3140.62, 3651.57, 4076.65, 4498.36, 4948.54, 5368.92, 5861.5, 6281.87, 6702.5],
        2333: [2885.04, 3319.18, 3843.9, 4282.74, 4718.21, 5182.1, 5616.24, 6122.58, 6556.73, 6991.12],
        2500: [3021.66, 3469.64, 4008.21, 4460.91, 4910.23, 5387.88, 5835.87, 6356.07, 6804.05, 7252.3],
        2667: [3157.54, 3619.38, 4171.79, 4638.34, 5101.5, 5592.94, 6054.77, 6588.82, 7050.65, 7512.74],
        2833: [3315.88, 3791.48, 4357.66, 4837.97, 5314.9, 5820.02, 6295.62, 6843.43, 7319.03, 7794.89],
        3000: [3451.5, 3940.95, 4520.98, 5015.13, 5505.91, 6024.81, 6514.26, 7075.92, 7565.36, 8055.07]
    }
    ////////Function for Disabled/////////////////////

    function checkSelectThree() {
        const errorThree = document.getElementById('errorThree');
        const allSelectsThree = document.querySelectorAll('.form-inputThree');
        allSelectsThree.forEach((sel) => {
            let selNum = sel.selectedIndex;
            if (selNum === 0) {
                sel.classList.add('invalid');
                errorThree.innerText = 'Пожалуйста, Выберите необходимые параметры';
            } if (selNum > 0) {
                sel.classList.remove('invalid');
                errorThree.innerText = '';
            }
        })
    };

    function calculateThree(inputHeightThree, inputWidthThree) {
        let h3 = heightAmountThree.findIndex(elem => elem >= inputHeightThree);
        let w3 = widthAmountThree.findIndex(elem => elem >= inputWidthThree);
        let hThree = h3 - 1;
        let wThree = w3 - 1;
        let maxElThree = Math.max(...heightAmountThree);
        let maxElThreeH = heightAmountThree.indexOf(maxElThree);
        let maxElT1 = Math.max(...widthAmountThree);
        let maxElThreeW = widthAmountThree.indexOf(maxElT1);

        if (h3 === 0 && w3 > 0) {
            price = obj[widthAmountThree[wThree]][h3];
        } if (h3 === 0 && w3 == maxElThreeW) {
            price = obj[widthAmountThree[w3]][h3];
        } if (h3 === 0 && w3 === 0) {
            price = obj[widthAmountThree[w3]][h3];
        } if (w3 === 0 && h3 > 0 && h3 !== maxElThreeH) {
            price = obj[widthAmountThree[w3]][hThree];
        } if (w3 === 0 && h3 === maxElThreeH) {
            price = obj[widthAmountThree[w3]][h3];
        } if (h3 === maxElThreeH && w3 > 0 && w3 !== maxElThreeW) {
            price = obj[widthAmountThree[wThree]][h3];
        } if (h3 > 0 && w3 > 0 && w3 !== maxElThreeW && h3 !== maxElThreeH) {
            price = obj[widthAmountThree[wThree]][hThree];
        } if (h3 === maxElThreeH && w3 === maxElThreeW) {
            price = obj[widthAmountThree[w3]][h3];
        }
        //////////ADD for counting steklopaket////////////////////////////////
        const steklopaketThreeIndex = steklopaketThree.options[steklopaketThree.selectedIndex].index;
        let priceForWhiteThree = 160;
        let priceforLaminationThree = 0.38;

        function addStekloPaket() {
            const colourOptionsIndex = colourTwo.options[colourThree.selectedIndex].index;
            if (steklopaketThreeIndex === 2 && colourOptionsIndex === 1) {
                price += priceForWhiteThree;
            } if (steklopaketThreeIndex === 2 && colourOptionsIndex === 2) {
                price = price + (price * priceforLaminationThree);
            }
        };
        addStekloPaket();
        n = 0;
        let t = time / (price / step);
        let interval = setInterval(() => {
            n = n + step;
            if (n >= price) {
                clearInterval(interval);
            }
            totalHrnThree.innerHTML = "Цена от: " + n + " грн."
        }, t);
    };
    buttonThree.addEventListener('click', function (e) {
        e.preventDefault();
        checkSelectThree();
        const newWidthThree = inputWidthThree.value;
        const newHeightThree = inputHeightThree.value;
        calculateThree(newHeightThree, newWidthThree);
        return false;
    });
});