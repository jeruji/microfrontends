import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme)=>({
    '@global': {
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
    },
        toolbar: {
        flexWrap: 'wrap',
    },
        toolbarTitle: {
        flexGrow: 1,
    },
        link: {
        margin: theme.spacing(1, 1.5),
    },
        heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700],
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
        cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
        footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

export default function Detail() {

    const classes = useStyles();

    const sampleArticle = {
        title: 'A developer-first layout engine for web',
        author: 'forsigner',
        image: 'https://miro.medium.com/max/700/1*9tzSfXFHIKr00l_MeV13NA.png',
        content: `Why write this article?
        A few days ago, I released one of my front-end open source projects named: Fower. Many users have asked me what is the difference between Fower and Tailwindcss. My answer is that Fower has the same philosophy in utilty-first. In fact, CSS framework with the utilty-first concept has existed for a long time, such as: ACSS, Tachyons.
        One of the biggest differences between Fower and Tailwindcss is that Fower provides a very easy-to-use layout tool: Fower Layout toolkit, which is the reason for writing this article. Below I will share in detail the original intention of developing the Fower layout and its design ideas.`
    }

    return(
        <React.Fragment>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    {sampleArticle.title}
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={`${sampleArticle.image}`}
                                title="Image title"
                            />
                        </Card>
                    </Grid>
                </Grid>        
                <Typography
                    variant="body1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    {sampleArticle.content}
                </Typography>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
    )
}