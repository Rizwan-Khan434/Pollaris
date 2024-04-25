(function() {
    function click1() {
        var checkbox = document.getElementById('check1');
        checkbox.checked = !checkbox.checked;
    }
    
    function click2() {
        var checkbox = document.getElementById('check2');
        checkbox.checked = !checkbox.checked;
    }
    
    function click3() {
        var checkbox = document.getElementById('check3');
        checkbox.checked = !checkbox.checked;
    }
    
    function click4() {
        var checkbox = document.getElementById('check4');
        checkbox.checked = !checkbox.checked;
    }
    
    function click5() {
        var checkbox = document.getElementById('check5');
        checkbox.checked = !checkbox.checked;
    }

    google.charts.load('current', {
        packages: ['bar'],
    });

    google.charts.setOnLoadCallback(draw);

    let sampleData = {
        products: [
            {
                "id":1,
                "title":"Choice 1",
                "rating": 15,
            },
            {
                "id":2,
                "title":"Choice 2",
                "rating":3,
            },
            {
                "id":3,
                "title":"Choice 3",
                "rating":7,
            },
            {
                "id":4,
                "title":"Choice 4",
                "rating":5,
            },
            {
                "id":5,
                "title":"Choice 5",
                "rating":2,
            } 
        ],
    };

    function draw() {
        var data = new google.visualization.DataTable()

        var cData = google.visualization.arrayToDataTable([
            ['', '']
        ].concat(sampleData.products.map((p) => {
            return [p.title, p.rating];
        })))
        
        var columnChart = new google.charts.Bar(
            document.getElementById('column_chart')
        );

        
        columnChart.draw(cData, {
            width: 600,
            height: 400,
        });
    }
})();
