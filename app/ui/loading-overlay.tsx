import Spinner from "./spinner";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm flex items-center justify-center">
      <Spinner />
    </div>
  );
}