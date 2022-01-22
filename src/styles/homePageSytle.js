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
        margin: '5vh auto',
        fontWeight: 'bold'
    },
    headingSecondary: {
        fontWeight: 'bold',
        color: "#000"
    },
    categoryBanner: {
        backgroundColor: "#fff",
    },
    items: {
        marginTop: "10%"
    }
}));

export default style;