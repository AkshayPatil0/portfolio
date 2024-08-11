import { GitHub, Linkedin, Twitter } from "react-feather";

const SOCIALS = [
  {
    name: "github",
    link: "https://github.com/AkshayPatil0",
    Icon: GitHub,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/akshay-patil-20256b162/",
    Icon: Linkedin,
  },
  {
    name: "X",
    link: "https://x.com/akshay_patil09",
    Icon: Twitter,
  },
  {
    name: "Discord",
    link: "https://discordapp.com/users/942381272116887572",
    Icon: ({ className }: { className: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.8943 4.34399C17.5183 3.71467 16.057 3.256 14.5317 3C14.3396 3.33067 14.1263 3.77866 13.977 4.13067C12.3546 3.89599 10.7439 3.89599 9.14391 4.13067C8.99457 3.77866 8.77056 3.33067 8.58922 3C7.05325 3.256 5.59191 3.71467 4.22552 4.34399C1.46286 8.41865 0.716188 12.3973 1.08952 16.3226C2.92418 17.6559 4.69486 18.4666 6.4346 19C6.86126 18.424 7.24527 17.8053 7.57594 17.1546C6.9466 16.92 6.34927 16.632 5.77327 16.2906C5.9226 16.184 6.07194 16.0667 6.21061 15.9493C9.68793 17.5387 13.4543 17.5387 16.889 15.9493C17.0383 16.0667 17.177 16.184 17.3263 16.2906C16.7503 16.632 16.153 16.92 15.5236 17.1546C15.8543 17.8053 16.2383 18.424 16.665 19C18.4036 18.4666 20.185 17.6559 22.01 16.3226C22.4687 11.7787 21.2836 7.83202 18.8943 4.34399ZM8.05593 13.9013C7.01058 13.9013 6.15725 12.952 6.15725 11.7893C6.15725 10.6267 6.98925 9.67731 8.05593 9.67731C9.11191 9.67731 9.97588 10.6267 9.95454 11.7893C9.95454 12.952 9.11191 13.9013 8.05593 13.9013ZM15.065 13.9013C14.0196 13.9013 13.1652 12.952 13.1652 11.7893C13.1652 10.6267 13.9983 9.67731 15.065 9.67731C16.121 9.67731 16.985 10.6267 16.9636 11.7893C16.9636 12.952 16.1317 13.9013 15.065 13.9013Z"
          stroke="currentColor"
          strokeWidth={2}
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

export function SocialLinks() {
  return SOCIALS.map(({ name, link, Icon }) => (
    <a
      href={link}
      key={name}
      className="group flex h-12 w-12 items-center justify-center rounded-md border-2 border-primary transition-colors duration-500 hover:bg-primary hover:text-bg xl:h-16 xl:w-16"
    >
      <Icon className="h-6 w-6 transition-transform group-hover:scale-110 xl:h-8 xl:w-8" />
    </a>
  ));
}
