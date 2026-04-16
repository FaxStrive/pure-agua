declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => boolean;
  }
}

export function trackPhoneConversion() {
  if (typeof window !== "undefined" && window.gtag_report_conversion) {
    window.gtag_report_conversion("tel:+14075128342");
  }
}
