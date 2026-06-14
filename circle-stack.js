await Canvas();

let diameters
const linModifier = createSlider(-0.4,0.4,0,0.0001)
const ampModifier = createSlider(0,5,1,0.0001)
const freqModifier = createSlider(0,1,.25,0.0001)
const shininess = createSlider(0,1,.5,0.0001)
const sizeMod = createSlider(0,2,1,0.0001)
const widthMod = createSlider(1,200,30,1)
const triangle = createCheckbox('',true)
let phaseShift = 0
linModifier.position(0,0).size(windowWidth)
ampModifier.position(0,15).size(windowWidth)
freqModifier.position(0,30).size(windowWidth)
shininess.position(0,45).size(windowWidth)
sizeMod.position(0,60).size(windowWidth)
widthMod.position(0,75).size(windowWidth)
triangle.position(0,90)

angleMode(DEGREES)
function makeDiameters (howMany,bigness) {
    diameters = []
    for (let i = 0; i<=howMany; i++) {
        diameters.push(bigness*(10-linModifier.value*60*i/howMany-ampModifier.value*Math.sin(60*i/howMany*freqModifier.value+phaseShift)))//1.478
    }
}

function drawCircles (diams,width,baseDistance) {
    background(1)
    fill(1)
    strokeWeight(0)
    let layerHeight
    if (windowHeight<windowWidth){
        rotate(90)
    }
    for (let diam = 0; diam<= diams.length; diam++){
        fill((shininess.value*(1-(diams[diam]*width/60-10)/10) + (1-shininess.value)*0.1)/2)
        layerHeight+=Math.sqrt(((diams[diam]+diams[diam-1])/2)**2-(baseDistance/2)**2)
        if (diam == 0){
            if (windowHeight<windowWidth){
                layerHeight=-halfWidth+diams[0]/2
            } else {
                layerHeight=-halfHeight+diams[0]/2
            }
        }
        for (let i = 0; i<=width-diam; i++) {
            circle(-baseDistance*(width-diam)/2+i*baseDistance,layerHeight,sizeMod.value*diams[diam])
        }
    }
}

q5.draw = function () {
    if (triangle.checked){
        makeDiameters(widthMod.value,60/widthMod.value)
        drawCircles(diameters,widthMod.value,600/widthMod.value)
    } else{
        makeDiameters(widthMod.value*5,60/widthMod.value)
        drawCircles(diameters,widthMod.value*5,600/widthMod.value)
    }
    phaseShift+=0.1
}