import React from "react";


export default function ChallengeImage({ src, alt, loading = "lazy", ...props }) {
	return <img {...props} src={src} alt={alt} loading={loading}  className="rounded-2xl"/>;
}
