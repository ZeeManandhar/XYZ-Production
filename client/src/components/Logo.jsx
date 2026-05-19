import { Aperture } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="logo" to="/">
      <span className="logo-mark">
        <Aperture size={22} />
      </span>
      <span>
        <strong>XYZ</strong>
        <small>PRODUCTION</small>
      </span>
    </Link>
  );
}
