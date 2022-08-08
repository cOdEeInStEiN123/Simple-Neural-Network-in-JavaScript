
// Defining Inputs and Weights 
let input = [] 
let weights = [] 
let desiredResult = 0 
let rateOfLearning = 0
let iterations = 0
let neuralNetworkResult = 0

const inputsLabelEl = document.getElementById("inputsLabel")
let inputsFieldZero = document.getElementById("inputsField0")
let inputsFieldOne = document.getElementById("inputsField1")
let inputsFieldTwo = document.getElementById("inputsField2")
let inputsFieldThree = document.getElementById("inputsField3")

const weightsLabelEl = document.getElementById("weightsLabel")
let weightsFieldZero = document.getElementById("weightsField0")
let weightsFieldOne = document.getElementById("weightsField1")
let weightsFieldTwo = document.getElementById("weightsField2")
let weightsFieldThree = document.getElementById("weightsField3")

let calculateResultsEl = document.getElementById("calculateResults")
let iterationsFieldEl = document.getElementById("iterationsField")
let rateOfLearningFieldEl = document.getElementById("rateOfLearningField")
let desiredResultFieldEl = document.getElementById("desiredResultField")


// Main function that takes the Inputs and Weights and calculate an Output 
// Multibly each weight/input pair and then add the result 
function NeuralNetwork(inputArr, weightArr) {
    let result = 0 
    inputArr.forEach(function (inputVal, weightIndex) {
        layerValue = inputVal * weightArr[weightIndex]
        result += layerValue 
    })
    return (result.toFixed(2)) 
}

function error(Correct, Current) {
    return (Correct - Current).toFixed(2) 
}

function learn(inputArr, weightArr) {
    weightArr.forEach(function (weight, index, weights) {
        if (inputArr[index] > 0) {
            weights[index] = parseFloat(weight) + parseFloat(rateOfLearning)
        }
    })
}

function train (iterations) { 
    for (i = 0; i < iterations; i++) { 
        neuralNetworkResult = NeuralNetwork(input, weights) 
        console.log("Neural Net output: " + neuralNetworkResult + " Error: " + error(desiredResult, neuralNetworkResult) + " Weight Vector: " + weights);

        learn(input, weights) 

        calculateResultsEl.innerText += "Neural Net output: " + neuralNetworkResult + " - " + " Error: " + error(desiredResult, neuralNetworkResult) + " - " +  " Weight Vector: " + weights + "\n" 
    }
}


// Eventlistener 
document.addEventListener("click", function(evnt){
    if (evnt.target.id == "traing-btn") {
        // console.log(evnt.target.id);
        
        input = [] 
        input.push(inputsFieldZero.value, inputsFieldOne.value, inputsFieldTwo.value, inputsFieldThree.value)
        
        weights = [] 
        weights.push(weightsFieldZero.value, weightsFieldOne.value, weightsFieldTwo.value, weightsFieldThree.value)

        iterations = iterationsFieldEl.value 
        rateOfLearning = rateOfLearningFieldEl.value 
        desiredResult = desiredResultFieldEl.value 

        calculateResultsEl.innerText = "" 
        train(iterations)

    }

})
