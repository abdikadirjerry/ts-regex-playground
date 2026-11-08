import type { RegexTemplate } from "../types/regex";

export const REGEX_TEMPLATES: RegexTemplate[] = [
  {
    id: "email",
    title: "RFC Standard Email",
    category: "Web",
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    description: "Validates standard email structure with domain and TLD.",
    sampleText:
      "Contact support@secops.io or admin.test@company.co.uk for help. Invalid: user@domain",
  },
  {
    id: "ipv4",
    title: "IPv4 Address Validator",
    category: "Security",
    pattern: "\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b",
    description: "Matches standard 4-octet IPv4 addresses.",
    sampleText:
      "Server cluster IPs: 192.168.1.1, 10.0.0.254, and invalid 999.888.777.666.",
  },
  {
    id: "jwt",
    title: "JSON Web Token (JWT)",
    category: "Security",
    pattern: "eyJ[a-zA-Z0-9-_]+\\.eyJ[a-zA-Z0-9-_]+\\.[a-zA-Z0-9-_]+",
    description: "Identifies standard 3-part base64-encoded JWT structures.",
    sampleText:
      "Active session token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  },
  {
    id: "uuid",
    title: "UUID v4 Format",
    category: "Data",
    pattern:
      "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}",
    description: "Matches standard Version 4 UUIDs.",
    sampleText:
      "Transaction IDs: 123e4567-e89b-12d3-a456-426614174000 and 6ba7b810-9dad-11d1-80b4-00c04fd430c8.",
  },
];
