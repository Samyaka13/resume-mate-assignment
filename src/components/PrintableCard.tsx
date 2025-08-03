import { useFormStore } from "@/app/store/useFormStore";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type ResumeField = {
  icon: string;
  label: string;
  value: string;
};

const PrintableCard = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { data } = useFormStore();

  const resumeFields: ResumeField[] = [
    {
      icon: "/user.svg",
      label: "Name",
      value: data.name,
    },
    {
      icon: "/mail.svg",
      label: "Email",
      value: data.email,
    },
    {
      icon: "/phone-call.svg",
      label: "Phone",
      value: data.phone,
    },
    {
      icon: "/position.svg",
      label: "Position",
      value: data.position || "-",
    },
    {
      icon: "/Description.svg",
      label: "Description",
      value: data.description || "-",
    },
  ];

  return (
    <div ref={ref} className="print:m-0">
      <Card className="w-full p-6 sm:p-8 flex flex-col gap-5 shadow-md print:shadow-none rounded-lg">
        <div className="text-xl sm:text-2xl font-bold text-center mb-4 text-gray-800">Resume</div>
        {resumeFields.map(({ icon, label, value }) => (
          <div
            key={label}
            className="flex flex-col sm:flex-row w-full gap-2 sm:gap-4 py-2 border-b last:border-b-0"
          >
            <div className="flex items-center gap-2 sm:gap-3 sm:w-1/3">
              <Image src={icon} alt={label} width={20} height={20} className="opacity-70" />
              <span className="font-semibold text-gray-700 text-sm sm:text-base">{label}:</span>
            </div>
            <div className="text-gray-600 text-sm sm:text-base">{value}</div>
          </div>
        ))}
      </Card>
    </div>
  );
});

PrintableCard.displayName = "PrintableCard";

export default PrintableCard;
