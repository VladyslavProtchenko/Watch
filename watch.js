
const sq = document.querySelectorAll('.sq');


let day = new Date();
    let hours = day.getMinutes();
    let minutes = day.getSeconds();



let i = 0;

for(const item of sq){
    i++;
    item.classList.add(i);
}
//_______________________ЦИФРЫ___________________________________
let a = {
    a1: [26,47,68,89,110],
    a2: [24,25,26,47,66,67,68,87,108,109,110],
    a3: [24,25,26,47,66,67,68,89,108,109,110],
    a4: [24,26,45,47,66,67,68,89,110],
    a5: [24,25,26,45,66,67,68,89,108,109,110],
    a6: [24,25,26,45,66,67,68,87,89,108,109,110],
    a7: [24,25,26,47,68,89,110],
    a8: [24,25,26,45,47,66,67,68,87,89,108,109,110],
    a9: [24,25,26,45,47,66,67,68,89,108,109,110],
    a0: [24,25,26,45,47,66,68,87,89,108,109,110]
}

let b = {
    b1: a.a1.map(num=> num + 4),
    b2: a.a2.map(num=> num + 4),
    b3: a.a3.map(num=> num + 4),
    b4: a.a4.map(num=> num + 4),
    b5: a.a5.map(num=> num + 4),
    b6: a.a6.map(num=> num + 4),
    b7: a.a7.map(num=> num + 4),
    b8: a.a8.map(num=> num + 4),
    b9: a.a9.map(num=> num + 4),
    b0: a.a0.map(num=> num + 4),
}

let c = {
    c1: a.a1.map(num=> num + 10),
    c2: a.a2.map(num=> num + 10),
    c3: a.a3.map(num=> num + 10),
    c4: a.a4.map(num=> num + 10),
    c5: a.a5.map(num=> num + 10),
    c6: a.a6.map(num=> num + 10),
    c7: a.a7.map(num=> num + 10),
    c8: a.a8.map(num=> num + 10),
    c9: a.a9.map(num=> num + 10),
    c0: a.a0.map(num=> num + 10),
}

let d = {
    d1: a.a1.map(num=> num + 14),
    d2: a.a2.map(num=> num + 14),
    d3: a.a3.map(num=> num + 14),
    d4: a.a4.map(num=> num + 14),
    d5: a.a5.map(num=> num + 14),
    d6: a.a6.map(num=> num + 14),
    d7: a.a7.map(num=> num + 14),
    d8: a.a8.map(num=> num + 14),
    d9: a.a9.map(num=> num + 14),
    d0: a.a0.map(num=> num + 14),
}

//____________________ФУНКЦИИ ЦИФР_______________________________

function one(arr, num) {
    let el;
    let an;
    

    if(arr == a) {
        an = `a${num}`;
        el = a[an];
           
        if(num == 0){
            anClean = `a${9}`;
        } else {
            anClean = `a${num-1}`;
        }
        elClean = a[anClean];


    } else if(arr == b) {
        an = `b${num}`
        el = b[an]
        
        if(num == 0){
            anClean = `b${9}`;
        } else {
            anClean = `b${num-1}`;
        }
        elClean = b[anClean];



    } else if(arr == c) {
        an = `c${num}`
        el = c[an]

        if(num == 0){
            anClean = `c${9}`;
        } else {
            anClean = `c${num-1}`;
        }
        elClean = c[anClean];


    } else if(arr == d) {
        an = `d${num}`
        el = d[an];

        if(an == 'd0'){
            anClean = `d${9}`;
            an = `d${num}`
            el = d[an];
        } else if(num != 0){
            anClean = `d${num-1}`;
            an = `d${num}`
            el = d[an];
        }
        elClean = d[anClean];
    
        console.log(num)
        console.log(anClean);
        console.log(an);

    }

    

    for(let y=0; y<sq.length; y++) {
        if(elClean[y]) {
            let clear = elClean[y]-1;
    sq[clear].style.boxShadow = `0 0 10px #101010`;
    sq[clear].style.backgroundColor = '#1d1d1d';
        }
            sq[52].style.backgroundColor = 'red';
            sq[94].style.backgroundColor = 'red';
            
        
    }
    for(let y=0;y<sq.length;y++) {
        if(el[y]) {
            let item = el[y]-1;
    sq[item].style.boxShadow = `0 0 2px red, 0 0 5px #000`;
    sq[item].style.backgroundColor = 'red';
        }
    }
    
}


function time() {
    console.log(new Date());
    
    let day = new Date();
    let hours = day.getHours();
    let minutes = day.getMinutes();
    

    let hour = (""+hours).split("").map(Number);
    if(hour.length<2) {
        hours.unshift(0);
    }
    let h1 = hour[0] || 0;
    let h2 = hour[1] || 0;

    let minute = (""+minutes).split("").map(Number);
    if(minute.length<2) {
        minute.unshift(0);
    }
    let m1 = minute[0] || 0;
    let m2 = minute[1] || 0;
    console.log(hour,minute);
    
    one(a,h1);
    one(b,h2);
    one(c,m1);
    one(d,m2);
}
setInterval(()=>{
    time();
},1000);
    // one(a,0);
    // one(b,6);
    // one(c,0);
    // one(d,0);



