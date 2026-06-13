await Canvas();

let diameters = [.0000001]
let ahh = 1
let reset = true

angleMode(DEGREES)

function makeDiameters (howMany,bigness) {
    diameters = [.0000001]
    for (let i = 0; i<=howMany; i++) {
        //diameters.push(1+i) //infinite tunnel (start at 1)
        //diameters.push(1+i**3/3) //makes cool thing with no overlap for a while (start at 1)
        diameters.push((2**bigness)*.0000001*(1.36**i)) //makes PERFECT thing with no overlap (start at 1)
    }
    log(diameters)
}

function drawCircles (diams,symmetry) {
    let xsum = (diams[0]+diams[1])/2
    background(0,0,0)
    fill(1)
    strokeWeight(0)
    noStroke()
    smooth()
    //if (symmetry == 6) {
        circle(0,0,diams[0])
        for (let diam = 1; diam<=diams.length; diam++) {
            //fill((1-diam/diams.length)-0.03*(ahh-1.5))
            fill(windowWidth/xsum/5)
            for (let stage = 0; stage<=symmetry; stage++) {
                rotate(360/symmetry)
                circle(xsum,0,diams[diam])
            }
            //log((xsum*sin(180/symmetry))**2) gtg
            //log(diams[diam]+diams[diam-1])
            //log(xsum)
            
            xsum=Math.sqrt(((diams[diam]+diams[diam+1])/2)**2-(xsum*sin(180/symmetry))**2)+Math.sqrt(xsum**2-(xsum*sin(180/symmetry))**2)
            rotate(90)
        }
    //}3
}

q5.draw = function () {
    if (reset){
        ahh=1.5
        reset=false
    }
    makeDiameters(70,ahh)
    drawCircles(diameters,6)
    ahh+=0.015
    log(ahh)
    if (ahh>=2.38){
        reset=true
    }
}