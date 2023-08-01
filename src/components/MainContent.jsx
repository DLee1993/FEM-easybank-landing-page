import { Button } from "@mantine/core";
import phoneMockup from "../assets/images/image-mockups.png";
const MainContent = () => {
    return (
        <main className="h-screen bg-lightGrayBlue">
            <section
                id="landing_section"
                className="bg-white flex flex-col md:flex-row-reverse justify-evenly items-center pb-10 md:max-h-[500px] backgroundImage"
            >
                <figure className="w-[90%] max-w-[400px] h-[350px] md:h-auto lg:max-w-[500px] mx-auto">
                    <img
                        src={phoneMockup}
                        alt="phone mockup"
                        className="relative -top-28 sm:-top-36 md:-top-12 lg:top-10"
                    />
                </figure>
                <article className="text-center md:text-left max-w-[400px] md:max-w-[380px] lg:max-w-[390px] xl:max-w-[400px] pl-2 lg:pl-0 mx-auto">
                    <h1 className="text-darkBlue max-w-[300px] mx-auto md:mx-0">
                        Next generation digital banking
                    </h1>
                    <p className="text-grayBlue my-10">
                        Take your financial life online. Your Easybank account will be a
                        one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>
                    <Button className="gradientButton opacityHover">Request Invite</Button>
                </article>
            </section>
        </main>
    );
};

export default MainContent;
