var content = anime({
    targets: '.content',
    translateY: -20,
    delay: anime.stagger(150) // increase delay by 100ms for each elements.
});


var exheading = anime({
    targets: '.exheading, .form-group',
    translateY: [50,-10],
    duration: 1000,
    opacity: [0, 1],
    delay: anime.stagger(100, {easing: 'easeOutQuad'}),
});

var welheader = anime({
    targets: '.heading',
    scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
})

var age = anime({
    targets: '.count',
    innerHTML: [0, 18], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places 
    duration: 2000
});

var animation = anime({
    targets: '.controls',
    translateX: -40,
    scale: 1.05,
    easing: 'easeInOutExpo',
    direction: 'alternate',
    opacity: [0, 1],
    duration: 2000,
    loop: false,
    autoplay: true
});

var buttons = anime({
    targets: '.btn',
    translateX: [300, 0],
    opacity: [0, 1],
    delay: anime.stagger(300) // increase delay by 100ms for each elements.
});

var s2left = anime({
    targets: '.s2left',
    translateX: [-270, 0],
    easing: 'easeInOutSine',
    opacity: [0, 1],
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
});

var s2right = anime({
    targets: '.s2right',
    translateX: 270,
    direction: 'reverse',
    easing: 'easeInOutSine',
    opacity: [1, 0],
    delay: anime.stagger(100)
});

var contact = anime({
    targets: '.icons',
    translateY: [20, -30],
    scale: 1.05,
    easing: 'easeInOutExpo',
    opacity: [0, 1],
    duration: 2000,
});

var yoga = anime({
    targets: '.s3bgimg',
    translateY: [0, 100],
    easing: 'easeInOutExpo',
    opacity: [0, 1]
});

var yogamat = anime({
    targets: '.yoga-mat',
    translateY: [15,40],
    direction: 'alternate',
    easing: 'easeInOutSine',
    loop: true,
    rotate: [-2, 2]
});

var ycount = anime({
    targets: '.yogacount',
    innerHTML: [0, 5], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places 
    duration: 1000,
    delay: 500
});

var shoe = anime({
    targets: '.sport-shoe',
    translateY: [-10,10],
    direction: 'alternate',
    easing: 'easeInOutSine',
    loop: true
});

var run = anime({
    targets: '.s4bgimg',
    translateX: [-30, 2],
    easing: 'easeInOutExpo',
    opacity: [0, 1]
});

var rcount = anime({
    targets: '.runcount',
    innerHTML: [0, 8], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places 
    duration: 1000,
    delay: 500
});

var logo = anime({
    targets: ['#Logo'],
    translateX: [500, 0],
    easing: 'easeInOutExpo',
    duration: 2500,
    scale: [1.5,1],
    delay: 1000,
    opacity: [0,1]
  });

var header = anime({
    targets: '.staggering-start-value-demo .el',
    translateX: 270,
    delay: anime.stagger(100, {start: 500}) // delay starts at 500ms then increase by 100ms for each elements.
  });

  var qn = anime({
    targets: '#qn',
    translateY: [100, 0],
    easing: 'easeInOutExpo',
    opacity: [0, 1],
    delay: 2500,
    duration: 1000
});

var wf = anime({
    targets: '.welc-form',
    translateY: [-100, 0],
    easing: 'easeInOutExpo',
    opacity: [0, 1],
    delay: 2500,
    duration: 1000
});

var s2ex = anime({
    targets: '.s2ex',
    opacity: [0, 1],
    delay: anime.stagger(300),
    scale: [0.1,1]
});

var s2 = anime({
    targets: '.s2',
    translateY: [50, 0],
    easing: 'easeInOutExpo',
    opacity: [0, 1],
    delay: 1000,
    duration: 1000
});

$('.navbar').hide();

$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#000000', 'rgba(255, 127, 127, 0.5)', '#FFFFFF', '#FFFFFF', '#304554'],
        navigationPosition: 'right',
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],

        afterLoad: function (origin, destination, direction) {
            if (destination.index == 0) {
                logo.play();
                welheader.play();
                qn.play();
                wf.play();
                $('.navbar').hide();
            }

            if (destination.index == 1) { //section 2
                s2ex.play();
                s2.play();
                $('.navbar').show();
            }
            if (destination.index == 2) {
                exheading.play();
                yoga.play();
                yogamat.play();
                ycount.play();
                $('.navbar').show();
            }
            if (destination.index == 3) {
                exheading.play();
                rcount.play();
                shoe.play();
                run.play();
                $('.navbar').show();
            }
        }

    });
    
    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
});

function getUsername(){
    var name = document.getElementById("fname").value;
    document.getElementById("displayName").innerHTML = "Welcome, <span style='color:#F57C78'>" + name + "</span>";
}

tippy('#displayName', {
    interactive: true,
    placement: 'bottom',
    arrow: true,
    allowHTML: true,
    content: '<a href="#section1" id="changeName class="changeName">Change Username</a>'
  });


function toggleText() {
    var x = document.getElementById("ans");
    var y = document.getElementById("qn");

    if (x.innerHTML === "What is Exercise Tracker?") {
        x.innerHTML = "What is Exercise Tracker? <br> Exercise Tracker is an online app that helps users keep track of their weekly exercise regime.";
        x.style.marginTop = "-10px";
        x.style.transition = "1s";
        y.style.marginTop = "-50px";
        y.style.transition = "1s";
    } else {
        x.innerHTML = "What is Exercise Tracker?";
        x.style.marginTop = "0px";
        x.style.transition = "1s";
        y.style.marginTop = "0px";
        y.style.transition = "1s";
    }
}

