export default function SectionNumber({
  num,
  color = "orange",
}: {
  num: string | number;
  color?: string;
}) {
  return (
    <div className="ml-10!">
      <p
        className={`text-[40px] leading-10 font-book ${color === "orange" ? "text-orange-new" : "text-gray-menu"}`}
      >
        {String(num).padStart(2, "0") + "/"}
      </p>
    </div>
  );
}
