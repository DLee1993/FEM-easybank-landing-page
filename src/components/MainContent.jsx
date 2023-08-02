import { Card, Image, Text, Button, Group } from "@mantine/core";
import phoneMockup from "../assets/images/image-mockups.png";
import { cards } from "./sectionContent";
import { articles } from "./sectionContent";
const MainContent = () => {
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

    const articleContent = articles.map((articleItem, index) => (
        <Card
            withBorder
            className="max-w-[325px] xl:max-w-[280px] h-[28rem] mx-auto text-center my-10 xl:mx-0 xl:text-left rounded-lg"
            key={index}
        >
            <Card.Section>
                <Image src={articleItem.img} alt={articleItem.title} fit="cover" height={200} />
            </Card.Section>

            <Card.Section className="p-4">
                <Text className="text-grayBlue">
                    <sub>By {articleItem.author}</sub>
                </Text>

                <Text className="py-3 text-xl font-medium">
                    <h2 className="gradientText">{articleItem.title}</h2>
                </Text>

                <Text className="text-grayBlue">
                    <p>{articleItem.content}</p>
                </Text>
            </Card.Section>
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
                <Group className="w-full" position="apart">
                    {cardContent}
                </Group>
            </section>
            <section className="flex flex-col justify-evenly items-start min-h-[700px] bg-white">
                <h2 className="text-3xl lg:text-4xl mb-5 w-full mt-12 text-center xl:text-left">
                    Latest Articles
                </h2>
                <Group className="w-full" position="apart">
                    {articleContent}
                </Group>
            </section>
        </main>
    );
};

export default MainContent;
