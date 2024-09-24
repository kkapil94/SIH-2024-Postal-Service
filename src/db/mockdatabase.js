// mockDatabase.js

const mockAddresses = [
  {
    id: 1,
    name: "John Doe",
    street: "123 Main St",
    city: "Mumbai",
    pinCode: "400001",
    postOffice: "Mumbai GPO",
  },
  {
    id: 2,
    name: "Jane Smith",
    street: "456 Park Ave",
    city: "Delhi",
    pinCode: "110001",
    postOffice: "New Delhi GPO",
  },
  {
    id: 3,
    name: "Alice Johnson",
    street: "789 Oak Rd",
    city: "Bangalore",
    pinCode: "560001",
    postOffice: "Bangalore GPO",
  },
  {
    id: 4,
    name: "Bob Wilson",
    street: "321 Pine Ln",
    city: "Chennai",
    pinCode: "600001",
    postOffice: "Chennai GPO",
  },
  {
    id: 5,
    name: "Eva Brown",
    street: "654 Elm St",
    city: "Kolkata",
    pinCode: "700001",
    postOffice: "Kolkata GPO",
  },
];

const mockPinCodes = {
  400001: { city: "Mumbai", postOffice: "Mumbai GPO" },
  110001: { city: "Delhi", postOffice: "New Delhi GPO" },
  560001: { city: "Bangalore", postOffice: "Bangalore GPO" },
  600001: { city: "Chennai", postOffice: "Chennai GPO" },
  700001: { city: "Kolkata", postOffice: "Kolkata GPO" },
};

export const interpretAddress = (inputAddress) => {
  // Simulate address interpretation
  const words = inputAddress.toLowerCase().split(" ");
  const interpretedAddress = {
    name: words.slice(0, 2).join(" "),
    street: words.slice(2, -2).join(" "),
    city: words[words.length - 2],
    pinCode: words[words.length - 1],
  };
  return interpretedAddress;
};

export const correctPinCode = (pinCode) => {
  // Simple PIN code correction: if not in mockPinCodes, return a default
  return mockPinCodes[pinCode] ? pinCode : "110001";
};

export const identifyPostOffice = (pinCode) => {
  const correctedPinCode = correctPinCode(pinCode);
  return mockPinCodes[correctedPinCode].postOffice;
};

export const validateAddress = (address) => {
  const correctedPinCode = correctPinCode(address.pinCode);
  const postOffice = identifyPostOffice(correctedPinCode);
  return {
    ...address,
    pinCode: correctedPinCode,
    postOffice: postOffice,
  };
};

// mockDatabase.js

const mockPinCodesP = {
  400001: {
    city: "Mumbai",
    postOffices: [
      { name: "Mumbai GPO", distance: 0 },
      { name: "Colaba Post Office", distance: 2.5 },
      { name: "Fort Post Office", distance: 1.8 },
    ],
  },
  110001: {
    city: "Delhi",
    postOffices: [
      { name: "New Delhi GPO", distance: 0 },
      { name: "Connaught Place Post Office", distance: 1.2 },
      { name: "Parliament Street Post Office", distance: 2.0 },
    ],
  },
  560001: {
    city: "Bangalore",
    postOffices: [
      { name: "Bangalore GPO", distance: 0 },
      { name: "Vidhana Soudha Post Office", distance: 1.5 },
      { name: "Cubbon Park Post Office", distance: 2.2 },
    ],
  },
  600001: {
    city: "Chennai",
    postOffices: [
      { name: "Chennai GPO", distance: 0 },
      { name: "Anna Road Head Post Office", distance: 1.7 },
      { name: "Mylapore Post Office", distance: 3.0 },
    ],
  },
  700001: {
    city: "Kolkata",
    postOffices: [
      { name: "Kolkata GPO", distance: 0 },
      { name: "Dalhousie Square Post Office", distance: 1.0 },
      { name: "Esplanade Post Office", distance: 1.8 },
    ],
  },

  360002: {
    city: "Rajkot",
    postOffices: [
      { name: "Rajkot Bhaktinagar", distance: 0 },
      { name: "Rajkot Hudco", distance: 2.5 },
      { name: "Rajkot Mavdi Plot", distance: 3.1 },
      { name: "Rajkot Nandanvan Society", distance: 1.8 },
      { name: "Rajkot Sadhuvasvani Road", distance: 2.2 },
    ],
  },
};

export const getNearbyPostOffices = (pinCode) => {
  const correctedPinCode = correctPinCodeP(pinCode);
  return mockPinCodesP[correctedPinCode];
};

export const correctPinCodeP = (pinCode) => {
  // Simple PIN code correction: if not in mockPinCodes, return a default
  return mockPinCodesP[pinCode] ? pinCode : "110001";
};

// Keep other functions like interpretAddress and validateAddress as they are
