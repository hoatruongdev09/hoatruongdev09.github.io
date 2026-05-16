import { Text } from "./retroui/Text";

export default function Footer() {
    // const { theme, toggleTheme } = useTheme();
    return (
        <div className="px-4 text-center text-sm">
            <Text
                as="p"
                className="text-muted-foreground"
            >
                &copy; 2026 Hoa Truong | All rights reserved.
            </Text>
        </div>
    )
}