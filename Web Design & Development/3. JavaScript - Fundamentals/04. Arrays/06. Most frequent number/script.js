﻿taskName = "6. Most frequent element";

function Main(bufferElement) {

    var elements = ReadLine("Enter elements: ", "4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3");

    SetSolveButton(function () {
        ConsoleClear();

        var elementsArray = SplitBySeparator(elements.value, [',', ' ']);
        var allFrequents = FindAllFrequents(elementsArray);
        PrintMostFrequent(allFrequents);
    });
}

function FindAllFrequents(array) {

    if (!Array.isArray(array)) {
        return;
    }

    var occurs = [];

    for (var i = 0; i < array.length; i++)
        occurs[array[i]] = occurs[array[i]] ? occurs[array[i]] + 1 : 1;
    
    return occurs;
}

function PrintMostFrequent(array) {

    var sortedArray = array.slice(0).filter(String);
    sortedArray.sort();

    var mostFrequent = array.indexOf(sortedArray[sortedArray.length - 1]);
    var frequents = sortedArray[sortedArray.length - 1];

    if (mostFrequent != -1 && frequents) {
        WriteLine(Format("Most frequent element is: {0} -> {1} time(s).", mostFrequent, frequents));
    }
    else {
        WriteLine("There is no most frequent element.")
    }
}