import { useEffect } from "react";
import { Container, Group, Burger, Button, Paper, Transition } from "@mantine/core";
import { useDisclosure, useClickOutside } from "@mantine/hooks";
import companyLogo from "../assets/images/logo.svg";
const Header = () => {
    const [opened, { toggle, close }] = useDisclosure(false);
    const clickOutsideRef = useClickOutside(() => close());

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 640) {
                close();
            }
        });
    });

    return (
        <header className="h-20 bg-white relative z-50" ref={clickOutsideRef}>
            <Container className="flex justify-between items-center m-0 px-10 h-full w-full max-w-none">
                <img src={companyLogo} alt="company logo" />
                <Group className="hidden sm:block h-full">
                    <ul className="flex justify-center items-center h-full gap-x-3 md:gap-x-5 lg:gap-x-10 text-grayBlue font-medium">
                        <li className="navLink">Home</li>
                        <li className="navLink">About</li>
                        <li className="navLink">Contact</li>
                        <li className="navLink">Blog</li>
                        <li className="navLink">Careers</li>
                    </ul>
                </Group>

                <Button className="hidden md:block gradientButton opacityHover">
                    Request Invite
                </Button>

                <Burger opened={opened} onClick={toggle} className="block sm:hidden" size="md" />

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper
                            withBorder
                            className="absolute top-[5.5rem] left-0 right-0 z-0 w-[95%] mx-auto py-5 rounded overflow-hidden sm:hidden"
                            shadow="xl"
                            style={styles}
                        >
                            <ul className="flex flex-col justify-center items-center gap-y-5 text-darkBlue font-medium">
                                <li
                                    className="cursor-pointer flex items-center justify-center w-full h-10"
                                    onClick={close}
                                >
                                    Home
                                </li>
                                <li
                                    className="cursor-pointer flex items-center justify-center w-full h-10"
                                    onClick={close}
                                >
                                    About
                                </li>
                                <li
                                    className="cursor-pointer flex items-center justify-center w-full h-10"
                                    onClick={close}
                                >
                                    Contact
                                </li>
                                <li
                                    className="cursor-pointer flex items-center justify-center w-full h-10"
                                    onClick={close}
                                >
                                    Blog
                                </li>
                                <li
                                    className="cursor-pointer flex items-center justify-center w-full h-10"
                                    onClick={close}
                                >
                                    Careers
                                </li>
                            </ul>
                        </Paper>
                    )}
                </Transition>
            </Container>
        </header>
    );
};

export default Header;
