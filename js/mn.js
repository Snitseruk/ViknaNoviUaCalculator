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
        start: [heightClosedAverage],
        step: 10,
        orientation: 'vertical',
        direction: 'rtl',
        //tooltips: true,
        connect: true,
        range: {
            'min': heightClosedMin,
            'max': heightClosedMax
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
        start: [widthClosedAverage],
        step: 10,
        orientation: 'horizontal',
        direction: 'ltr',
        connect: true,
        range: {
            'min': widthClosedMin,
            'max': widthClosedMax
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
        inputWidthOne.value = value
    });

    inputWidthOne.addEventListener('change', function () {
        widthSliderOne.noUiSlider.set(this.value);
    });

    // ======== Slider для выбора высоты Двухстворчатого окна 

    const heightSliderTwo = document.querySelector('.height-slider-two');

    noUiSlider.create(heightSliderTwo, {
        start: [widthTwoAverage],
        step: 10,
        orientation: 'vertical',
        direction: 'rtl',
        //tooltips: true,
        connect: true,
        range: {
            'min': heightTwoMin,
            'max': heightTwoMax
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
        start: [widthTwoAverage],
        step: 10,
        orientation: 'horizontal',
        connect: true,
        range: {
            'min': widthTwoMin,
            'max': widthTwoMax
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
        start: [heightThreeAverage],
        step: 10,
        orientation: 'vertical',
        direction: 'rtl',
        //tooltips: true,
        connect: true,
        range: {
            'min': heightThreeMin,
            'max': heightThreeMax
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
        start: [widthThreeAverage],
        step: 10,
        orientation: 'horizontal',
        connect: true,
        range: {
            'min': widthThreeMin,
            'max': widthThreeMax
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
            obj = objOneWds3;
        }else if (profilOneIndex === 2 && colourOptionsIndex === 1) {
            obj = objOneWds5;
        } else if (profilOneIndex === 3 && colourOptionsIndex === 1) {
            obj = objOneWds6;
        } else if (profilOneIndex === 4 && colourOptionsIndex === 1) {
            obj = objOneWds7;
        } else if (profilOneIndex === 5 && colourOptionsIndex === 1) {
            obj = objOneWds8;
        } else if (profilOneIndex === 6 && colourOptionsIndex === 1) {
            obj = objOneWr500;
        } else if (profilOneIndex === 7 && colourOptionsIndex === 1) {
            obj = objOneWr600;
        } else if (profilOneIndex === 1 && colourOptionsIndex === 2) {
            obj = objOneWds3Coloured;
        } else if (profilOneIndex === 2 && colourOptionsIndex === 2) {
            obj = objOneWds5Coloured;
        } else if (profilOneIndex === 3 && colourOptionsIndex === 2) {
            obj = objOneWds6Coloured;
        }else if (profilOneIndex === 4 && colourOptionsIndex === 2) {
            obj = objOneWds7Coloured;
        } else if (profilOneIndex === 5 && colourOptionsIndex === 2) {
            obj = objOneWds8Coloured;
        }else if (profilOneIndex === 6 && colourOptionsIndex === 2) {
            obj = objOneWr500Coloured;
        }else if (profilOneIndex === 7 && colourOptionsIndex === 2) {
            obj = objOneWr600Coloured;
        }

    })

    // --------------------------------------------Смена профиля и цвета двухстворчатое окно----------------------------------------------------------------
    const parametersTwo = document.getElementById('parametersTwo')
    const profilTwo = document.getElementById('profilTwo');
    const colourTwo = document.getElementById('colourTwo');
    let imageTwo = document.querySelector('.pic-two img');

    parametersTwo.addEventListener('change', e => {
        const profilTwoIndex = profilTwo.options[profilTwo.selectedIndex].index;
        const colourOptionsIndexTwo = colourTwo.options[colourTwo.selectedIndex].index;
        imageTwo.src = colourTwo.value;

        if (profilTwoIndex === 1 && colourOptionsIndexTwo === 1) {
            obj = objTwoWds3;
        }else if (profilTwoIndex === 2 && colourOptionsIndexTwo === 1) {
            obj = objTwoWds5;
        } else if (profilTwoIndex === 3 && colourOptionsIndexTwo === 1) {
            obj = objTwoWds6;
        } else if (profilTwoIndex === 4 && colourOptionsIndexTwo === 1) {
            obj = objTwoWds7;
        } else if (profilTwoIndex === 5 && colourOptionsIndexTwo === 1) {
            obj = objTwoWds8;
        } else if (profilTwoIndex === 6 && colourOptionsIndexTwo === 1) {
            obj = objTwoWr500;
        } else if (profilTwoIndex === 7 && colourOptionsIndexTwo === 1) {
            obj = objTwoWr600;
        } else if (profilTwoIndex === 1 && colourOptionsIndexTwo === 2) {
            obj = objTwoWds3Coloured;
        } else if (profilTwoIndex === 2 && colourOptionsIndexTwo === 2) {
            obj = objTwoWds5Coloured;
        } else if (profilTwoIndex === 3 && colourOptionsIndexTwo === 2) {
            obj = objTwoWds6Coloured;
        }else if (profilTwoIndex === 4 && colourOptionsIndexTwo === 2) {
            obj = objTwoWds7Coloured;
        } else if (profilTwoIndex === 5 && colourOptionsIndexTwo === 2) {
            obj = objTwoWds8Coloured;
        }else if (profilTwoIndex === 6 && colourOptionsIndexTwo === 2) {
            obj = objTwoWr500Coloured;
        }else if (profilTwoIndex === 7 && colourOptionsIndexTwo === 2) {
            obj = objTwoWr600Coloured;
        }
    })

    // --------------------------------------------Смена профиля и цвета трёхстворчатое окно----------------------------------------------------------------
    const parametersThree = document.getElementById('parametersThree')
    const profilThree = document.getElementById('profilThree');
    const colourThree = document.getElementById('colourThree');
    let imageThree = document.querySelector('.pic-three img');


    parametersThree.addEventListener('change', e => {

        const profilThreeIndex = profilThree.options[profilThree.selectedIndex].index;
        const colourOptionsIndexThree = colourThree.options[colourThree.selectedIndex].index;
        imageThree.src = colourThree.value;

        if (profilThreeIndex === 1 && colourOptionsIndexThree === 1) {
            obj = objThreeWds3;
        }else if (profilThreeIndex === 2 && colourOptionsIndexThree === 1) {
            obj = objThreeWds5;
        } else if (profilThreeIndex === 3 && colourOptionsIndexThree === 1) {
            obj = objThreeWds6;
        } else if (profilThreeIndex === 4 && colourOptionsIndexThree === 1) {
            obj = objOneWds7;
        } else if (profilThreeIndex === 5 && colourOptionsIndexThree === 1) {
            obj = objThreeWds8;
        } else if (profilThreeIndex === 6 && colourOptionsIndexThree === 1) {
            obj = objThreeWr500;
        } else if (profilThreeIndex === 7 && colourOptionsIndexThree === 1) {
            obj = objThreeWr600;
        } else if (profilThreeIndex === 1 && colourOptionsIndexThree === 2) {
            obj = objThreeWds3Coloured;
        } else if (profilThreeIndex === 2 && colourOptionsIndexThree === 2) {
            obj = objThreeWds5Coloured;
        } else if (profilThreeIndex === 3 && colourOptionsIndexThree === 2) {
            obj = objThreeWds6Coloured;
        }else if (profilThreeIndex === 4 && colourOptionsIndexThree === 2) {
            obj = objThreeWds7Coloured;
        } else if (profilThreeIndex === 5 && colourOptionsIndexThree === 2) {
            obj = objThreeWds8Coloured;
        }else if (profilThreeIndex === 6 && colourOptionsIndexThree === 2) {
            obj = objThreeWr500Coloured;
        }else if (profilThreeIndex === 7 && colourOptionsIndexThree === 2) {
            obj = objThreeWr600Coloured;
        }
    })
    // ----------------------------Калькулятор для глухого окна--------------------------------

    const totalHrnOne = document.getElementById('totalHrnOne');
    const buttonOne = document.getElementById('btnOne');
    const widthAmountOne = Object.values(widthClosed);
	const heightAmountOne = Object.values(heightClosed);
    const objOneWds5 = priceClosed;
	const objOneWds3 = priceClosed3;	
    const objOneWds5Coloured =  priceClosedLamination;
	const objOneWds3Coloured =  priceClosedLamination3;
    const objOneWds6 = priceClosed6;
    const objOneWds6Coloured = priceClosedLamination6;
    const objOneWds7 = priceClosed7;
    const objOneWds7Coloured = priceClosedLamination7;
	const objOneWds8 = priceClosed8;
    const objOneWds8Coloured = priceClosedLamination8;
	const objOneWr500 = priceClosedw5;
    const objOneWr500Coloured = priceClosedLaminationw5;
	const objOneWr600 = priceClosedw5;
    const objOneWr600Coloured = priceClosedLaminationw5;

    const time = 1000;
    const step = 10;
	const steklopaketOne = document.getElementById('steklopaket1');
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
            totalHrnOne.innerHTML = "Цена от: " + price + " грн.";
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

        console.log(price);
        console.log((Math.round(price)));
        console.log(interval);
        console.log(t);

    };
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
    }

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

    const widthAmountTwo = Object.values(widthTwo);
    const heightAmountTwo = Object.values(heightTwo);
    const objTwoWds3 = priceTwo3;
	const objTwoWds3Coloured = priceTwoLamination3;
    const objTwoWds5 = priceTwo;
    const objTwoWds5Coloured = priceTwoLamination;	
    const objTwoWds6 =priceTwo6;
    const objTwoWds6Coloured = priceTwoLamination6;
    const objTwoWds7 = priceTwo7;
    const objTwoWds7Coloured = priceTwoLamination7;
	const objTwoWds8 = priceTwo8;
    const objTwoWds8Coloured = priceTwoLamination8;
	const objTwoWr500 = priceTwow5;
    const objTwoWr500Coloured = priceTwoLaminationw5;
	const objTwoWr600 = priceTwow6;
    const objTwoWr600Coloured = priceTwoLaminationw6;
	const steklopaketTwo = document.getElementById('steklopaket2');
	
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

        console.log(price);
        console.log(interval);
        console.log(t);
    };
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
    const widthAmountThree = Object.values(widthThree);
    const heightAmountThree = Object.values(heightThree);	
    const objThreeWds5 = priceThree;
	const objThreeWds3 = priceThree3;
    const objThreeWds5Coloured = priceThreeLamination;
	const objThreeWds3Coloured = priceThreeLamination3;
    const objThreeWds6 = priceThree6;
    const objThreeWds6Coloured = priceThreeLamination6;
    const objThreeWds7 = priceThree7;
    const objThreeWds7Coloured =priceThreeLamination7;
    const objThreeWds8 = priceThree8;
    const objThreeWds8Coloured =priceThreeLamination8;
	const objThreeWr500 = priceThreew5;
    const objThreeWr500Coloured =priceThreeLaminationw5;
	const objThreeWr600 = priceThreew6;
    const objThreeWr600Coloured =priceThreeLaminationw6;
	const steklopaketThree = document.getElementById('steklopaket3');
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
		const steklopaketThreeIndex = steklopaketThree.options[steklopaketThree.selectedIndex].index;
        let priceForWhiteThree = 160;
        let priceforLaminationThree = 0.38;

        function addStekloPaket() {
            const colourOptionsIndex = colourTwo.options[colourThree.selectedIndex].index;
            if (steklopaketThreeIndex === 2 && colourOptionsIndex === 1) {
                price += priceForWhiteThree;
            }
            if (steklopaketThreeIndex === 2 && colourOptionsIndex === 2) {
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

        console.log(price);
        console.log(interval);
        console.log(n);
    };
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
                errorOne.innerText = '';
            }
        })
    }

    buttonThree.addEventListener('click', function (e) {
        e.preventDefault();
		checkSelectThree();
        const newWidthThree = inputWidthThree.value;
        const newHeightThree = inputHeightThree.value;
        calculateThree(newHeightThree, newWidthThree);
        return false;
    });
});