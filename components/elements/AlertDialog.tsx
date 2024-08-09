import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FadeDown } from "animease";
import Alert01Icon from "@/public/svg/icons/Alert01Icon";

export default function AlertDialog({
  title,
  message,
}: {
    title: string;
  message: string;
}) {
  return (
    <FadeDown variant="div">
      <Alert className="bg-neutral-900 border-l-4 border-red-500">
          <Alert01Icon />
          <AlertTitle className="text-gray-100 text-lg font-semibold">{title}</AlertTitle>
          <AlertDescription className="text-gray-300 mt-1">{message}</AlertDescription>
      </Alert>
    </FadeDown>
  );
}
