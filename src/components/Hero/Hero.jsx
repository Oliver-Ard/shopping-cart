import heroImg from "../../assets/hero.jpg";

import {
	StyledHero,
	Title,
	Description,
	ShopLink,
	HeroImg,
} from "./Hero.styled";

import { HighlightedText } from "../../styles/shared/Utility.styled";

function Hero() {
	return (
		<StyledHero>
			<div>
				<Title>Welcome to CartNest</Title>
				<Description>
					Discover a seamless shopping experience at{" "}
					<HighlightedText>CartNest</HighlightedText>, where you can find a wide
					variety of products to suit your every need. Whether you&apos;re
					looking for the latest{" "}
					<HighlightedText>fashion trends</HighlightedText>,{" "}
					<HighlightedText>top-notch electronics</HighlightedText>, or{" "}
					<HighlightedText>home essentials</HighlightedText>, we&apos;ve got you
					covered. Enjoy, <HighlightedText>easy navigation</HighlightedText>,{" "}
					<HighlightedText>great deals</HighlightedText> and{" "}
					<HighlightedText>fast delivery</HighlightedText> all in one place.
				</Description>
				<ShopLink to="/shop">Start Shopping</ShopLink>
			</div>

			<HeroImg src={heroImg} alt="Cart with presents" />
		</StyledHero>
	);
}
export default Hero;
