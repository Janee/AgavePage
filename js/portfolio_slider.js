$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
			{
			'title' : 'My Something Blue',
			'description'   : 'Website con portafolio de servicios en fotografía y vídeo para eventos.',
			'thumbnail' : ['img/portfolio/small/msb/1.jpg', 'img/portfolio/small/msb/2.jpg', 'img/portfolio/small/msb/3.jpg', 'img/portfolio/small/msb/4.jpg'],
			'large' : ['img/portfolio/large/msb/1.jpg', 'img/portfolio/large/msb/2.jpg', 'img/portfolio/large/msb/3.jpg', 'img/portfolio/large/msb/4.jpg'],
			'button_list'   :
			[
			{ 'title':'Website', 'url':'http://www.mysomethingblue.com.mx'}
			],
			'tags'  : ['Todos', 'Website']
			},

			{
			'title' : 'Crossphene',
			'description'   : 'Red social para deportistas latinoamericanos.',
			'thumbnail' : ['img/portfolio/small/cp/1.jpg', 'img/portfolio/small/cp/2.jpg', 'img/portfolio/small/cp/3.jpg', 'img/portfolio/small/cp/4.jpg'],
			'large' : ['img/portfolio/large/cp/1.jpg', 'img/portfolio/large/cp/2.jpg', 'img/portfolio/large/cp/3.jpg', 'img/portfolio/large/cp/4.jpg'],
			'button_list'   :
			[/**
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}*/
			],
			'tags'  : ['Diseño','Todos']
			},

			{
			'title' : 'Agua Artesana',
			'description'   : 'El arte de sanar. Empresa generadora de Agua potable.',
			'thumbnail' : ['img/portfolio/small/ar/1.png','img/portfolio/small/ar/2.png'],
			'large' : ['img/portfolio/large/ar/1.png','img/portfolio/large/ar/2.png'],
			'button_list'   :
			[/**
			{ 'title':'Demo', 'url' : 'http://#' },*/
			{ 'title':'Website', 'url':'http://www.aguartesana.com'}
			],
			'tags'  : ['Website', 'Diseño', 'Todos']
			},

			{
			'title' : 'Pasarela Miss XV NL',
			'description'   : 'Certamen y talleres enfocados a jóvenes adolescentes.',
			'thumbnail' : ['img/portfolio/small/pm/1.png', 'img/portfolio/small/pm/2.png', 'img/portfolio/small/pm/3.png'],
			'large' : ['img/portfolio/large/pm/1.png', 'img/portfolio/large/pm/2.png', 'img/portfolio/large/pm/3.png'],
			'button_list'   :
			[
			{ 'title':'Website', 'url':'http://pasarelamissxv.nl'}
			],
			'tags'  : ['Website','FSW', 'Diseño','Todos']
			},

			{
			'title' : 'Swiss chard pumpkin',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/17.jpg', 'img/portfolio/small/18.jpg', 'img/portfolio/small/19.jpg', 'img/portfolio/small/20.jpg'],
			'large' : ['img/portfolio/large/17.jpg', 'img/portfolio/large/18.jpg', 'img/portfolio/large/19.jpg', 'img/portfolio/large/20.jpg'],
			'button_list'   :
			[/**
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}*/
			],
			'tags'  : ['FSW','Todos']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/13.jpg','img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/13.jpg','img/portfolio/large/15.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[/**
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}*/
			],
			'tags'  : ['Diseño','Todos']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/7.jpg','img/portfolio/small/8.jpg', 'img/portfolio/small/9.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/7.jpg','img/portfolio/large/8.jpg', 'img/portfolio/large/9.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[/**
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}*/
			],
			'tags'  : ['Website','Todos']
			},

			{
			'title' : 'Shidos Burritos',
			'description'   : 'App para pedir burritos, website publicitario y software administrativo.',
			'thumbnail' : ['img/portfolio/small/sb/1.jpg', 'img/portfolio/small/sb/2.jpg', 'img/portfolio/small/sb/3.jpg', 'img/portfolio/small/sb/4.jpg', 'img/portfolio/small/sb/5.jpg'],
			'large' : ['img/portfolio/large/sb/1.jpg', 'img/portfolio/large/sb/2.jpg', 'img/portfolio/large/sb/3.jpg', 'img/portfolio/large/sb/4.jpg', 'img/portfolio/large/sb/5.jpg'],
			'button_list'   :
			[
			{ 'title':'Descargar', 'url':'http://#'}
			],
			'tags'  : ['App', 'Website', 'FSW', 'Todos']
			},

			/*{
			'title' : 'Swiss chard pumpkin',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/18.jpg', 'img/portfolio/small/18.jpg', 'img/portfolio/small/19.jpg', 'img/portfolio/small/20.jpg'],
			'large' : ['img/portfolio/large/18.jpg', 'img/portfolio/large/18.jpg', 'img/portfolio/large/19.jpg', 'img/portfolio/large/20.jpg'],
			'button_list'   :
			[/**
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['FSW','Todos']
			},

			{
			'title' : 'Winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/11.jpg','img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/11.jpg','img/portfolio/large/15.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[/**
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Website','Todos']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/3.jpg','img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/3.jpg','img/portfolio/large/15.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[/**
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Diseño','Todos']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/5.jpg','img/portfolio/small/8.jpg', 'img/portfolio/small/9.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/5.jpg','img/portfolio/large/8.jpg', 'img/portfolio/large/9.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[
			{ 'title':'Descargar', 'url':'http://#'}
			],
			'tags'  : ['App', 'FSW','Todos']
			}*/
		]
	});
});