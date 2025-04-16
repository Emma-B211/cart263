window.onload = async function () {
    console.log("task 7-8");
    let irises = [];
    let irisesWithColors = [];
    let filteredIrises = [];
    let irisesWithColorsSorted = [];
    let possibleColors = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"];

    fetch("iris.json")
        .then(response => response.json())
        .then(data => {
            irises = data; // array of 150 iris objects

            // Object properties (assuming structure from iris datasets)
            // { sepalLength, sepalWidth, petalLength, petalWidth, species }

            // 🌈 map(): Add a random color field
            irisesWithColors = irises.map(iris => {
                return {
                    ...iris,
                    color: possibleColors[Math.floor(Math.random() * possibleColors.length)]
                };
            });

            // 🔍 filter(): Remove sepalWidth >= 4
            filteredIrises = irisesWithColors.filter(iris => iris.sepalWidth < 4);

            // ➕ reduce(): Calculate average petalLength
            const totalPetalLength = irisesWithColors.reduce((acc, iris) => acc + iris.petalLength, 0);
            const averagePetalLength = totalPetalLength / irisesWithColors.length;
            console.log("Average petalLength:", averagePetalLength.toFixed(2));

            // 🔍 find(): Find petalWidth > 1.0
            const widePetal = irisesWithColors.find(iris => iris.petalWidth > 1.0);
            console.log("First iris with petalWidth > 1.0:", widePetal);

            // ❓ some(): Check if any petalLength > 10
            const hasLongPetal = irisesWithColors.some(iris => iris.petalLength > 10);
            console.log("Any iris with petalLength > 10:", hasLongPetal);

            // ❓ some(): Check if petalLength === 4.2
            const hasPetalLength42 = irisesWithColors.some(iris => iris.petalLength === 4.2);
            console.log("Any iris with petalLength == 4.2:", hasPetalLength42);

            // ✅ every(): All petalWidths < 3?
            const allPetalWidthUnder3 = irisesWithColors.every(iris => iris.petalWidth < 3);
            console.log("All irises have petalWidth < 3:", allPetalWidthUnder3);

            // ✅ every(): All sepalWidths > 1.2?
            const allSepalWidthOver12 = irisesWithColors.every(iris => iris.sepalWidth > 1.2);
            console.log("All irises have sepalWidth > 1.2:", allSepalWidthOver12);

            // 🔢 toSorted(): Sort by petalWidth
            irisesWithColorsSorted = irisesWithColors.toSorted((a, b) => a.petalWidth - b.petalWidth);

            // 🎨 Now visualize!
            setupVisualization();
        });


}