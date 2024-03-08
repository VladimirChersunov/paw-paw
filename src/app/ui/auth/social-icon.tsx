import IconApple from "@/app/ui/icons/iconsApple";
import IconFacebook from "@/app/ui/icons/iconsFacebook";
import IconGoogle from "@/app/ui/icons/iconsGoogle";

export default function SocialIcon() {
  return (
    <ul className="flex gap-[20px]">
      <li><a href="https://www.google.com/intl/ru/gmail/about/"><IconGoogle/></a></li>
      <li><a href="https://uk-ua.facebook.com/"><IconFacebook/></a></li>
      <li><a href="https://www.apple.com/ua/"><IconApple/></a></li>
    </ul>
  )
  
};
