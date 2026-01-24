//trigger everytime a suspense is triggered

import { FullScreenLoader } from "@/components/fullScreenLoader";

function LoadingPage() {
  return <FullScreenLoader label="Document Loading " />;
}

export default LoadingPage;
