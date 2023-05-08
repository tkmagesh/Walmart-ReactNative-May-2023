
function add(/*  */){
    /*  */
}

test("add(10,20) => 30", function(){
    var expectedResult = 30;
    var actualResult = add(10,20)
    expect(actualResult).toBe(expectedResult)
})

test("add('10',20) => 30", function () {
    var expectedResult = 30;
    var actualResult = add("10", 20)
    expect(actualResult).toBe(expectedResult)
})

test("add('abc',20) => 20", function () {
    var expectedResult = 20;
    var actualResult = add("abc", 20)
    expect(actualResult).toBe(expectedResult)
})

test("add(10) => 10", function () {
    var expectedResult = 10;
    var actualResult = add(10)
    expect(actualResult).toBe(expectedResult)
}) 

test("add(10,20,30,40,50) => 150", function () {
    var expectedResult = 150;
    var actualResult = add(10,20,30,40,50)
    expect(actualResult).toBe(expectedResult)
}) 

test("add([10,20,30],[40,50,60]) //=> 210", function(){
    var expectedResult = 210
    var actualResult = add([10, 20, 30], [40, 50, 60])
    expect(actualResult).toBe(expectedResult)
})

test("add([10,'20',30],[40,50,'abc']) //=> 150", function () {
    var expectedResult = 150
    var actualResult = add([10, '20', 30], [40, 50, 'abc'])
    expect(actualResult).toBe(expectedResult)
})

test("add([10,20,30],[['abc',50,'60'],70]) //=> 240", function () {
    var expectedResult = 240
    var actualResult = add([10, 20, 30], [['abc', 50, '60'], 70])
    expect(actualResult).toBe(expectedResult)
})

test('add(function () { return 10; }, function () { return 20; }) //=> 30', function () {
    var expectedResult = 30;
    var actualResult = add(function () { return 10; }, function () { return 20; }) 
    expect(expectedResult).toBe(actualResult)
})

test('add(function () { return [10, 20, "abc"]; }, function () { return [40, 50, "60"]; }) //=> 180', function () {
    var expectedResult = 180;
    var actualResult = add(function () { return [10, 20, "abc"]; }, function () { return [40, 50, "60"]; })
    expect(expectedResult).toBe(actualResult)
})

test('add([function () { return [10, 20, "abc"]; }, function () { return [40, 50, "60"]; }]) //=> 180', function () {
    var expectedResult = 180;
    var actualResult = add([function () { return [10, 20, "abc"]; }, function () { return [40, 50, "60"]; }])
    expect(expectedResult).toBe(actualResult)
})

test('add(function () { return [function () { return [10, 20, "abc"]; }, function () { return [40, 50, "60"]; }]; }) //=> 180', function () {
    var expectedResult = 180;
    var actualResult = add(function () { return [function () { return [10, 20, "abc"]; }, function () { return [40, 50, "60"]; }]; }) //=> 180
    expect(expectedResult).toBe(actualResult)
})




