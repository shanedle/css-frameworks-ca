import React from "react";
import { Container } from "react-bootstrap";
import HomeCarousel from "../components/home/HomeCarousel";
import HomeTabs from "../components/home/HomeTabs";

const Home = () => {
    return (
        <>
            <HomeCarousel />
            <Container>
                <div className="my-3">
                    <h2 className="home-header my-3">We do YAY things</h2>
                    <p>
                        Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi,
                        a rutrum justo eros pretium libero. Nullam vel enim id mauris
                        eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu
                        sit amet, consectetur faucibus urna. Suspendisse massa diam,
                        efficitur eu massa euismod, pretium lacinia magna. Donec mi orci,
                        sollicitudin in luctus a, varius eget massa.
                    </p>
                </div>
                <HomeTabs />

            </Container>

        </>
    );
}

export default Home;