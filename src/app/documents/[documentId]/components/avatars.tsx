import { ClientSideSuspense } from "@liveblocks/react";
import { useOthers, useSelf } from "@liveblocks/react/suspense";
import { Separator } from "@/components/ui/separator";

enum AvatarProperties {
  AVATAR_SIZE = 36,
}

export function Avatars() {
  return (
    <ClientSideSuspense fallback={null}>
      <AvatarStack />
    </ClientSideSuspense>
  );
}
const AvatarStack = () => {
  const users = useOthers();
  const currUser = useSelf();

  if (users.length === 0) {
    return null;
  }
  return (
    <>
      <div className="flex item-center">
        {currUser && (
          <div className="relative ml-2">
            <Avatar src={currUser.info.avatar} name="You" />
          </div>
        )}
        <div className="flex">
          {users.map(({ connectionId, info }) => {
            return (
              <Avatar key={connectionId} src={info.avatar} name={info.name} />
            );
          })}
        </div>
      </div>
      <Separator orientation="vertical" className="h-6!" />
    </>
  );
};

type AvatarProps = {
  src: string;
  name: string;
};

function Avatar({ src, name }: AvatarProps) {
  return (
    <div
      style={{
        width: AvatarProperties.AVATAR_SIZE,
        height: AvatarProperties.AVATAR_SIZE,
      }}
      className="group -ml-2 flex shrink-0 place-content-center relative border-4 border-white rounded-full bg-gray-400"
    >
      <div className="opacity-0 group-hover:opacity-100 absolute top-full py-1 px-2 text-white text-xs rounded-lg mt-2.5 z-10 bg-black whitespace-nowrap transition-opacity">
        {name}
      </div>
      <img alt={name} src={src} className="size-full rounded-full" />
    </div>
  );
}
