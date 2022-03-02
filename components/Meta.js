import Head from 'next/head';

const Meta = ({title, keywords, description}) => {
	return (
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com"/>
			<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css?family=Libre+Franklin" rel="stylesheet" type="text/css"/>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
			<meta charSet="UTF-8"></meta>
			<link rel="icon" href="/CoderNautsLogo.svg" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			<meta name="keywords" content={keywords}/>
			<meta name="description" content={description}/>
			<title>{title}</title>
		</Head>
	)
}

Meta.defaultProps={
	title:'CoderDojo Majadahonda',
	keywords:'programing, code, coderdojo, spain, madrid, majadahonda',
	description:'CoderDojo'
}

export default Meta