export default function SectionNumber({
  num,
  color = "orange",
}: {
  num: string | number;
  color?: string;
}) {
  return (
    <div className="lg:ml-10!">
      <p
        className={`text-[28px] leading-7 md:text-[40px] md:leading-10 font-book ${color === "orange" ? "text-orange-new" : "text-gray-menu"}`}
      >
        {String(num).padStart(2, "0") + "/"}
      </p>
    </div>
  );
}
