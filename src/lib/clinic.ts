export const clinic = {
  name: "Jeya Physio Clinic",
  tamilName: "ஜெயா பிசியோ கிளினிக்",
  doctor: "Dr. X. Sagila Jeyasilin",
  tamilDoctor: "Dr. X. சகிலா ஜெயசிலின்",
  qualification: "B.P.T, MIAP",
  phoneDisplay: "94867 33238",
  phoneHref: "tel:+919486733238",
  whatsappHref:
    "https://wa.me/919486733238?text=Hi%2C%20I%20want%20to%20book%20a%20physiotherapy%20appointment.",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=89%20East%20Govindapuram%20Dindigul%20624001%20Jeya%20Physio%20Clinic",
  address:
    "Opposite Saiva Perumakkal Peravai Thirumana Mandapam, 89, East Govindapuram, Dindigul - 624001.",
  tamilAddress:
    "சைவப்பெருமக்கள் பேரவை திருமண மண்டபம் எதிரில், 89, கிழக்கு கோவிந்தாபுரம், திண்டுக்கல் - 624001.",
  timings: [
    { label: "Morning", tamil: "காலை", value: "10:30 AM - 1:00 PM" },
    { label: "Evening", tamil: "மாலை", value: "5:00 PM - 8:00 PM" },
    { label: "Sunday", tamil: "ஞாயிறு", value: "Closed" },
  ],
};

export const trustStats = [
  { value: "B.P.T", label: "Qualified care", tamil: "தகுதி பெற்ற சிகிச்சை" },
  { value: "MIAP", label: "Professional member", tamil: "தொழில்முறை நம்பிக்கை" },
  { value: "2", label: "Daily sessions", tamil: "காலை & மாலை" },
  { value: "DGL", label: "East Govindapuram", tamil: "திண்டுக்கல்" },
];

export const serviceCards = [
  {
    title: "Back & Spine Pain",
    tamil: "முதுகு / முதுகுத்தண்டு வலி",
    image: "/images/therapy-back-pain.png",
    points: ["Lower back pain", "Disc-related discomfort", "Posture correction"],
  },
  {
    title: "Knee & Joint Care",
    tamil: "மூட்டு / முழங்கால் வலி",
    image: "/images/therapy-knee-care.png",
    points: ["Knee pain", "Joint stiffness", "Walking confidence"],
  },
  {
    title: "Neuro Rehabilitation",
    tamil: "நரம்பு / பக்கவாதம் மீட்பு",
    image: "/images/therapy-neuro-rehab.png",
    points: ["Paralysis rehab", "Nerve compression", "Hand & leg weakness"],
  },
  {
    title: "Elderly Mobility",
    tamil: "முதியோர் இயக்க சிகிச்சை",
    image: "/images/therapy-elderly-mobility.png",
    points: ["Balance support", "Safe movement", "Strength recovery"],
  },
];

export const treatmentTags = [
  "Neck pain",
  "Shoulder pain",
  "Heel pain",
  "Hip pain",
  "Sprain",
  "Muscle spasm",
  "Facial palsy",
  "Arthritis",
  "Spinal issues",
  "Congenital disability support",
  "Hand & leg weakness",
  "Post-surgery mobility",
];

export const tamilTreatmentTags = [
  "கழுத்து வலி",
  "தோள்பட்டை வலி",
  "குதிகால் வலி",
  "இடுப்பு வலி",
  "சுளுக்கு",
  "தசைப்பிடிப்பு",
  "முகவாதம்",
  "மூட்டுத் தேய்மானம்",
];

export const recoverySteps = [
  {
    title: "Assess",
    tamil: "பரிசோதனை",
    text: "Pain, movement, posture, and daily activity limits are checked carefully.",
  },
  {
    title: "Treat",
    tamil: "சிகிச்சை திட்டம்",
    text: "Therapy is planned for the exact problem, not as a generic routine.",
  },
  {
    title: "Recover",
    tamil: "மீட்பு",
    text: "Simple home guidance supports steady relief and better movement.",
  },
];

export const faqs = [
  {
    question: "Do I need to call before visiting?",
    answer: "Calling first is best so the clinic can guide you on timing and availability.",
  },
  {
    question: "Is Sunday open?",
    answer: "Sunday is closed. Morning and evening sessions are available on working days.",
  },
  {
    question: "Can elderly patients visit?",
    answer: "Yes. Mobility, balance, joint stiffness, and weakness-related care are included.",
  },
  {
    question: "Is care available for paralysis or nerve weakness?",
    answer: "Yes. Neuro rehabilitation support is part of the clinic's listed services.",
  },
];
