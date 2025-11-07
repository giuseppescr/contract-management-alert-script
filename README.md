# contract-management-alert-script
An automated solution developed using Google Apps Script (JavaScript) to manage and alert on rental contract dates.

# Contract Management Alert Script

## Project Description
This is a practical **Process Automation** solution developed using **Google Apps Script (JavaScript)**. Its primary function is to monitor and manage critical contract deadlines for a real estate property portfolio.

The script demonstrates the ability to implement custom business logic for workflow optimization.

## Key Features & Business Logic
* **Automated Deadline Monitoring:** The script iterates through individual property sheets, comparing the current date against two critical dates: **payment deadlines (VENCIMENTO)** and **contract adjustment dates (REAJUSTE)**.
* **Risk Mitigation & Compliance:** Email alerts are automatically triggered based on conditional logic (`IF` statements) when a specific date is reached. This process ensures **strict adherence to contract schedules** and mitigates financial and legal risks related to non-compliance.
* **Technology Stack:**
    * **Core Logic:** JavaScript (via Google Apps Script)
    * **Data Source:** Google Sheets Integration
    * **Output:** Automated Email Notifications (MailApp service)

## Problem Solved
Manually tracking contract expirations and rent adjustment dates for multiple properties is prone to human error and inefficiency. This script converts a high-risk manual workflow into a reliable, automated system, securing the client's financial and legal obligations.

## Getting Started
To run this script, the user must set up a trigger within Google Sheets and update cell values (C1 and D1) on each property sheet to trigger the "VENCIMENTO" or "REAJUSTE" status.
