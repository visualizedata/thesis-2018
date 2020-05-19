var fakedata = [];
var fakedata2 = [];

var fakedataHold = [
    {
        'type': 'compSci',
        'dict': [{'word': 'hello', 'freq': 0.2}, {'word': 'tree', 'freq': 0.2}, {'word': 'guide', 'freq': 0.6}]
    }, {
        'type': 'Security',
        'dict': [{'word': 'hello', 'freq': 0.1}, {'word': 'car', 'freq': 0.3}, {'word': 'guide', 'freq': 0.6}]
    }
];

var fakeTopicHold = [
    {
        'type': 'React',
        'dict': [{'word': 'hello', 'freq': 0.2}, {'word': 'tree', 'freq': 0.2}, {'word': 'guide', 'freq': 0.6}]
    }, {
        'type': 'JavaScript',
        'dict': [{'word': 'hello', 'freq': 0.1}, {'word': 'tree', 'freq': 0.3}, {'word': 'guide', 'freq': 0.6}]
    }, {
        'type': 'CSS',
        'dict': [{'word': 'car', 'freq': 0.4}, {'word': 'tree', 'freq': 0.1}, {'word': 'guide', 'freq': 0.5}]
    }, {
        'type': 'HTML',
        'dict': [{'word': 'car', 'freq': 0.1}, {'word': 'under', 'freq': 0.1}, {'word': 'guide', 'freq': 0.8}]
    }, {
        'type': 'Awesome',
        'dict': [{'word': 'hello', 'freq': 0.1}, {'word': 'under', 'freq': 0.3}, {'word': 'guide', 'freq': 0.6}]
    } 
];


console.log(fakedataHold[0].dict[0].freq);

var dicts = _.pluck(fakedataHold, 'dict');
var values = _.pluck(dicts[0], 'freq');
// var newvalues = _.map(values, function())
console.log(values);


d3.json('data/totalData.json', function(error, data) {
    if (error) throw error;
    
    console.log(data[0].topics);
    
    
    var someData = data.filter(function(d){ return d.topics.length > 0 });
    var k12Data = someData.filter(function(d){ return d.cat === 'k12' });
    var gTopicData = someData.filter(function(d){ return d.cat === 'git_topic' && d.type === 'fork' });
    var repoData = someData.filter(function(d){ return d.cat === 'repository' && d.type === 'fork' });
    var similarities = [ ];
    var similaritiesk = [ ];
    
    gTopicData.forEach(function(element){
        var unique = _.uniq(element.topics);
        similarities.push(unique);
    });
    k12Data.forEach(function(element){
        var unique = _.uniq(element.topics);
        similaritiesk.push(unique);
    });
    
    _.
    
    console.log(similarities);

    
    var uniqueK12 = _.uniq(k12Data);
    
    var uniquegTopic = _.uniq(gTopicData);
    
    var uniqueRepo = _.uniq(repoData);
    

    
    
    console.log(uniquegTopic);
    console.log(uniqueRepo);

    
    
    // completeArray.push(data.filter(function(d){ return d.topics === undefined || d.topics.length == 0 }))
    
    var svg = d3.select('#viz5')
    .append('svg')
    
    
    .attr('width', '99%')
    .attr('height', '400px')
    ;

    var g_svg = svg
    .selectAll('.concept')
    .data(data.filter(function(d){ return d.cat === 'k12'}))
    // .data(data)
    .enter()
    .append('g')
    .attr('opacity', '0.2')
    .attr('class', 'group_viz')
    ;
    
    g_svg
    .append('rect')
    .attr('x', '20px')
    .attr('y', function(d, i) { return i*50 + 'px'})
    .attr('height', '50px')
    .attr('width', '50px')
    .attr('fill', 'white')
    // .attr('stroke', 'black')
    ;
    
    function extraLine(selection, first, last) {
        selection
        .attr("first-name", first)
        .attr("last-name", last);
}
    
    
    g_svg
    // .on('mouseover', function(d){d3.select(this).select('rect').attr('fill', 'green')})
    // .on('mouseout', function(d){d3.select(this).select('rect').attr('fill', 'white')})
    .on('mouseover', function(d){d3.select(this).select('rect').attr('fill', 'green')})
    .on('mouseout', function(d){d3.select(this).select('rect').attr('fill', 'white')})
    ;
    
    g_svg
    .append('line')
    .attr('x1', '70px')
    .attr('y1', function(d, i){ return i*50+'px'})
    .attr('x2', '100px')
    .attr('y2', function(d, i){ return i*50+'px'})
    .attr('stroke', 'black')
    ;
    
    }
);

