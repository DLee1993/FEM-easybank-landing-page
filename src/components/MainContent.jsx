import { Card, Image, Text, Button, Group } from "@mantine/core";
import phoneMockup from "../assets/images/image-mockups.png";
import onlineBanking from "../assets/images/icon-online.svg";
import budget from "../assets/images/icon-budgeting.svg";
import onboarding from "../assets/images/icon-onboarding.svg";
import api from "../assets/images/icon-api.svg";
const MainContent = () => {
    const cards = [
        {
            img: onlineBanking,
            title: "Online Banking",
            content:
                "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
        },
        {
            img: budget,
            title: "Simple Budgeting",
            content:
                "See exactly where your money goes each month. Recieve notifications when you're close to hitting limits.",
        },
        {
            img: onboarding,
            title: "Fast Onboarding",
            content:
                "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
        },
        {
            img: api,
            title: "Open API",
            content:
                "Manage your savings, investments, pension, and much more from one account. Tracking your money has never beene easier.",
        },
    ];

    const cardContent = cards.map((cardItem, index) => (
        <Card
            className="bg-transparent max-w-[325px] xl:max-w-[280px] min-h-[310px] mx-auto text-center my-10 xl:mx-0 xl:text-left"
            key={index}
        >
            <Card.Section className="w-20 mx-auto xl:mx-0">
                <Image src={cardItem.img} alt={cardItem.title} />
            </Card.Section>

            <Text className="py-10 text-2xl">
                <h2>{cardItem.title}</h2>
            </Text>

            <Text className="text-grayBlue">
                <p>{cardItem.content}</p>
            </Text>
        </Card>
    ));

    return (
        <main className="min-h-screen bg-lightGrayBlue">
            <section
                id="landing_section"
                className="bg-white flex flex-col md:flex-row-reverse justify-between items-center md:max-h-[500px] pb-20 backgroundImage"
            >
                <figure className="w-[90%] max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-[360px] md:h-auto mx-auto sm:mx-0">
                    <img
                        src={phoneMockup}
                        alt="phone mockup"
                        className="relative -top-28 sm:-top-36 md:-top-12 md:-right-10 lg:top-10 lg:-right-0"
                    />
                </figure>
                <article className="text-center md:text-left max-w-[400px] md:max-w-[360px] min-[1170px]:max-w-[390px] pl-2 lg:pl-0 mx-auto sm:mx-0">
                    <h1 className="max-w-[350px] mx-auto md:mx-0 text-4xl lg:text-5xl">
                        Next generation digital banking
                    </h1>
                    <p className="text-grayBlue my-10 md:max-w-[390px] lg:max-w-none px-2 md:px-0">
                        Take your financial life online. Your Easybank account will be a
                        one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>
                    <Button className="gradientButton opacityHover">Request Invite</Button>
                </article>
            </section>
            <section className="flex flex-col justify-evenly items-center min-h-[700px]">
                <article className="w-full mt-12 text-center xl:text-left">
                    <h2 className="text-3xl lg:text-4xl mb-5">Why Choose Easybank?</h2>
                    <p className="mb-10 max-w-[600px] mx-auto xl:mx-0 text-grayBlue">
                        We leverage Open Banking to turn your bank account into your financial hub.
                        Control your finances like never before
                    </p>
                </article>
                <Group className="w-full" position="apart">{cardContent}</Group>
            </section>
        </main>
    );
};

export default MainContent;
