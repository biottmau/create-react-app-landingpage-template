import { makeStyles } from "@material-ui/core/styles";


const siteStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '90vh'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: "transparent",
        color: "black",
        height: '7vh',
        boxShadow:"none"

    },
    appBarCommon: {
        zIndex: theme.zIndex.drawer + 1,
        background: "#FFFFFF",
        color: "black",
        height: '7vh',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0, 1),
        marginLeft: 0,
    },
    footer:{
        display:'flex',
        height:'60vh',
        backgroundColor:"#323232"
    },
    section_land:{
        display: 'flex',
        height: '100vh',
        backgroundImage: 'url(https://source.unsplash.com/1280x720/?developer,fullstack,technology,smartphoe;mobile)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    },
    section_bio:{
        display:'flex',
        height:'40vh',
        backgroundImage: 'url(https://source.unsplash.com/1280x720/?nature,ushuai)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

}));

export default siteStyles;