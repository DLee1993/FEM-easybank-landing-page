import { useEffect, useState } from "react";
import { Menu, Button, createStyles } from "@mantine/core";
import hamburger from "../assets/images/icon-hamburger.svg";

const MobileMenu = () => {
    const [opened, setOpened] = useState(false);
    const useStyles = createStyles(() => ({
        item: {
            textAlign: "center",
            width: "90vw",
            backgroundColor: "red",
        },
    }));
    const { classes } = useStyles();

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (opened && window.innerWidth >= 640) {
                setOpened(false);
            }
        });
    }, [opened]);

    return (
        <Menu
            shadow="md"
            className="block sm:hidden"
            offset={20}
            position="bottom-end"
            classNames={classes}
            opened={opened}
            onChange={setOpened}
        >
            <Menu.Target>
                <Button className="active:bg-cyan">
                    <img src={hamburger} alt="open menu button" />
                </Button>
            </Menu.Target>

            <Menu.Dropdown mx="auto" className="block sm:hidden">
                <Menu.Item>Home</Menu.Item>
                <Menu.Item>About</Menu.Item>
                <Menu.Item>Contact</Menu.Item>
                <Menu.Item>Blog</Menu.Item>
                <Menu.Item>Careers</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};

export default MobileMenu;
