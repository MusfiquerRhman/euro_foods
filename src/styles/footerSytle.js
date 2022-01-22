import { makeStyles } from "@mui/styles"

const style = makeStyles((theme) => ({
    banner: {
        backgroundColor: "#fff",
        backgroundSize: '100% 30vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    heading: {
        color: '#000',
        margin: '8vh auto',
        fontWeight: 'bold'
    },
    headingSecondary: {
        fontWeight: 'bold',
        color: "#fff"
    },
    categoryBanner: {
        backgroundColor: "#006B63",
    },
    items: {
        marginTop: "10%"
    }
}));

export default style;