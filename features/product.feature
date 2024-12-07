Feature: Register on the Cermati App

        Scenario: Successful Registration on the Cermati App
            Given User Navigates to the Registration Page
            When User input mobile phone
            And User input email
            And User input first name
            And User input last name
            And User click button daftar
            Then User Verify Kode OTP Page
