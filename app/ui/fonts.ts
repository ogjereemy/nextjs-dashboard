import { Inter } from "next/font/google";
import { Lusitana} from "next/font/google";

export const lusitana = Lusitana({
    weight: ["400", "700"],
    variable: "--inter-font-family",
    subsets: ["latin"],
});

export const inter = Inter({ subsets: ["latin"] });
