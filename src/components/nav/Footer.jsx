import { Instagram, Github, Linkedin, Facebook } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="relative w-full">
            <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-text-green-50  p-5 md:flex-row md:justify-between">
                <p className="mb-4 text-center font-normal text-green-900 md:mb-0">&copy;{currentYear} <a href="https://pantry-buddy.netlify.app/">PantryBuddy</a></p>
                <div className="flex gap-4 text-text-green-900 sm:justify-center">
                    <a href="https://instagram.com/" target="blank"><Instagram size={20} /></a> 
                    <a href="https://github.com/deanw77/pantry-buddy/" target="blank"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/" target="blank"><Linkedin size={20} /></a> 
                    <a href="https://www.facebook.com/" target="blank"><Facebook size={20} /></a> 
                </div>
            </div>
        </footer>
    )
}