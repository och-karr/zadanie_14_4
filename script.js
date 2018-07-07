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

var SerialList = React.createClass({

    propTypes: { 
        items: React.PropTypes.array.isRequired, 
    },

    render: function() { 
        var series = this.props.items.map(function(serial){
            
            return (
                React.createElement(Serial, {key: serial.id, serial: serial})
            )
        });

        return (
            React.createElement('ul', {className: 'serialList'}, series)
        );
    }

});

var Serial  = React.createClass({

    propTypes: { 
    serial: React.PropTypes.object.isRequired
    },

    render: function() { 
            
        return (
                React.createElement('li', {},
                    React.createElement(SerialTitle, {title: this.props.serial.title}),
                    React.createElement(SerialDesc, {desc: this.props.serial.desc}),
                    React.createElement(SerialImg, {img: this.props.serial.img})
                )
        )       
    }
});

var SerialTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    }
});

var SerialDesc = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    }
});

var SerialImg = React.createClass({
    propTypes: {
        img: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('img', {src: this.props.img})
        )
    }
});


var element = React.createElement(SerialList, {items:items});
ReactDOM.render(element, document.getElementById('app'));