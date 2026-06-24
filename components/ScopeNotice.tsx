interface ScopeNoticeProps {
  className?: string;
}

export default function ScopeNotice({ className = "" }: ScopeNoticeProps) {
  return (
    <div
      className={`flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 ring-1 ring-amber-200/60 ${className}`}
      role="note"
    >
      <svg
        className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <p className="text-sm leading-relaxed text-amber-900">
        <strong className="font-semibold">Hinweis:</strong> Unsere Mietgeräte sind kompakte
        mobile Klimaanlagen — keine Großanlagen für komplette Hallen oder große Venues. Die{" "}
        Mobil-Klimaanlage auf Anhänger (6,5&nbsp;kW) eignet sich für Räume bis ca. 80&nbsp;m².
        Der Spotcooler (10&nbsp;kW) kühlt gezielt einzelne Bereiche in Hallen, auf Baustellen
        oder bei Events.
      </p>
    </div>
  );
}
