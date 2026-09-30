export type Particular = {
  label: string;
  value: string;
  detail?: string;
  wide?: boolean;
};

export const developerName = "Premierex Sdn Bhd (381130-W)";
export const developerAddress =
  "The Property Gallery, No. 69LG & 70LG, Jalan BS 1/2, Pusat Perniagaan Olive Hill, Taman Bukit Serdang, Seksyen 1, 43300 Seri Kembangan, Selangor Darul Ehsan";
export const developerLicense = "31392/05-2031/0139(N)";
export const advertisingPermit = "31392-1/09-2029/0718(N)-(S)";

export const particulars: Particular[] = [
  { label: "Developer", value: developerName },
  {
    label: "Address",
    value: developerAddress,
    wide: true,
  },
  { label: "Type", value: "Residential Apartment/Condominium" },
  {
    label: "Developer's License",
    value: developerLicense,
    detail: "Validity Period: 25 May 2026 till 24 May 2031",
  },
  {
    label: "Advertising Permit",
    value: advertisingPermit,
    detail: "Validity Period: 26 Sept 2026 till 25 Sept 2029",
  },
  {
    label: "Building Plan Approval No.",
    value: "MBSJ.BGN.BP7.600-1/10/4/23(23)",
  },
  { label: "Approving Authority", value: "Majlis Bandaraya Subang Jaya" },
  { label: "Tenure", value: "Freehold" },
  { label: "Encumbrance", value: "RHB Bank Berhad" },
  {
    label: "Total Free Market Units",
    value: "418 units",
    detail: "Price: RM481,600 (Minimum) - RM1,104,700 (Maximum)",
  },
  {
    label: "Total RSKU Units",
    value: "108 units",
    detail: "Price: RM191,500",
  },
  { label: "Bumiputera Discount", value: "7%" },
];

export const advertisementDisclaimer =
  "The information contained herein is subject to change without notification as may be required by relevant authorities or the developer's consultants and cannot form part of an offer or contract. Whilst every care is taken in providing this information, the owner, developer and managers cannot be held liable for variations. All illustrations and pictures are Artist's Impression only. The items are subject to variations, modifications and substitutions as may be recommended by the Company's Consultants and/or relevant approving authorities. This advertisement has been approved by Jabatan Perumahan Negara.";

export const teduhUrl = "https://teduh.kpkt.gov.my";

export const developerSiteUrl = "https://premierex.my";
