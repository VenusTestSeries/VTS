const pricingData = [
  {
    planName: "Free Forever",
    price: {
      monthly: 0,
      yearly: 0,
    },

    list: [
      {
        label: "Limited Mock Tests",
        access: true,
      },
      {
        label: "Limited Study Material",
        access: true,
      },
      {
        label: "Limited Access to feature of Playground",
        access: true,
      },
      {
        label: "Video Tutorial",
        access: false,
      },
      {
        label: "Asking doubts",
        access: false,
      },
      {
        label: "Consultation with toppers",
        access: false,
      },
      {
        label: "Access to Private Group",
        access: false,
      },
    ],
  },
  {
    planName: "Premium",
    price: {
      monthly: 120,
      yearly: 1000,
    },
    list: [
      {
        label: "All Mock Tests",
        access: true,
      },
      {
        label: "All Study Material",
        access: true,
      },
      {
        label: "All feature of Playground",
        access: true,
      },
      {
        label: "Free Video Tutorials",
        access: true,
      },
      {
        label: "Doubts Solving",
        access: true,
      },
      {
        label: "Consultation with toppers",
        access: true,
      },
      {
        label: "Access to Private Groups",
        access: true,
      },
      // {
      //     label: 'Opportunity to work with team',
      //     access: true,
      // },
    ],
  },
  {
    planName: "Customs",
    price: {
      monthly: 240,
      yearly: 2000,
    },
    list: [
      {
        label: "All Mock Tests",
        access: true,
      },
      {
        label: "All Study Material",
        access: true,
      },
      {
        label: "All feature of Playground",
        access: true,
      },
      {
        label: "Free Video Tutorials",
        access: true,
      },
      {
        label: "Doubts Solving",
        access: true,
      },
      {
        label: "Consultation with toppers",
        access: true,
      },
      {
        label: "Access to Private Group",
        access: true,
      },
    ],
  },
];

export default pricingData;

// Free Forever
// ✓ Limited Mock Tests
// ✓ Limited Study Material
// ✓ Limited Access to feature of Playground
// x Video Tutorial
// x Asking doubts
// x Consultation with toppers
// x Access to Private Group
// Premium
// ✓ All Mock Tests
// ✓ All Study Material
// ✓ All feature of Playground
// ✓ Free Video Tutorials
// ✓ Doubts Solving
// ✓ Consultation with toppers
// ✓ Access to Private Groups
// ✓ Opportunity to work with team
// Customs
// ✓ Pricing Model Of VTS
// ✓ All Mock Tests
// ✓ All Study Material
// ✓ All feature of Playground
// ✓ Free Video Tutorials
// ✓ Doubts Solving
// ✓ Consultation with toppers
// ✓ Access to Private

// 120 - premium
// t
