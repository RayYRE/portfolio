import type { IconType } from "react-icons";
import { FaGithub, FaItchIo, FaLinkedin } from "react-icons/fa6";

export type Social = { label: string; href: string; icon: IconType };

export const profile = {
  name: "Ray Ern Yap",
  firstName: "Ray Ern",
  tagline: "Computer Science graduate · University of Melbourne",
  email: "rayern@gmail.com",
  phone: "+61 434 858 615",
  resume: "/images/RayErnYap_Resume2026.pdf",
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/RayYRE", icon: FaGithub },
  { label: "itch.io", href: "https://carelesscapybara.itch.io/", icon: FaItchIo },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ray-ern-yap/", icon: FaLinkedin },
];
