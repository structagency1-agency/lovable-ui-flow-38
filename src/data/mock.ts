export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export const customer = { name: "Harun R", first: "Harun", mobile: "+91 98765 43210", email: "harun.r@example.in", id: "CUS-10248", loanId: "SM-LN-2026-0418" };

export const products = [
  { id: "agri", name: "Agri & Rural Allied Loan", badge: "RURAL PRIORITY", desc: "Credit support for agricultural inputs, dairy farming, poultry, livestock and rural needs.", amount: "₹20,000 – ₹3,50,000", rate: "12% – 28% p.a.", tenure: "6 – 30 Months" },
  { id: "personal", name: "Personal & Emergency Loan", badge: "FAST TRACK", desc: "Quick digital cash assistance for medical emergencies, education and urgent needs.", amount: "₹10,000 – ₹75,000", rate: "15% – 20% p.a.", tenure: "3 – 12 Months" },
  { id: "lap", name: "Loan Against Property", badge: "HIGHER LIMIT", desc: "Higher-value financing secured against eligible property.", amount: "Flexible", rate: "Based on approved terms", tenure: "Flexible" },
];

const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];
export const emis = months.map((m, i) => ({
  no: i + 1,
  amount: 4250,
  date: `05 ${m} ${i < 7 ? 2026 : 2027}`,
  status: i < 4 ? "Paid" : i === 4 ? "Due" : "Upcoming",
}));

export const payments = [
  { emi: "EMI #04", amount: 4250, date: "05 Sep 2026, 10:42 AM", status: "Successful", txn: "SMT8842193021" },
  { emi: "EMI #03", amount: 4250, date: "04 Aug 2026, 06:15 PM", status: "Successful", txn: "SMT8731049921" },
  { emi: "EMI #03", amount: 4250, date: "04 Aug 2026, 06:02 PM", status: "Failed", txn: "SMT8731049007" },
  { emi: "EMI #02", amount: 4250, date: "05 Jul 2026, 09:20 AM", status: "Successful", txn: "SMT8620117745" },
  { emi: "EMI #01", amount: 4250, date: "05 Jun 2026, 11:08 AM", status: "Successful", txn: "SMT8511902210" },
  { emi: "Processing fee", amount: 1000, date: "28 May 2026, 03:30 PM", status: "Pending", txn: "SMT8499001284" },
];

const names = ["Harun R", "Priya Nair", "Suresh Kumar", "Anjali Deshmukh", "Mohammed Irfan", "Lakshmi Venkat", "Rakesh Yadav", "Fatima Shaikh", "Gopal Reddy", "Meena Pillai", "Arjun Patil", "Kavita Joshi"];
const places = ["Kochi", "Thrissur", "Madurai", "Nashik", "Hubli", "Salem", "Indore", "Pune", "Guntur", "Kollam", "Satara", "Jaipur"];
const prods = ["Personal Loan", "Agri Loan", "LAP", "Personal Loan", "Agri Loan"];
const statuses = ["Active", "Active", "Active", "Overdue", "Active", "New", "Active", "Inactive", "Active", "Overdue", "Active", "Existing"];

export const customers = names.map((n, i) => ({
  id: `CUS-${10248 + i * 7}`,
  name: n,
  place: places[i],
  mobile: `+91 9${(8765432 + i * 13791).toString().slice(0, 4)} ${(43210 + i * 1117).toString().slice(0, 5)}`,
  product: prods[i % 5],
  loan: [50000, 120000, 450000, 35000, 80000, 25000, 200000, 0, 60000, 75000, 150000, 40000][i],
  outstanding: [38500, 92400, 401200, 21800, 61250, 25000, 168000, 0, 44100, 58900, 131000, 12600][i],
  emi: [4250, 6800, 14200, 3150, 4900, 2400, 9800, 0, 3900, 7250, 8100, 3600][i],
  due: `${String(5 + (i % 4) * 5).padStart(2, "0")} Oct 2026`,
  status: statuses[i],
}));

