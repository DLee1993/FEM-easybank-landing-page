import { Button } from "@mantine/core";
import phoneMockup from "../assets/images/image-mockups.png";
const MainContent = () => {
    return (
        <main className="h-screen bg-lightGrayBlue">
            <section id="landing_section" className="bg-white flex flex-col md:flex-row-reverse justify-evenly items-center">
                <figure className="relative w-[90%] max-w-[400px] mx-auto">
                    <img src={phoneMockup} alt="phone mockup" />
                </figure>
                <article className="text-center max-w-[90%] mx-auto">
                    <h1 className="text-darkBlue">Next generation digital banking</h1>
                    <p className="text-grayBlue">
                        Take your financial life online. Your Easybank account will be a
                        one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>
                    <Button className="gradientButton opacityHover">
                        Request Invite
                    </Button>
                </article>
            </section>
        </main>
    );
};

export default MainContent;
