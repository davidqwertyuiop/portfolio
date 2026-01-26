import { RoleProvider } from "@/components/RoleContext";
import { HomeTemplate } from "@/components/HomeTemplate";

export default function EngineeringHome() {
  return (
    <RoleProvider role="electrical">
      <HomeTemplate />
    </RoleProvider>
  );
}