export const applications = [
  { id: "SM-2026-00123", name: "Harun R", type: "Personal & Emergency", amount: 50000, date: "28 Sep 2026", status: "Under Review" },
  { id: "SM-2026-00122", name: "Deepa Menon", type: "Agri & Rural Allied", amount: 180000, date: "27 Sep 2026", status: "Submitted" },
  { id: "SM-2026-00121", name: "Vikram Singh", type: "Loan Against Property", amount: 900000, date: "26 Sep 2026", status: "Under Review" },
  { id: "SM-2026-00120", name: "Sunita Bai", type: "Agri & Rural Allied", amount: 65000, date: "25 Sep 2026", status: "Approved" },
  { id: "SM-2026-00119", name: "Ramesh Gowda", type: "Personal & Emergency", amount: 30000, date: "25 Sep 2026", status: "Disbursement Pending" },
  { id: "SM-2026-00118", name: "Ayesha Khan", type: "Personal & Emergency", amount: 45000, date: "24 Sep 2026", status: "Rejected" },
  { id: "SM-2026-00117", name: "Naveen Raj", type: "Agri & Rural Allied", amount: 120000, date: "23 Sep 2026", status: "Approved" },
  { id: "SM-2026-00116", name: "Pooja Sharma", type: "Personal & Emergency", amount: 20000, date: "22 Sep 2026", status: "Submitted" },
];

export const agents = [
  { id: "AGT-01", name: "Ravi Shankar", mobile: "+91 94470 11223", assigned: 42, today: 51250, held: 13150, status: "Active" },
  { id: "AGT-02", name: "Manoj Thomas", mobile: "+91 94471 55210", assigned: 38, today: 22400, held: 22400, status: "Active" },
  { id: "AGT-03", name: "Sajitha K", mobile: "+91 98950 77812", assigned: 35, today: 10850, held: 4200, status: "Active" },
  { id: "AGT-04", name: "Biju Varghese", mobile: "+91 97440 32190", assigned: 29, today: 0, held: 0, status: "Inactive" },
];

export const agentCustomers = [
  { name: "Harun R", loan: "Personal Loan", emi: 4250, due: "05 Oct 2026", status: "Due Today", area: "Edappally" },
  { name: "Priya Nair", loan: "Agri Loan", emi: 6800, due: "05 Oct 2026", status: "Due Today", area: "Kakkanad" },
  { name: "Lakshmi Venkat", loan: "Personal Loan", emi: 2400, due: "28 Sep 2026", status: "Overdue", area: "Aluva" },
  { name: "Meena Pillai", loan: "Agri Loan", emi: 7250, due: "30 Sep 2026", status: "Overdue", area: "Kalamassery" },
  { name: "Arjun Patil", loan: "LAP", emi: 8100, due: "10 Oct 2026", status: "Upcoming", area: "Vyttila" },
  { name: "Gopal Reddy", loan: "Personal Loan", emi: 3900, due: "05 Oct 2026", status: "Paid", area: "Palarivattom" },
  { name: "Suresh Kumar", loan: "LAP", emi: 14200, due: "05 Oct 2026", status: "Paid", area: "Kaloor" },
];

export const monthly = [
  { m: "May", upi: 3.2, cash: 1.4, disbursed: 8.5, overdue: 0.6 },
  { m: "Jun", upi: 3.8, cash: 1.6, disbursed: 7.2, overdue: 0.7 },
  { m: "Jul", upi: 4.1, cash: 1.9, disbursed: 9.1, overdue: 0.9 },
  { m: "Aug", upi: 4.6, cash: 2.1, disbursed: 6.8, overdue: 0.8 },
  { m: "Sep", upi: 5.2, cash: 2.4, disbursed: 10.4, overdue: 1.1 },
  { m: "Oct", upi: 5.9, cash: 2.6, disbursed: 9.6, overdue: 0.9 },
];
