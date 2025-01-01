import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import ChallengesList from "../components/ChallengesList";
import WinnersList from "../components/WinnersList";

export function WinnersPage() {
	return (
		<div className="h-full">
			<section className="py-8 lg:py-8">
				<WinnersList />
			</section>
		</div>
	);
}
