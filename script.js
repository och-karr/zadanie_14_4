var Series = React.createClass({

    propTypes: { 
        series: React.PropTypes.object.isRequired, 
    },
    
    render: function() { 
        return (
            React.createElement('li', {key: this.props.series.id}, 
                React.createElement('h2', {}, this.props.series.title),
                React.createElement('p', {}, this.props.series.desc),
                React.createElement('img', {src: this.props.series.img})

            )
        )
    },

});

var series = [
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

var element = React.createElement(Series, {key: series.id, series: series[0] });
// nie wiem jak to zrobic. wyswietlaja mi sie rozne filmy w zalznosci od numeru elementu tablicy ale neiwiem jak to uzaleznic od zmiennej. 
//nie wiem dlaczego series[series.id] nie dziala.

ReactDOM.render(element, document.getElementById('app'));
