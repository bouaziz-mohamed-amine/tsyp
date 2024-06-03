import React from "react";
import './ChallengeImage.css'

export default function ChallengeImage({ src, alt, loading = "lazy", ...props }) {
	return <img {...props} src={src} alt={alt} loading={loading} />;
}
