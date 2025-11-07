function sendRentalAlerts() {
    // Replace with the intended recipient email
    const recipientEmail = "alert.recipient@example.com"; 
    const sheet = SpreadsheetApp.getActiveSpreadsheet();

    // Generic list of property units (replace with generic examples if necessary)
    const propertyUnits = ['Millenium Unit', 'Jardins Unit A', 'Soneto Unit B', 'Garage Unit'];

    // Function to send email
    const sendEmail = (to, subject, body) => {
        MailApp.sendEmail({
            to: to,
            subject: subject,
            htmlBody: body,
            name: "Due Date Reminder System"
        });
    };

    // Process each unit
    propertyUnits.forEach(unit => {
        const unitSheet = sheet.getSheetByName(unit);
        if (!unitSheet) return; // Skip if sheet does not exist

        // Get values for due date (C1) and adjustment (D1) flags
        const vencimentoAlertFlag = unitSheet.getRange('C1').getValue();
        const reajusteAlertFlag = unitSheet.getRange('D1').getValue();

        // Check for due date alert
        if (vencimentoAlertFlag === "VENCIMENTO") {
            const subject = `Rental Alert: Due Date - ${unit}`;
            const body = `Please check the property management spreadsheet for ${unit}.`;
            sendEmail(recipientEmail, subject, body);
        }

        // Check for adjustment date alert
        if (reajusteAlertFlag === "REAJUSTE") {
            const subject = `Rental Alert: Adjustment Date - ${unit}`;
            const body = `Today is the adjustment date for ${unit}.`;
            sendEmail(recipientEmail, subject, body);
        }
    });
}