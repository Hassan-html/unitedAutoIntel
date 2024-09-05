export const fetchCompanyDetails = async () => {
  try {
    const response = await fetch(
      "https://unitedautointl.com/cms/wp-json/company/v1/details/",
      {
        headers: {
          Authorization: "Basic " + btoa("unitedauto_hsn:United-auto_2024"), // Replace with actual credentials
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch company details");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching company details:", error);
    return null;
  }
};
