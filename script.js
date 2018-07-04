var Series = React.createClass({

    propTypes: { 
        items: React.PropTypes.array.isRequired, 
    },

    render: function() { 
        var series = this.props.items.map(function(serial){
            
            return (
                React.createElement('li', {key: serial.id}, 
                    React.createElement('h2', {}, serial.title),
                    React.createElement('p', {},serial.desc),
                    React.createElement('img', {src: serial.img})

                )
            )
        });

        return (
            React.createElement('ul', {className: 'seriesList'}, series)
        );
    }

});

var items = [
    {
        id: 1,
        title: 'Breaking Bad',
        desc: 'Serial o historii dilera narkotyków',
        img: './images/bb-v.jpg'
    },
    {
        id: 2,
        title: 'Gra o tron',
        desc: 'Serial o losach siedmiu królestw',
        img: './images/got-v.jpg'
    },
    {
        id: 3,
        title: 'Peaky blinders',
        desc: 'Serial o losach gangsterskiej rodziny z Birmingham',
        img: './images/peaky-v.jpg'

    },
    {
        id: 4,
        title: 'Stranger things',
        desc: 'Serial o przygodach grupy dzieci',
        img: './images/stranger-things.jpg'
    }
];

var element = React.createElement(Series, {items:items});
ReactDOM.render(element, document.getElementById('app'));
