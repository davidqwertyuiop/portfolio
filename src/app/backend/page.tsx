import { RoleProvider } from "@/components/RoleContext";
import { HomeTemplate } from "@/components/HomeTemplate";

export default function BackendHome() {
  return (
    <RoleProvider role="backend">
      <HomeTemplate />
    </RoleProvider>
  );
}
