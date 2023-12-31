document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.getElementById('next_button');
    const previousButton = document.getElementById('previous_button');
    const gradientBox = document.getElementsByClassName('gradient_display')[0];
    const leftColourBox = document.getElementsByClassName('left_colour_box')[0];
    const rightColourBox = document.getElementsByClassName('right_colour_box')[0];
    const rotate = document.getElementById('rotate');
    
    const gradientList = [
        ['#FF6B81', '#C774E7'],
        ['#5E22D6', '#45B8C7'],
        ['#C81F83', '#F37094'],
        ['#00416A', '#E4E5E6'],
        ['#ffe259', '#ffa751'],
        ['#799F0C', '#ACBB78'],
        ['#334d50', '#cbcaa5'],
        ['#F7F8F8', '#ACBB78'],
        ['#00416A', '#E4E5E6']
    ];
    let currentGradientIndex = 0;

    function setGradient() {
        gradientBox.style.background = `linear-gradient(to right, ${gradientList[currentGradientIndex][0]}, ${gradientList[currentGradientIndex][1]})`;
        leftColourBox.style.backgroundColor = gradientList[currentGradientIndex][0];
        rightColourBox.style.backgroundColor = gradientList[currentGradientIndex][1];
    }

    nextButton.addEventListener('click', function () {
        currentGradientIndex = (currentGradientIndex + 1) % gradientList.length;
        setGradient();
    });

    previousButton.addEventListener('click', function () {
        currentGradientIndex = (currentGradientIndex - 1 + gradientList.length) % gradientList.length;
        setGradient();
    });

    const rotation = [
        'to bottom', 'to bottom left', 'to left', 'to top left', 'to top', 'to top right', 'to right', 'to bottom right'
    ];
    let currentRotationIndex = 0;

    rotate.addEventListener('click', function (){
        currentRotationIndex++;

        gradientBox.style.background = `linear-gradient(${rotation[currentRotationIndex]}, ${gradientList[currentGradientIndex][0]}, ${gradientList[currentGradientIndex][1]})`;
        
        if(currentRotationIndex == 7){
            currentRotationIndex = 0;
        };

    });




    setGradient();
});