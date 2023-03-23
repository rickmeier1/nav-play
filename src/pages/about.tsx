import { Typography, Container } from "@mui/material";

export const About = () => {
    return (
        <Container maxWidth="xl">
            <Typography variant="h3" gutterBottom>
                About DAG
            </Typography>
            <Typography variant="body1">
                Not much to say
            </Typography>
        </Container>
    )
}

export default About;