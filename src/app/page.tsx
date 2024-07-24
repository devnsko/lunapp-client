import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
        <main className="container position-absolute top-50 start-50 translate-middle">
          <h1 className="text-center title h1">Welcome to Lunapp!🌌</h1>
          <div className="d-flex justify-content-center mt-5">
            <Link className="btn btn-light me-3" href="/photoofday">Picture of Day</Link>
            <Link className="btn btn-dark disabled" href="/near">Near Earth Objects</Link>
          </div>
        </main>
  );
}