function displayText() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}

const datas = [];
var total = 0;
var requirement = 5;
var requirement2 = 8;

// Yoga Bar Chart
const labels = [
    'Day 1',
    'Day 2',
    'Day 3',
    'Day 4',
    'Day 5',
    'Day 6',
    'Day 7'
];

// Set labels, colours and data
const data = {
    labels: labels,
    datasets: [{
        label: 'Number of Hours',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: datas,

    }]
};

// Configure chart
const config = {
    type: 'line',
    data: data
};

// Render chart in <canvas>
const yogaChart = new Chart(
    document.getElementById('yogaChart'),
    config
);

const runChart = new Chart(
    document.getElementById('runChart'),
    config
);

$(document).ready(function () {
    $("[id='yogaSubmit']").click(function () {
        yogaday1 = parseInt($("#day1").val())
        yogaday2 = parseInt($("#day2").val())
        yogaday3 = parseInt($("#day3").val())
        yogaday4 = parseInt($("#day4").val())
        yogaday5 = parseInt($("#day5").val())
        yogaday6 = parseInt($("#day6").val())
        yogaday7 = parseInt($("#day7").val())

        datas[0] = yogaday1
        datas[1] = yogaday2
        datas[2] = yogaday3
        datas[3] = yogaday4
        datas[4] = yogaday5
        datas[5] = yogaday6
        datas[6] = yogaday7
        yogaChart.update();

        if ($("#day1").val() != "" && $("#day2").val() != "" && $("#day3").val() != "" && $("#day4").val() != "" && $("#day5").val() != "" && $("#day6").val() != "" && $("#day7").val() != "") {
            $("#yogaChartContent").delay(600).fadeToggle(600);
            $("#yogaFormContent").fadeToggle(600);
        }


        total = yogaday1 + yogaday2 + yogaday3 + yogaday4 + yogaday5 + yogaday6 + yogaday7;
        var displayTxt = "";


        if (total >= requirement) {
            displayTxt = "You have pass to do at least 5 hours of yoga this week. You can now proceed to level 2! <br> ";
            $("#nextlvl").css("display", "inline-block");
        } else {
            displayTxt = "You have failed to do at least 5 hours of yoga this week. Try again next week!";
            $("#nextlvl").css("display", "none");
        }

        $("#display").html(
            "Total Hours: " + total.toString() + " Hr <br>" +
            displayTxt
        )
            .hide()
            .fadeIn(200)
            .delay(600)
            .addClass("new")
    });


    $("[id='retry']").click(function () {
        $("#yogaFormContent").delay(600).fadeToggle(600);
        $("#yogaChartContent").fadeToggle(600);
        datas[1] = "";
    });


    var lvl2 = document.getElementById("lvl2");

    $('#nextlvl').click(function () {
        lvl2.style.opacity = "1";
        $("#lvl2-icon").css("display", "none");
        $("#nextlvl").css("display", "inline-block");
        $("#lvl2").css("pointer-events", "visible");
    });
});


// run

$(document).ready(function () {
    $("[id='runSubmit']").click(function () {
        runday1 = parseInt($("#rday1").val())
        runday2 = parseInt($("#rday2").val())
        runday3 = parseInt($("#rday3").val())
        runday4 = parseInt($("#rday4").val())
        runday5 = parseInt($("#rday5").val())
        runday6 = parseInt($("#rday6").val())
        runday7 = parseInt($("#rday7").val())

        datas[0] = runday1
        datas[1] = runday2
        datas[2] = runday3
        datas[3] = runday4
        datas[4] = runday5
        datas[5] = runday6
        datas[6] = runday7
        runChart.update();

        if ($("#rday1").val() != "" && $("#rday2").val() != "" && $("#rday3").val() != "" && $("#rday4").val() != "" && $("#rday5").val() != "" && $("#rday6").val() != "" && $("#rday7").val() != "") {
            $("#runChartContent").delay(600).fadeToggle(600);
            $("#runFormContent").fadeToggle(600);
        }


        total = runday1 + runday2 + runday3 + runday4 + runday5 + runday6 + runday7;
        var displayTxt = "";


        if (total >= requirement2) {
            displayTxt = "You have pass to run at least 8 Km this week. You can now proceed to level 3! <br> ";
            $("#nextlvl3").css("display", "inline-block");
        } else {
            displayTxt = "You have failed to run at least 8 Km this week. Try again next week!";
            $("#nextlvl3").css("display", "none");
        }

        $("#display2").html(
            "Total Distance: " + total.toString() + " Km <br>" +
            displayTxt
        )
            .hide()
            .fadeIn(200)
            .delay(600)
            .addClass("new")
    });


    $("[id='retry']").click(function () {
        $("#runFormContent").delay(600).fadeToggle(600);
        $("#runChartContent").fadeToggle(600);
        datas[1] = "";
    });


    var lvl3 = document.getElementById("lvl3");

    $('#nextlvl3').click(function () {
        lvl3.style.opacity = "1";
        $("#lvl3-icon").css("display", "none");
        $("#nextlvl3").css("display", "inline-block");
        $("#lvl3").css("pointer-events", "visible");
    });
});

