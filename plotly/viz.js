
function sortbycountrypopulation(data) {
    data.sort((a, b) => a.population - b.population);
}

function run_visualization(data) {
    sortbycountrypopulation(data);

    const top30 = data.slice(-30);

    let countries = top30.map(d => d.country);
    let populations = top30.map(d => d.population);

    countries = countries.reverse();
    populations = populations.reverse();

    
    const margin = {top: 20, right: 30, bottom: 40, left: 90};
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
        .domain(countries)
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(populations)])
        .range([height, 0]);

    svg.selectAll(".bar")
        .data(populations)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d, i) => x(countries[i]))
        .attr("y", d => y(d))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d));

    // Add of the x Axis
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("transform", "rotate(-45)");

    // Add of the y Axis
    svg.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));
}

// Fetch the data and run the visualization
fetch('data.json')
    .then(response => response.json())
    .then(data => run_visualization(data));