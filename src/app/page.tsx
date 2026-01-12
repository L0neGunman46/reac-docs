// &nbsp; is unicode for whitespace

import Link from "next/link";

function Page() {
  return (
    <div className="flex min-h-screen min-w-screen justify-center items-center ">
      Click{" "}
      <Link href={"/documents/123"}>
        <span className="text-blue-800 underline">&nbsp;here&nbsp;</span>
      </Link>{" "}
      to go to documentsId
    </div>
  );
}

export default Page;
